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

const works = [
  {
    client: "L사 연수원",
    body: "그룹 구매 컨퍼런스 발표자의 AI Agent 제작물 고도화 코칭, 행사 당일 기술 질의 대응",
    year: "2026",
  },
  {
    client: "K재단",
    body: "초·중등 교원 AI교육 해커톤 온라인 멘토링",
    year: "2026",
  },
  {
    client: "T사",
    body: "중소기업 AX 납품용 멀티에이전트 템플릿 공동 개발",
    year: "2026",
  },
  {
    client: "G사",
    body: "정책자금 컨설턴트용 구독형 SaaS 기획·개발 협업",
    year: "2026",
  },
];

const products = [
  {
    name: "전세가드",
    tag: "jeonse-guard",
    body: "전세 계약 전 안전진단과 계약 후 보증금 감시. 공공데이터를 교차 분석하는 AI입니다.",
    href: "https://github.com/pakko-lab/jeonse-guard",
  },
  {
    name: "디자인 하네스",
    tag: "oss-design-harness",
    body: "기획 문서 한 장에서 인터뷰, HTML 초안, Figma 구현, 검증까지 명령 하나로 이어지는 오픈소스입니다.",
    href: "https://github.com/Pakkoc/oss-design-harness",
  },
  {
    name: "스터디 커뮤니티",
    tag: "community",
    body: "약 900명 규모의 디스코드 스터디 서버를 운영하며, 공부 시간을 기록하는 트래킹 봇을 직접 만들었습니다.",
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
          <ul className="divide-y divide-line border-y border-line">
            {works.map((w) => (
              <li key={w.client} className="grid gap-2 py-6 sm:grid-cols-[10rem_1fr_auto] sm:gap-8">
                <span className="font-semibold">{w.client}</span>
                <span className="leading-relaxed text-muted">{w.body}</span>
                <span className="font-mono text-sm text-muted">{w.year}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Products */}
        <section id="products" className="scroll-mt-20 border-t border-line py-20">
          <SectionLabel no="03">직접 만든 것</SectionLabel>
          <div className="grid gap-5 md:grid-cols-3">
            {products.map((p) => {
              const inner = (
                <>
                  <span className="font-mono text-xs text-indigo">{p.tag}</span>
                  <h2 className="mt-3 text-xl font-semibold">
                    {p.name}
                    {p.href && <span className="ml-1.5 text-muted transition group-hover:text-indigo">↗</span>}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
                </>
              );
              return p.href ? (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-line p-7 transition hover:border-indigo"
                >
                  {inner}
                </a>
              ) : (
                <article key={p.name} className="rounded-2xl border border-line p-7">
                  {inner}
                </article>
              );
            })}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 border-t border-line py-24 text-center">
          <SectionLabel no="04" center>
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
          <span>위브랩(WeaveLab) · 대표 박성호</span>
          <span>© 2026 WeaveLab</span>
        </div>
      </footer>
    </>
  );
}
