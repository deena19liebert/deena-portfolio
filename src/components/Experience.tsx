import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { experience } from '../data/content'

export function Experience() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section
      id="experience"
      className="section-pad"
      style={{ background: 'var(--off-white)' }}
    >
      <div
        ref={ref}
        style={{ maxWidth: '1100px', margin: '0 auto' }}
      >
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
            Experience
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
            Where I've
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              worked
            </em>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div
          style={{
            position: 'relative',
            paddingLeft: '2rem',
          }}
        >
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: '0.5rem',
              bottom: '0.5rem',
              width: '0.5px',
              background: 'var(--warm-gray)',
            }}
          />

          {experience.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ position: 'relative', paddingBottom: '3rem', paddingLeft: '2rem' }}
            >
              {/* Dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '-2.25rem',
                  top: '0.4rem',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  border: '2px solid var(--off-white)',
                }}
              />

              <div
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: '0.5rem',
                  fontWeight: 400,
                }}
              >
                {item.date}
              </div>
              <div
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: '1.8rem',
                  fontWeight: 400,
                  color: 'var(--dark)',
                  marginBottom: '0.25rem',
                }}
              >
                {item.role}
              </div>
              <div
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--muted)',
                  marginBottom: '1.25rem',
                }}
              >
                {item.company}
              </div>

              {/* Tags */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.25rem',
                }}
              >
                {item.tags.map((tag, ti) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.72rem',
                      padding: '0.25rem 0.8rem',
                      background:
                        item.tagVariant?.[ti] === 'green'
                          ? 'var(--teal-light)'
                          : 'var(--accent-light)',
                      color:
                        item.tagVariant?.[ti] === 'green'
                          ? 'var(--teal)'
                          : 'var(--accent)',
                      borderRadius: '2rem',
                      fontWeight: 400,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Points */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {item.points.map((point) => (
                  <li
                    key={point}
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text)',
                      lineHeight: 1.7,
                      paddingLeft: '1.25rem',
                      position: 'relative',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        color: 'var(--accent)',
                        fontSize: '0.85rem',
                      }}
                    >
                      →
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
