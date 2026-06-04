import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '8rem 3rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background watermark text */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: '22vw',
          fontWeight: 300,
          color: 'rgba(193,127,74,0.05)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          zIndex: 0,
          letterSpacing: '-0.02em',
          userSelect: 'none',
        }}
      >
        Deena
      </div>

      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '4rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div>
          {/* Eyebrow */}
          <motion.div
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{
              fontSize: '0.75rem',
              fontWeight: 400,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <span
              style={{
                display: 'block',
                width: '2rem',
                height: '0.5px',
                background: 'var(--accent)',
              }}
            />
            Chennai, India · CS Undergraduate
          </motion.div>

          {/* Name / Headline */}
          <motion.h1
            custom={0.35}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(3.5rem, 7vw, 6rem)',
              fontWeight: 300,
              lineHeight: 1.05,
              color: 'var(--dark)',
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
            }}
          >
            Turning questions
            <br />
            into{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
              software,
            </em>
            <br />
            software into impact.
          </motion.h1>

          {/* Description */}
          <motion.p
            custom={0.5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{
              fontSize: '1.1rem',
              fontWeight: 300,
              color: 'var(--muted)',
              maxWidth: '520px',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
            }}
          >
            I explore how technology — especially AI — can genuinely help
            people. I'm drawn to trust, accessibility, and human-centered
            design: the places where curiosity meets consequence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={0.65}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <a href="#contact" className="btn-primary">
              Let's Connect
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn-outline"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{
            width: '280px',
            height: '340px',
            borderRadius: '2px',
            overflow: 'hidden',
            flexShrink: 0,
            background: 'var(--warm-gray)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(135deg, var(--accent-light), var(--warm-gray))',
              opacity: 0.6,
            }}
          />
          
            <img src="/photo.jpg" alt="Deena T A" style={{ width:'100%', height:'100%', objectFit:'cover', position:'absolute', inset:0 }} />
         
          <p
            style={{
              position: 'relative',
              zIndex: 1,
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontStyle: 'italic',
              color: 'var(--muted)',
              fontSize: '0.95rem',
              textAlign: 'center',
              padding: '1rem',
            }}
          >
            Add photo.jpg
            <br />
            to /public
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '0.7rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--mid-gray)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span>Scroll</span>
        <motion.div
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 }}
          style={{
            width: '0.5px',
            height: '40px',
            background: 'var(--mid-gray)',
            transformOrigin: 'top',
          }}
        />
      </motion.div>
    </section>
  )
}
