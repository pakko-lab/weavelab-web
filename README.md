# weavelab.co.kr

위브랩(WeaveLab) 회사 홈페이지. Next.js 정적 빌드(`output: "export"`)를 GitHub Pages로 배포한다.

```bash
npm run dev     # 로컬 개발 (http://localhost:3000)
npm run build   # out/ 에 정적 파일 생성
```

- `main` 에 push 하면 `.github/workflows/deploy.yml` 이 빌드·배포한다.
- 도메인: `public/CNAME` (weavelab.co.kr). DNS는 가비아에서 관리.
- 고객사·협업처는 실명 대신 "L사", "K재단"처럼 익명으로 표기한다.
