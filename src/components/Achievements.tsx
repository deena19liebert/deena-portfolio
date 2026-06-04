import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { achievements } from '../data/content'

export function Achievements() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section
      id="achievements"
      className="section-pad"
      style={{ background: 'var(--off-white)' }}
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
            Achievements
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
            Moments that
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              mattered
            </em>
          </h2>
        </motion.div>

        <div
          className="three-col"
          style={{}}
        >
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: 0.1 + i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                borderColor: 'var(--accent-light)',
                y: -2,
              }}
              style={{
                padding: '1.75rem',
                background: 'var(--cream)',
                borderRadius: '4px',
                border: '0.5px solid var(--warm-gray)',
                cursor: 'default',
                transition: 'border-color 0.25s',
              }}
            >
              <div
                style={{
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: '0.5rem',
                }}
              >
                {item.year}
              </div>
              <div
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: '1.15rem',
                  fontWeight: 500,
                  color: 'var(--dark)',
                  marginBottom: '0.4rem',
                  lineHeight: 1.3,
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
