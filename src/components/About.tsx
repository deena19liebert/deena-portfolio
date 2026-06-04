import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Search, HeartHandshake, Ruler, Sprout, type LucideIcon } from 'lucide-react'

const beliefs: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Search,
    title: 'Curious by default',
    text: "I start with questions, not answers. Every project begins with 'why does this problem exist?'",
  },
  {
    icon: HeartHandshake,
    title: 'Empathy in the architecture',
    text: 'The best systems account for the people who depend on them — their trust, their limits, their needs.',
  },
  {
    icon: Ruler,
    title: 'Research informs craft',
    text: 'I believe in understanding deeply before building. Speed matters less than building the right thing.',
  },
  {
    icon: Sprout,
    title: 'Always learning',
    text: 'CGPA 8.3 · ML cert from Stanford · Google Cybersecurity cert · Still just getting started.',
  },
]

export function About() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section
      id="about"
      className="section-pad"
      style={{ background: 'var(--off-white)' }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="two-col"
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        {/* Text column */}
        <div>
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
            About
          </p>
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: 'var(--dark)',
              marginBottom: '2rem',
              letterSpacing: '-0.01em',
            }}
          >
            I build things because
            <br />I ask{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              why
            </em>{' '}
            a lot.
          </h2>

          {[
            <>
              I'm a computer science student at Rajalakshmi Institute of
              Technology, and I've been quietly obsessed with one question
              since I started coding:{' '}
              <strong style={{ fontWeight: 500, color: 'var(--dark)' }}>
                when does software actually help people?
              </strong>
            </>,
            <>
              That question led me to AI — because intelligence at scale can
              lift real burdens. It led me to accessibility — because most
              technology is built for a narrow slice of who actually uses it.
              And it led me to trust &amp; safety — because the web has a
              honesty problem.
            </>,
            <>
              I interned as a full-stack developer at{' '}
              <strong style={{ fontWeight: 500, color: 'var(--dark)' }}>
                PropGrowthX
              </strong>
              , where I built REST APIs, backend workflows, and React
              interfaces for a property management platform. I also
              co-authored a peer-reviewed research paper on multimodal fake
              review detection.
            </>,
            <>
              Outside code, I'm the person who listens to music while
              thinking through problems, dances when words run out, and
              genuinely enjoys meeting people from completely different
              worlds.
            </>,
          ].map((para, i) => (
            <p
              key={i}
              style={{
                fontSize: '1rem',
                color: 'var(--text)',
                lineHeight: 1.9,
                marginBottom: '1.25rem',
                fontWeight: 300,
              }}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Belief cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {beliefs.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                padding: '1.5rem',
                background: 'var(--cream)',
                borderRadius: '4px',
                borderLeft: '2px solid var(--accent-light)',
                transition: 'border-color 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor =
                  'var(--accent)')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor =
                  'var(--accent-light)')
              }
            >
              <div style={{ marginBottom: '0.75rem', color: 'var(--accent)' }}>
                <b.icon size={20} strokeWidth={1.5} />
              </div>
              <div
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  color: 'var(--dark)',
                  marginBottom: '0.3rem',
                }}
              >
                {b.title}
              </div>
              <div
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--muted)',
                  lineHeight: 1.7,
                }}
              >
                {b.text}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
