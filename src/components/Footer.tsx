export function Footer() {
  return (
    <footer className="footer-inner" style={{ borderTop: '0.5px solid var(--warm-gray)' }}>
      <span style={{ fontSize: '0.8rem', color: 'var(--mid-gray)' }}>
        © 2026 Deena T A
      </span>
      <span
        style={{
          fontSize: '0.8rem',
          color: 'var(--mid-gray)',
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontStyle: 'italic',
        }}
      >
        Designed with curiosity.
      </span>
    </footer>
  )
}
