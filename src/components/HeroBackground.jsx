import { useEffect, useRef } from 'react';

const NODE_COUNT = 70;
const MAX_DISTANCE = 150;
const MOUSE_RADIUS = 180;

function HeroBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = 0;
    let height = 0;
    let nodes = [];
    let mouse = { x: -9999, y: -9999 };
    let animationId;

    const colors = {
      sage: '156, 176, 128',
      moss: '97, 130, 100',
    };

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const createNodes = () => {
      const count = window.innerWidth < 720 ? Math.round(NODE_COUNT * 0.5) : NODE_COUNT;
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.8,
        color: Math.random() > 0.5 ? colors.sage : colors.moss,
      }));
    };

    const step = () => {
      ctx.clearRect(0, 0, width, height);

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        if (distToMouse < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - distToMouse) / MOUSE_RADIUS;
          node.x += (dx / distToMouse) * force * 1.2;
          node.y += (dy / distToMouse) * force * 1.2;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DISTANCE) {
            const opacity = (1 - dist / MAX_DISTANCE) * 0.35;
            ctx.strokeStyle = `rgba(${colors.sage}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        const dxm = nodes[i].x - mouse.x;
        const dym = nodes[i].y - mouse.y;
        const distM = Math.sqrt(dxm * dxm + dym * dym);
        if (distM < MOUSE_RADIUS) {
          const opacity = (1 - distM / MOUSE_RADIUS) * 0.5;
          ctx.strokeStyle = `rgba(${colors.sage}, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${node.color}, 0.8)`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(step);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const handleResize = () => {
      resize();
      createNodes();
    };

    resize();
    createNodes();
    step();

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />;
}

export default HeroBackground;