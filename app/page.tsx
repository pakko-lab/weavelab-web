import { Weave } from "./weave";

const EMAIL = "carteblanche@weavelab.co.kr";

const services = [
  {
    title: "AI Agent 교육·코칭",
    body: "실무자가 직접 만든 AI 에이전트를 실전 수준으로 다듬습니다. 기업 연수, 해커톤, 교원 연수 멘토링까지 맡습니다.",
  },
  {
    title: "AX 도입·컨설팅",
    body: "10~20명 규모 팀에 맞는 AI 업무 환경을 설계합니다. 사내 메신저 기반 멀티에이전트, 업무 자동화, 데이터 파이프라인을 다룹니다.",
  },
  {
    title: "맞춤 개발",
    body: "크롤링·데이터 수집, 대시보드, 업무용 봇, 웹·모바일 앱을 만듭니다. 기획 한 장이면 시작할 수 있습니다.",
  },
];

const workGroups = [
  {
    title: "교육·코칭",
    items: [
      {
        client: "L사 연수원",
        title: "그룹 구매 컨퍼런스 발표자 AI Agent 고도화 코칭",
        detail: "4회 코칭 · 행사 당일 기술 질의 대응",
        period: "2026.08 – 09",
      },
      {
        client: "K재단",
        title: "초·중등 정보교원 AI교육 해커톤 멘토링",
        detail: "공공데이터 기반 학교 비교 서비스 팀 · 기획·데이터 설계 자문",
        period: "2026.08",
      },
    ],
  },
  {
    title: "AX 구축·개발",
    items: [
      {
        client: "T사",
        kind: "AX 구축",
        title: "중소기업 납품용 멀티에이전트 업무 템플릿 v1 완성",
        detail: "Discord 기반 · 팀별 격리 워크스페이스 · Claude·Codex BYO · 웹 파일함",
        period: "2026.06 – 09",
      },
      {
        client: "G사",
        kind: "콘텐츠 자동화",
        title: "Claude 기반 Threads 콘텐츠 자동화 관리자 웹",
        detail: "지점별 페르소나 게시물 생성 · 예약 발행 · MVP",
        period: "2026.09",
      },
      {
        client: "M커뮤니티",
        kind: "AI 비서",
        title: "메신저 기반 격리형 AI 비서 봇 구축",
        detail: "웹 검색·조회·반복 작업 대행 · 커뮤니티 실사용",
        period: "2026.04 – 05",
      },
      {
        client: "S사",
        kind: "SaaS 개발",
        title: "쿠팡 셀러 통합 관리 SaaS 리뉴얼",
        detail: "매출·정산 단일 기준 대시보드 · 자동 수집 파이프라인",
        period: "2026.09 –",
        ongoing: true,
      },
      {
        client: "B사",
        kind: "SaaS 개발",
        title: "정책자금 컨설턴트용 구독형 SaaS",
        detail: "영업팀 보고서 생성기 확장 · 공공데이터 API 연동",
        period: "2026.08 –",
        ongoing: true,
      },
    ],
  },
];

const products = [
  {
    name: "블로그 콘텐츠 어시스턴트",
    period: "2026.09 –",
    tag: "blog-assistant",
    body: "상위 노출 문서를 실측해 목표치를 잡고, 경험 메모를 바탕으로 원고·이미지를 만들어 11개 항목으로 검수합니다. 발행은 사람이 합니다.",
    stack: "Claude · Naver API",
  },
  {
    name: "디자인 하네스",
    period: "2026.09",
    tag: "oss-design-harness",
    body: "기획 문서 한 장에서 인터뷰, HTML 초안, Figma 구현, 검증까지 명령 하나로 이어지는 오픈소스 디자인 하네스.",
    stack: "Claude Code · Figma",
    href: "https://github.com/Pakkoc/oss-design-harness",
  },
  {
    name: "전세가드",
    period: "2026.07 –",
    tag: "jeonse-guard",
    body: "주소 한 줄로 전세 계약 전 안전진단, 계약 후엔 보증금 워치독. 실거래가·건축물대장을 교차 조회해 근거와 함께 리포트합니다.",
    stack: "Python · 공공데이터",
    href: "https://github.com/pakko-lab/jeonse-guard",
  },
  {
    name: "데이터 분석 에이전트 팀",
    period: "2026.03 – 04",
    tag: "da-agent-team",
    body: "스키마 분석부터 전처리, EDA, 피처 엔지니어링, 모델링, 전략 수립까지 7개 에이전트가 교차 리뷰하며 분석하는 팀.",
    stack: "Claude Code · Multi-agent",
  },
  {
    name: "주식 모니터링 대시보드",
    period: "2026.03 – 04",
    tag: "stock-dashboard",
    body: "흩어진 시세·뉴스·공시를 위젯 대시보드 하나로. AI 에이전트가 급등 원인을 분석하고 신뢰도까지 표시합니다.",
    stack: "LangGraph · Socket.IO",
    href: "https://github.com/Pakkoc/stock-monitoring-dashboard",
  },
  {
    name: "코인 차익 모니터",
    period: "2026.02 – 03",
    tag: "crypto-arb-monitor",
    body: "국내외 5개 거래소 BTC·ETH 시세를 실시간으로 비교해 김치 프리미엄과 스프레드를 계산하고 알림을 보냅니다.",
    stack: "FastAPI · WebSocket",
    href: "https://github.com/Pakkoc/crypto-arb-monitor",
  },
  {
    name: "배드민턴 샵 관리 앱",
    period: "2026.02 – 03",
    tag: "badminton-app",
    body: "배드민턴 샵의 거트 작업 일정, 고객 등록, 매장 위치 공유를 한 곳에서 관리하는 모바일 앱.",
    stack: "Flutter",
    href: "https://github.com/Pakkoc/badminton_app",
  },
  {
    name: "의류 프리사이즈 추천",
    period: "2023.06",
    tag: "ml-project",
    body: "의류 실측 데이터로 프리사이즈를 분석하고 개인 체형에 맞는 사이즈를 추천하는 머신러닝 프로젝트.",
    stack: "Python · ML",
    href: "https://github.com/Pakkoc/ML_project",
  },
];

const activities = [
  {
    title: "마법사관학교 스터디 서버 운영",
    period: "2025.06 – 현재",
    body: "1,300명이 넘는 디스코드 공부 커뮤니티를 운영하며, 공부 시간·레벨·잔디 캘린더를 기록하는 학습 트래커 봇과 전용 앱을 직접 만들었습니다.",
  },
  {
    title: "UNDP Data Dive 해커톤",
    period: "2025.07 – 08",
    body: "2025 UNDP 데이터 다이브 해커톤에서 그린워싱 탐지 ML 모델과 데이터 파이프라인(dlt·dbt)을 개발했습니다.",
  },
  {
    title: "RAG·오픈소스 스터디 운영",
    period: "2025.12 – 2026.08",
    body: "『랭체인을 활용한 RAG 비법노트』 10주 실습 스터디와 pydantic-ai 오픈소스 스터디를 꾸려 운영했습니다.",
  },
];

function SectionLabel({
  no,
  center,
  children,
}: {
  no: string;
  center?: boolean;
  children: React.ReactNode;
}) {
  return (
    <p
      className={`mb-8 flex items-center gap-3 text-sm font-medium tracking-wide text-muted ${center ? "justify-center" : ""}`}
    >
      <span className="font-mono text-rust">{no}</span>
      <span className="h-px w-8 bg-line" />
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line/70 bg-paper/85 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#" className="flex items-center gap-2.5 font-semibold">
            <Weave cols={3} rows={3} cell={10} className="h-6 w-6" />
            <span>
              WeaveLab <span className="font-normal text-muted">위브랩</span>
            </span>
          </a>
          <ul className="hidden gap-7 text-sm text-muted sm:flex">
            <li><a className="hover:text-ink" href="#services">서비스</a></li>
            <li><a className="hover:text-ink" href="#works">함께한 일</a></li>
            <li><a className="hover:text-ink" href="#products">만든 것</a></li>
            <li><a className="hover:text-ink" href="#activities">활동</a></li>
            <li><a className="hover:text-ink" href="#about">About</a></li>
            <li><a className="hover:text-ink" href="#contact">문의</a></li>
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* Hero */}
        <section className="grid items-center gap-12 py-20 sm:py-28 md:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="mb-6 text-sm font-medium tracking-[0.2em] text-indigo">
              WEAVE AI INTO WORK
            </p>
            <h1 className="font-serif text-5xl leading-[1.15] font-bold sm:text-6xl">
              AI를 일에
              <br />
              엮습니다.
            </h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-muted">
              위브랩은 AI 에이전트를 실제 업무에 엮어 넣는 팀입니다.
              교육부터 도입, 개발까지 한 번에 맡겨주세요.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="rounded-full bg-ink px-6 py-3.5 font-medium text-paper transition hover:bg-indigo"
              >
                Carte Blanche — 맡겨주세요
              </a>
              <a href="#services" className="px-2 py-3 text-muted hover:text-ink">
                무엇을 하나요 ↓
              </a>
            </div>
          </div>
          <Weave className="mx-auto w-full max-w-[300px] md:max-w-none" />
        </section>

        {/* Stats */}
        <dl className="mb-4 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
          {[
            ["2", "기업·기관 코칭"],
            ["5", "AX·개발 협업"],
            ["8", "직접 만든 제품"],
            ["1,300+", "운영 커뮤니티 인원"],
          ].map(([n, label]) => (
            <div key={label} className="bg-paper px-6 py-5">
              <dt className="text-sm text-muted">{label}</dt>
              <dd className="mt-1 font-serif text-3xl font-bold">{n}</dd>
            </div>
          ))}
        </dl>

        {/* Services */}
        <section id="services" className="scroll-mt-20 border-t border-line py-20">
          <SectionLabel no="01">무엇을 하나요</SectionLabel>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((s, i) => (
              <article key={s.title} className="rounded-2xl border border-line bg-paper-2 p-7">
                <span className="font-mono text-sm text-rust">0{i + 1}</span>
                <h2 className="mt-4 text-xl font-semibold">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Works */}
        <section id="works" className="scroll-mt-20 border-t border-line py-20">
          <SectionLabel no="02">함께한 일</SectionLabel>
          <div className="space-y-12">
            {workGroups.map((g) => (
              <div key={g.title}>
                <h3 className="mb-3 flex items-baseline gap-2 text-sm font-semibold">
                  {g.title}
                  <span className="font-mono text-xs font-normal text-muted">{g.items.length}</span>
                </h3>
                <ul className="divide-y divide-line border-y border-line">
                  {g.items.map((w) => (
                    <li key={w.client} className="grid gap-2 py-6 sm:grid-cols-[10rem_1fr_auto] sm:gap-8">
                      <span className="flex flex-col gap-1.5">
                        <span className="font-semibold">{w.client}</span>
                        {"kind" in w && (
                          <span className="w-fit rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">
                            {w.kind}
                          </span>
                        )}
                      </span>
                      <span className="flex flex-col gap-1">
                        <span className="leading-relaxed">{w.title}</span>
                        <span className="text-sm leading-relaxed text-muted">{w.detail}</span>
                      </span>
                      <span className="flex flex-col items-start gap-1.5 sm:items-end">
                        <span className="font-mono text-sm whitespace-nowrap text-muted">{w.period}</span>
                        {"ongoing" in w && w.ongoing && (
                          <span className="rounded-full bg-indigo/10 px-2.5 py-0.5 text-xs text-indigo">진행 중</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Products */}
        <section id="products" className="scroll-mt-20 border-t border-line py-20">
          <SectionLabel no="03">직접 만든 것</SectionLabel>
          <div className="grid gap-5 md:grid-cols-2">
            {products.map((p) => {
              const inner = (
                <>
                  <span className="flex items-center justify-between gap-3 font-mono text-xs">
                    <span className="text-indigo">{p.tag}</span>
                    <span className="whitespace-nowrap text-muted">{p.period}</span>
                  </span>
                  <h2 className="mt-3 text-xl font-semibold">
                    {p.name}
                    {p.href && <span className="ml-1.5 text-muted transition group-hover:text-indigo">↗</span>}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
                  <p className="mt-auto pt-4 font-mono text-xs text-muted/80">{p.stack}</p>
                </>
              );
              return p.href ? (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col rounded-2xl border border-line p-6 transition hover:border-indigo"
                >
                  {inner}
                </a>
              ) : (
                <article key={p.name} className="flex flex-col rounded-2xl border border-line p-6">
                  {inner}
                </article>
              );
            })}
          </div>
        </section>

        {/* Activities */}
        <section id="activities" className="scroll-mt-20 border-t border-line py-20">
          <SectionLabel no="04">커뮤니티·활동</SectionLabel>
          <div className="grid gap-5 md:grid-cols-3">
            {activities.map((a) => (
              <article key={a.title} className="rounded-2xl border border-line bg-paper-2 p-7">
                <p className="font-mono text-xs text-rust">{a.period}</p>
                <h2 className="mt-2 text-lg font-semibold">{a.title}</h2>
                <p className="mt-3 leading-relaxed text-muted">{a.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* About (English) */}
        <section id="about" lang="en" className="scroll-mt-20 border-t border-line py-20">
          <SectionLabel no="05">About WeaveLab</SectionLabel>
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-4 leading-relaxed text-muted">
              <p className="text-lg text-ink">
                WeaveLab is a small AI studio in South Korea that weaves AI agents into real work.
              </p>
              <p>
                We coach enterprise teams on building their own AI agents, deploy Claude-powered
                multi-agent workspaces that automate workflows for small and mid-sized companies,
                and ship our own products such as a public-data lease-deposit safety checker for
                tenants.
              </p>
            </div>
            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 self-start rounded-2xl border border-line p-6 text-sm">
              <dt className="text-muted">Company</dt>
              <dd>WeaveLab (위브랩)</dd>
              <dt className="text-muted">Founder</dt>
              <dd>Seongho Park</dd>
              <dt className="text-muted">Founded</dt>
              <dd>March 2026</dd>
              <dt className="text-muted">Business Reg. No.</dt>
              <dd className="font-mono">243-39-01339</dd>
              <dt className="text-muted">Location</dt>
              <dd>Hwaseong, Gyeonggi-do, South Korea</dd>
              <dt className="text-muted">LinkedIn</dt>
              <dd>
                <a
                  className="hover:text-indigo"
                  href="https://www.linkedin.com/in/seongho-park-7889972ba"
                  target="_blank"
                  rel="noreferrer"
                >
                  Seongho Park ↗
                </a>
              </dd>
              <dt className="text-muted">Contact</dt>
              <dd className="break-all">
                <a className="hover:text-indigo" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </dd>
            </dl>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 border-t border-line py-24 text-center">
          <SectionLabel no="06" center>
            문의
          </SectionLabel>
          <h2 className="font-serif text-3xl leading-snug font-bold sm:text-4xl">
            백지수표를 주셔도,
            <br />
            바가지는 없습니다.
          </h2>
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-muted">
            무엇을 엮어야 할지 모르겠다면, 그것부터 같이 정리해 드립니다.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-10 inline-block border-b-2 border-rust pb-1 text-lg font-medium break-all hover:text-rust sm:text-2xl"
          >
            {EMAIL}
          </a>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-8">
          <span>
            위브랩(WeaveLab) · 대표 박성호 · 사업자등록번호 243-39-01339 · 경기도 화성시
          </span>
          <span>© 2026 WeaveLab</span>
        </div>
      </footer>
    </>
  );
}
