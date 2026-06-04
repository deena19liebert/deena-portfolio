import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { beyondItems } from '../data/content'

export function Beyond() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section
      id="beyond"
      className="section-pad"
      style={{ background: 'var(--cream)' }}
    >
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto' }}>
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
            Beyond code
          </p>
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: 'var(--dark)',
              marginBottom: '3rem',
              letterSpacing: '-0.01em',
            }}
          >
            What I'm like when
            <br />
            the laptop is{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              closed
            </em>
          </h2>
        </motion.div>

        <div
          className="four-col"
          style={{}}
        >
          {beyondItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: 0.1 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -3,
                boxShadow: '0 8px 32px rgba(42,37,32,0.05)',
              }}
              style={{
                padding: '2rem 1.5rem',
                background: 'var(--off-white)',
                borderRadius: '4px',
                textAlign: 'center',
                border: '0.5px solid var(--warm-gray)',
                cursor: 'default',
              }}
            >
              <div style={{ marginBottom: '1rem', color: 'var(--accent)' }}>
                <item.icon size={24} strokeWidth={1.5} />
              </div>
              <div
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: '1.1rem',
                  color: 'var(--dark)',
                  fontWeight: 500,
                  marginBottom: '0.4rem',
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--muted)',
                  lineHeight: 1.6,
                }}
              >
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
