import type { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const notoSerifKR = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  weight: ["600", "700"],
  preload: false,
});

const title = "위브랩 WeaveLab — AI를 일에 엮습니다";
const description =
  "위브랩은 AI 에이전트를 실제 업무에 엮어 넣는 팀입니다. AI Agent 교육·코칭, AX 도입 컨설팅, 맞춤 개발.";

export const metadata: Metadata = {
  metadataBase: new URL("https://weavelab.co.kr"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://weavelab.co.kr",
    siteName: "WeaveLab",
    locale: "ko_KR",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "WeaveLab — Weave AI into work" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${notoSerifKR.variable} antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
