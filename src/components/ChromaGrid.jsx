import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const ChromaGrid = ({
  items,
  className = '',
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out',
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const canvasRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  const demo = [
    {
      image: 'https://i.pravatar.cc/300?img=8',
      title: 'Alex Rivera',
      subtitle: 'Data Scientist @ Google',
      handle: '@alexrivera',
      gradient: 'linear-gradient(145deg,#D22D1E,#151316)',
      url: 'https://linkedin.com/in/',
    },
    {
      image: 'https://i.pravatar.cc/300?img=11',
      title: 'Jordan Chen',
      subtitle: 'ML Engineer @ Amazon',
      handle: '@jordanchen',
      gradient: 'linear-gradient(210deg,#963AB0,#151316)',
      url: 'https://linkedin.com/in/',
    },
    {
      image: 'https://i.pravatar.cc/300?img=3',
      title: 'Morgan Blake',
      subtitle: 'AI Researcher @ OpenAI',
      handle: '@morganblake',
      gradient: 'linear-gradient(165deg,#20469B,#151316)',
      url: 'https://linkedin.com/in/',
    },
    {
      image: 'https://i.pravatar.cc/300?img=16',
      title: 'Casey Park',
      subtitle: 'Data Analyst @ Netflix',
      handle: '@caseypark',
      gradient: 'linear-gradient(195deg,#D22D1E,#151316)',
      url: 'https://linkedin.com/in/',
    },
    {
      image: 'https://i.pravatar.cc/300?img=25',
      title: 'Sam Kim',
      subtitle: 'AI Developer @ Meta',
      handle: '@thesamkim',
      gradient: 'linear-gradient(225deg,#963AB0,#151316)',
      url: 'https://linkedin.com/in/',
    },
    {
      image: 'https://i.pravatar.cc/300?img=60',
      title: 'Tyler Rodriguez',
      subtitle: 'Cloud Engineer @ Microsoft',
      handle: '@tylerrod',
      gradient: 'linear-gradient(135deg,#20469B,#151316)',
      url: 'https://linkedin.com/in/',
    },
  ];

  const data = items?.length ? items : demo;

  // 🎨 Animated Background: Floating Dots + Connecting Lines
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let w, h;
    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const numDots = 80;
    const colors = ['#D22D1E', '#963AB0', '#20469B'];
    const dots = Array.from({ length: numDots }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: 1.2 + Math.random() * 1.4,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < numDots; i++) {
        const d = dots[i];
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;

        // Glow dots
        const gradient = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, 12);
        gradient.addColorStop(0, d.color);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius * 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Connection lines
        for (let j = i + 1; j < numDots; j++) {
          const d2 = dots[j];
          const dx = d.x - d2.x;
          const dy = d.y - d2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const alpha = 1 - dist / 120;
            ctx.strokeStyle = `rgba(255,255,255,${alpha * 0.15})`;
            ctx.beginPath();
            ctx.moveTo(d.x, d.y);
            ctx.lineTo(d2.x, d2.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    };

    draw();
    return () => window.removeEventListener('resize', resize);
  }, []);

  // 🌀 GSAP Mask Hover Movement
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, '--x', 'px');
    setY.current = gsap.quickSetter(el, '--y', 'px');
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardClick = (url) => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCardMove = (e) => {
    const c = e.currentTarget;
    const rect = c.getBoundingClientRect();
    c.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    c.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <section
      className="relative min-h-screen bg-[#0c0b0c] py-20 flex flex-col items-center justify-center overflow-hidden"
      data-scroll-section
    >
      {/* Animated Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(circle at center, #151316 10%, #0c0b0c 100%)',
        }}
      />

      {/* Heading */}
      <div className="relative text-center mb-16 px-6 z-10">
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text mb-4"
          style={{
            background:
              'linear-gradient(90deg, #D22D1E 30%, #963AB0 60%, #20469B 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Our Students’ Success
        </h2>
        <p className="text-gray-300 text-lg md:text-xl">
          From learners to leaders — see where our graduates are today.
        </p>
      </div>

      {/* Cards Grid */}
      <div
        ref={rootRef}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        className={`relative w-full max-w-6xl flex flex-wrap justify-center items-start gap-6 z-10 ${className}`}
        style={{
          '--r': `${radius}px`,
          '--x': '50%',
          '--y': '50%',
        }}
      >
        {data.map((c, i) => (
          <article
            key={i}
            onMouseMove={handleCardMove}
            onClick={() => handleCardClick(c.url)}
            className="group relative flex flex-col w-[280px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.6)] transition-transform duration-300 cursor-pointer hover:-translate-y-1"
            style={{
              background: c.gradient,
            }}
          >
            {/* Hover Glow */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
              style={{
                background:
                  'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.25), transparent 70%)',
              }}
            />

            {/* Image */}
            <div className="relative z-10">
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                className="w-full h-56 object-cover"
              />
            </div>

            {/* Text */}
            <footer className="relative z-10 p-5 text-white font-sans flex flex-col">
              <h3 className="text-lg font-semibold mb-1">{c.title}</h3>
              <p className="text-sm opacity-80 mb-1">{c.subtitle}</p>
              <span className="text-sm text-gray-400">{c.handle}</span>
            </footer>
          </article>
        ))}

        {/* Spotlight Mask */}
        <div
          ref={fadeRef}
          className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
          style={{
            backdropFilter: 'grayscale(1) brightness(0.8)',
            WebkitBackdropFilter: 'grayscale(1) brightness(0.8)',
            background: 'rgba(0,0,0,0.001)',
            maskImage:
              'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.9)30%,rgba(255,255,255,0.7)45%,rgba(255,255,255,0.5)60%,rgba(255,255,255,0.3)75%,transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.9)30%,rgba(255,255,255,0.7)45%,rgba(255,255,255,0.5)60%,rgba(255,255,255,0.3)75%,transparent 100%)',
            opacity: 1,
          }}
        />
      </div>
    </section>
  );
};

export default ChromaGrid;
