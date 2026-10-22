# weavelab.co.kr

위브랩(WeaveLab) 회사 홈페이지. Next.js 정적 빌드(`output: "export"`)를 GitHub Pages로 배포한다.

```bash
npm run dev     # 로컬 개발 (http://localhost:3000)
npm run build   # out/ 에 정적 파일 생성
```

- `main` 에 push 하면 `.github/workflows/deploy.yml` 이 빌드·배포한다.
- 도메인: `public/CNAME` (weavelab.co.kr). 등록은 가비아, DNS·프록시는 Cloudflare.
  Cloudflare의 "이메일 주소 난독화"는 꺼 둔다 — 켜면 첫 화면을 막는 스크립트가 붙는다.
- 폰트는 외부 CDN 없이 직접 싣는다. 본문 Pretendard는 `public/fonts/pretendard/`, 제목 Noto Serif KR은 쓰인 글자만 담은 서브셋이다.
  제목 글자를 바꿔 빌드가 실패하면 `npm run font:serif` 후 다시 빌드한다.
- 고객사·협업처는 실명 대신 "L사", "K재단"처럼 익명으로 표기한다.
