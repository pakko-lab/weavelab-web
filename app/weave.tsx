// 가로·세로 실이 번갈아 위아래로 지나가는 평직(plain weave) 패턴
export function Weave({
  cols = 7,
  rows = 7,
  cell = 40,
  className,
}: {
  cols?: number;
  rows?: number;
  cell?: number;
  className?: string;
}) {
  const band = cell * 0.62;
  const pad = (cell - band) / 2;
  const w = cols * cell;
  const h = rows * cell;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className={className}
      role="img"
      aria-label="가로실과 세로실이 엮인 직조 패턴"
    >
      {Array.from({ length: rows }, (_, r) => (
        <rect
          key={`h${r}`}
          x={0}
          y={r * cell + pad}
          width={w}
          height={band}
          rx={band / 2}
          fill="var(--indigo)"
        />
      ))}
      {Array.from({ length: cols }, (_, c) => (
        <rect
          key={`v${c}`}
          x={c * cell + pad}
          y={0}
          width={band}
          height={h}
          rx={band / 2}
          fill="var(--rust)"
        />
      ))}
      {/* 가로실이 위로 올라오는 칸 */}
      {Array.from({ length: rows }, (_, r) =>
        Array.from({ length: cols }, (_, c) =>
          (r + c) % 2 === 0 ? (
            <rect
              key={`o${r}-${c}`}
              x={c * cell + pad - 1}
              y={r * cell + pad}
              width={band + 2}
              height={band}
              fill="var(--indigo)"
            />
          ) : null,
        ),
      )}
    </svg>
  );
}
