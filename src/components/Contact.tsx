import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Mail, Link2, GitBranch } from 'lucide-react'

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: 'deenaliebert@gmail.com',
    href: 'mailto:deenaliebert@gmail.com',
  },
  {
    icon: Link2,
    label: 'LinkedIn',
    value: 'linkedin.com/in/deena137',
    href: 'https://linkedin.com/in/deena137',
  },
  {
    icon: GitBranch,
    label: 'GitHub',
    value: 'github.com/deena19liebert',
    href: 'https://github.com/deena19liebert',
  },
]

export function Contact() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section
      id="contact"
      className="section-pad"
      style={{
        background: 'var(--cream)',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        ref={ref}
        className="two-col-center"
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            style={{
              fontSize: '0.7rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '1rem',
              fontWeight: 400,
            }}
          >
            Let's connect
          </p>
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: 'var(--dark)',
              marginBottom: '1rem',
              letterSpacing: '-0.01em',
            }}
          >
            I'd love to hear
            <br />
            what you're{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              building.
            </em>
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--muted)',
              lineHeight: 1.8,
              marginBottom: '2rem',
            }}
          >
            Whether it's a placement opportunity, a research collaboration,
            or just a conversation about ideas — my inbox is always open.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ x: 4, borderColor: 'var(--accent)' }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  textDecoration: 'none',
                  color: 'var(--text)',
                  padding: '1rem 1.5rem',
                  background: 'var(--off-white)',
                  borderRadius: '4px',
                  border: '0.5px solid var(--warm-gray)',
                  transition: 'border-color 0.25s',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    background: 'var(--accent-light)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: 'var(--accent)',
                  }}
                >
                  <link.icon size={16} strokeWidth={1.5} />
                </div>
                <div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--muted)',
                      display: 'block',
                      lineHeight: 1,
                    }}
                  >
                    {link.label}
                  </span>
                  <span
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--dark)',
                      fontWeight: 400,
                      display: 'block',
                      marginTop: '0.2rem',
                    }}
                  >
                    {link.value}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <blockquote
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '1.5rem',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--dark)',
              lineHeight: 1.5,
              padding: '2rem',
              background: 'var(--off-white)',
              borderRadius: '4px',
              borderLeft: '2px solid var(--accent)',
              margin: 0,
            }}
          >
            "Technology is most meaningful when it genuinely helps people —
            not as a slogan, but as a design constraint."
          </blockquote>
          <p
            style={{
              fontSize: '0.82rem',
              color: 'var(--muted)',
              lineHeight: 1.7,
            }}
          >
            Currently pursuing B.E in Computer Science &amp; Engineering at
            Rajalakshmi Institute of Technology, Chennai. CGPA 8.3.
            Available for placements and internships.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
