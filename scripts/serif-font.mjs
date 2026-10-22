// 제목용 Noto Serif KR 은 font-serif 로 쓰인 글자만 담은 서브셋 폰트로 싣는다.
// (전체 폰트를 next/font/google 로 실으면 @font-face 249개짜리 CSS가 첫 화면을 2초 막았다)
//
//   node scripts/serif-font.mjs             빌드 결과에 서브셋에 없는 글자가 있으면 실패 (postbuild)
//   node scripts/serif-font.mjs --generate  빌드 결과의 글자로 서브셋 폰트를 다시 만든다 (npm run font:serif)
import { readFile, writeFile } from "node:fs/promises";

const HTML = "out/index.html";
const FONT = "app/fonts/noto-serif-kr-700.woff2";
const CHARS = "app/fonts/noto-serif-kr-700.txt";

async function serifChars() {
  const html = await readFile(HTML, "utf8");
  const chars = new Set(" ");
  const re = /<(\w+)[^>]*class="[^"]*\bfont-serif\b[^"]*"[^>]*>([\s\S]*?)<\/\1>/g;
  for (const [, , inner] of html.matchAll(re)) {
    const text = inner
      .replace(/<[^>]+>/g, "")
      .replace(/&#x27;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&");
    for (const ch of text) if (ch.trim()) chars.add(ch);
  }
  return [...chars].sort().join("");
}

const need = await serifChars();

if (process.argv.includes("--generate")) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@700&text=${encodeURIComponent(need)}`,
    { headers: { "User-Agent": "Mozilla/5.0 (Macintosh) AppleWebKit/537.36 Chrome/130 Safari/537.36" } },
  ).then((r) => r.text());
  const url = css.match(/url\((https:[^)]+)\)\s*format\('woff2'\)/)?.[1];
  if (!url) throw new Error(`woff2 주소를 찾지 못했습니다:\n${css}`);
  const font = Buffer.from(await fetch(url).then((r) => r.arrayBuffer()));
  await writeFile(FONT, font);
  await writeFile(CHARS, need + "\n");
  console.log(`${FONT} ${font.length}B · ${need.length}자`);
} else {
  const have = new Set(await readFile(CHARS, "utf8"));
  const missing = [...need].filter((ch) => !have.has(ch));
  if (missing.length) {
    console.error(`font-serif 글자 "${missing.join("")}" 가 서브셋 폰트에 없습니다. npm run font:serif 후 다시 빌드하세요.`);
    process.exit(1);
  }
}
