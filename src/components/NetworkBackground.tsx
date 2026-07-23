import { useEffect, useRef } from 'react';

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (canvas.dataset.animated === 'true') return;
    canvas.dataset.animated = 'true';

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Retina display scaling for "4K quality" / sharp canvas
    let dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const particles: Particle[] = [];
    // Responsive count calculation based on screen size
    const particleCount = Math.min(200, Math.floor((width * height) / 6000));

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      depth: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Slow drifting velocities for "smooth micro-animations"
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        
        // Depth from 0 (background/blurry) to 1 (foreground/sharp)
        this.depth = Math.random(); 
        
        // Larger sizes for things closer in view
        this.radius = 1 + this.depth * 2.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around instead of bouncing for a more continuous network feel
        if (this.x < -100) this.x = width + 100;
        if (this.x > width + 100) this.x = -100;
        if (this.y < -100) this.y = height + 100;
        if (this.y > height + 100) this.y = -100;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        
        // Point of focus is around depth 0.6
        const focus = 1 - Math.abs(this.depth - 0.6) * 1.5;
        const opacity = 0.15 + (0.6 * this.depth);
        
        // Ambient gray color for modern dot network
        ctx.fillStyle = `rgba(30, 40, 50, ${opacity})`;
        
        // Simulated depth of field blur using shadow
        const blurAmount = Math.max(0, (1 - focus) * 4);
        if (blurAmount > 0) {
          ctx.shadowBlur = blurAmount;
          ctx.shadowColor = `rgba(30, 40, 50, ${opacity})`;
        } else {
          ctx.shadowBlur = 0;
        }
        
        ctx.fill();
        ctx.shadowBlur = 0; // Reset
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((p, i) => {
        p.update();
        p.draw();
        
        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            
            // Smoother fading connections
            const alpha = Math.pow(1 - dist / 180, 2) * 0.25;
            ctx.strokeStyle = `rgba(30, 40, 50, ${alpha})`;
            ctx.lineWidth = 0.5 + Math.min(p.depth, p2.depth) * 0.5;
            ctx.stroke();
          }
        }
      });
      
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas 
        ref={canvasRef} 
        id="network-canvas"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
          filter: 'contrast(1.05) brightness(1.02)'
        }} 
      />
      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          var canvas = document.getElementById('network-canvas');
          if (!canvas || canvas.dataset.animated === 'true') return;
          canvas.dataset.animated = 'true';

          var ctx = canvas.getContext('2d');
          if (!ctx) return;

          var dpr = window.devicePixelRatio || 1;
          var width = window.innerWidth;
          var height = window.innerHeight;

          var setCanvasSize = function() {
            width = window.innerWidth;
            height = window.innerHeight;
            dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
          };

          setCanvasSize();
          window.addEventListener('resize', setCanvasSize);

          var particles = [];
          var particleCount = Math.min(200, Math.floor((width * height) / 6000));

          function Particle() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.depth = Math.random(); 
            this.radius = 1 + this.depth * 2.5;
          }

          Particle.prototype.update = function() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < -100) this.x = width + 100;
            if (this.x > width + 100) this.x = -100;
            if (this.y < -100) this.y = height + 100;
            if (this.y > height + 100) this.y = -100;
          };

          Particle.prototype.draw = function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            
            var focus = 1 - Math.abs(this.depth - 0.6) * 1.5;
            var opacity = 0.15 + (0.6 * this.depth);
            
            ctx.fillStyle = 'rgba(30, 40, 50, ' + opacity + ')';
            
            var blurAmount = Math.max(0, (1 - focus) * 4);
            if (blurAmount > 0) {
              ctx.shadowBlur = blurAmount;
              ctx.shadowColor = 'rgba(30, 40, 50, ' + opacity + ')';
            } else {
              ctx.shadowBlur = 0;
            }
            
            ctx.fill();
            ctx.shadowBlur = 0;
          };

          for (var i = 0; i < particleCount; i++) {
            particles.push(new Particle());
          }

          var animationFrameId;

          var render = function() {
            ctx.clearRect(0, 0, width, height);
            
            particles.forEach(function(p, i) {
              p.update();
              p.draw();
              
              for (var j = i + 1; j < particles.length; j++) {
                var p2 = particles[j];
                var dx = p.x - p2.x;
                var dy = p.y - p2.y;
                var dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 180) {
                  ctx.beginPath();
                  ctx.moveTo(p.x, p.y);
                  ctx.lineTo(p2.x, p2.y);
                  
                  var alpha = Math.pow(1 - dist / 180, 2) * 0.25;
                  ctx.strokeStyle = 'rgba(30, 40, 50, ' + alpha + ')';
                  ctx.lineWidth = 0.5 + Math.min(p.depth, p2.depth) * 0.5;
                  ctx.stroke();
                }
              }
            });
            
            animationFrameId = requestAnimationFrame(render);
          };

          render();
        })();
      ` }} />
    </>
  );
}
