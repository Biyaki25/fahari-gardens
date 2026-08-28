// Signature motif: a hand-drawn botanical vine that "grows" across the
// page as a section divider — a nod to the gardens the hotel is named for.
export default function SectionDivider({ tone = 'forest', className = '' }) {
  const stroke = tone === 'ivory' ? '#FAF6ED' : tone === 'gold' ? '#C1932A' : '#1E3B2A'
  return (
    <div className={`w-full flex justify-center overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 600 40"
        className="w-64 md:w-80 h-8 opacity-70"
        fill="none"
      >
        <path
          d="M0 20 C 60 5, 90 35, 150 20 S 240 5, 300 20 S 390 35, 450 20 S 540 5, 600 20"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="1000"
          className="animate-draw"
        />
        {[75, 225, 375, 525].map((cx, i) => (
          <g key={i} transform={`translate(${cx}, ${i % 2 === 0 ? 12 : 28})`}>
            <path
              d="M0 0 C 4 -6, 10 -6, 12 0 C 10 6, 4 6, 0 0 Z"
              fill={stroke}
              opacity="0.55"
            />
          </g>
        ))}
      </svg>
    </div>
  )
}
