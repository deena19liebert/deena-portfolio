export function Footer() {
  return (
    <footer
      style={{
        padding: '2rem 3rem',
        borderTop: '0.5px solid var(--warm-gray)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span style={{ fontSize: '0.8rem', color: 'var(--mid-gray)' }}>
        © 2025 Deena T A
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
