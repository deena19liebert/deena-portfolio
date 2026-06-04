import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { questions } from '../data/content'

export function Questions() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section
      id="questions"
      style={{ padding: '7rem 3rem', background: 'var(--off-white)' }}
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
            Thinking
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
            Questions I'm currently
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              exploring
            </em>
          </h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
          }}
        >
          {questions.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: 0.1 + i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ borderColor: 'var(--accent)', background: '#fdf9f4' }}
              style={{
                padding: '1.75rem',
                background: 'var(--cream)',
                borderRadius: '4px',
                border: '0.5px solid var(--warm-gray)',
                position: 'relative',
                transition: 'border-color 0.25s, background 0.25s',
                cursor: 'default',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: '3rem',
                  fontWeight: 300,
                  color: 'var(--accent-light)',
                  position: 'absolute',
                  top: '0.75rem',
                  right: '1rem',
                  lineHeight: 1,
                }}
              >
                "
              </span>
              <p
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: '1.15rem',
                  fontWeight: 400,
                  color: 'var(--dark)',
                  lineHeight: 1.5,
                  position: 'relative',
                  zIndex: 1,
                  margin: 0,
                }}
              >
                {q.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
