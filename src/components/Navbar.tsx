import { useScrollProgress } from '../hooks/useScrollProgress'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const { scrolled } = useScrollProgress()

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        padding: '1.2rem 1.25rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'background 0.3s, backdrop-filter 0.3s',
        background: scrolled ? 'rgba(250,248,244,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '0.5px solid var(--warm-gray)' : 'none',
      }}
    >
      <a
        href="#hero"
        style={{
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: '1.25rem',
          fontWeight: 400,
          color: 'var(--dark)',
          textDecoration: 'none',
          letterSpacing: '0.02em',
        }}
      >
        Deena T A
      </a>

      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                fontSize: '0.8rem',
                fontWeight: 400,
                color: 'var(--muted)',
                textDecoration: 'none',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--dark)')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--muted)')
              }
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
