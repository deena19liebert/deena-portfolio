import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { projects } from '../data/content'
import { FileText } from 'lucide-react'

export function Projects() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section
      id="projects"
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
            Work
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
            Ideas turned
            <br />
            into{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              software
            </em>
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {projects.map((project, i) => (
            <motion.div
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -2,
                boxShadow: '0 16px 48px rgba(42,37,32,0.07)',
              }}
              style={{
                padding: '2.5rem',
                background: 'var(--off-white)',
                borderRadius: '6px',
                border: '0.5px solid var(--warm-gray)',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '2rem',
                alignItems: 'start',
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    marginBottom: '0.75rem',
                    fontWeight: 400,
                  }}
                >
                  {project.tag}
                </p>
                <h3
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: '2rem',
                    fontWeight: 400,
                    color: 'var(--dark)',
                    marginBottom: '0.5rem',
                    lineHeight: 1.2,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--muted)',
                    marginBottom: '1rem',
                  }}
                >
                  {project.subtitle}
                </p>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text)',
                    lineHeight: 1.8,
                    marginBottom: '1.25rem',
                    fontWeight: 300,
                  }}
                >
                  {project.description}
                </p>

                {project.isResearch && (
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.72rem',
                      padding: '0.3rem 0.8rem',
                      background: 'var(--teal-light)',
                      color: 'var(--teal)',
                      borderRadius: '2rem',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <FileText size={12} strokeWidth={1.5} /> Peer-Reviewed Research Paper
                  </span>
                )}

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                    marginTop: project.isResearch ? '0.75rem' : '0',
                  }}
                >
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '0.7rem',
                        padding: '0.2rem 0.65rem',
                        background: 'var(--warm-gray)',
                        color: 'var(--muted)',
                        borderRadius: '2rem',
                        letterSpacing: '0.03em',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ textAlign: 'right', minWidth: '120px' }}>
                <div
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: '4rem',
                    fontWeight: 300,
                    color: 'var(--warm-gray)',
                    lineHeight: 1,
                  }}
                >
                  {project.number}
                </div>
                <div
                  style={{
                    fontSize: '0.72rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--mid-gray)',
                    marginTop: '0.5rem',
                  }}
                >
                  {project.type}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
