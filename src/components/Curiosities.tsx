import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { curiosities } from '../data/content'

export function Curiosities() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section
      id="curiosities"
      className="section-pad"
      style={{ background: 'var(--cream)' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
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
            What drives me
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
            Things I'm genuinely
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              curious
            </em>{' '}
            about
          </h2>
        </motion.div>

        <div
          className="three-col"
          style={{}}
        >
          {curiosities.map((item, i) => (
            <CuriosityCard key={item.title} item={item} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CuriosityCard({
  item,
  index,
  inView,
}: {
  item: (typeof curiosities)[number]
  index: number
  inView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: 0.1 + index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(42,37,32,0.06)' }}
      style={{
        padding: '2rem 1.5rem',
        background: 'var(--off-white)',
        borderRadius: '4px',
        border: '0.5px solid var(--warm-gray)',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Bottom accent line on hover via framer */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'var(--accent)',
          transformOrigin: 'left',
        }}
      />

      <div style={{ marginBottom: '1rem', color: 'var(--accent)' }}>
        <item.icon size={22} strokeWidth={1.5} />
      </div>
      <div
        style={{
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: '1.3rem',
          fontWeight: 500,
          color: 'var(--dark)',
          marginBottom: '0.5rem',
        }}
      >
        {item.title}
      </div>
      <div
        style={{
          fontSize: '0.85rem',
          color: 'var(--muted)',
          lineHeight: 1.7,
        }}
      >
        {item.description}
      </div>
      <div
        style={{
          fontSize: '0.75rem',
          color: 'var(--accent)',
          marginTop: '0.75rem',
          fontStyle: 'italic',
          fontFamily: '"Cormorant Garamond", Georgia, serif',
        }}
      >
        {item.note}
      </div>
    </motion.div>
  )
}
