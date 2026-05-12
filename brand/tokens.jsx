// A2EXPERTS — Brand tokens & shared atoms
const A2 = {
  // Primary palette
  ink:     '#0B1B2B',   // Navy ink
  ink2:    '#13314F',
  paper:   '#F6F8FB',
  line:    '#E3E8EF',
  muted:   '#5C6B7A',
  accent:  '#1E6BFF',   // Bleu électrique
  accent2: '#00C2A8',   // Teal
  warning: '#FF7A1A',   // Orange dépannage
  white:   '#FFFFFF',
};

// Inline SVG logomark — A²
// shape: solid filled A with small "2" exponent at top-right
function LogoMark({ size = 64, color = A2.ink, accent = A2.accent2 }) {
  const s = size;
  return (
    <svg width={s} height={s} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* A — geometric, slab-cut */}
      <path d="M10 54 L26 10 H38 L54 54 H44 L41 45 H23 L20 54 Z M26 36 H38 L32 19 Z"
            fill={color} />
      {/* ² exponent dot circle */}
      <circle cx="56" cy="14" r="7" fill={accent} />
      <text x="56" y="18" textAnchor="middle"
            fontFamily="'Manrope', system-ui, sans-serif"
            fontSize="11" fontWeight="800" fill={color}>2</text>
    </svg>
  );
}

// Full wordmark: [A²] A2EXPERTS
function Wordmark({ size = 32, color = A2.ink, accent = A2.accent2, tagline = false }) {
  const gap = size * 0.35;
  return (
    <div style={{display:'inline-flex',alignItems:'center',gap, lineHeight:1}}>
      <LogoMark size={size * 1.4} color={color} accent={accent} />
      <div style={{display:'flex',flexDirection:'column',gap: size*0.12}}>
        <div style={{
          fontFamily:"'Manrope', system-ui, sans-serif",
          fontWeight: 800, color, fontSize: size,
          letterSpacing:'-0.02em', lineHeight:1,
        }}>
          A2<span style={{color: accent}}>EXPERTS</span>
        </div>
        {tagline && (
          <div style={{
            fontFamily:"'JetBrains Mono', monospace",
            fontSize: size * 0.28, color, opacity:.6,
            letterSpacing:'0.18em', textTransform:'uppercase',
          }}>
            Dépannage IT — Nantes
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { A2, LogoMark, Wordmark });
