import React, { useEffect, useRef } from "react";

interface ParticlesBackgroundProps {
  opacity?: number;
  particleCount?: number;
  particleSize?: number;
  speed?: number;
  connectionDistance?: number;
  showConnections?: boolean;
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({ 
  opacity = 0.8, 
  particleCount = 150,
  particleSize = 3,
  speed = 0.5,
  connectionDistance = 120,
  showConnections = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      pulseSpeed: number;
      pulsePhase: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * particleSize + 1;
        this.speedX = (Math.random() - 0.5) * speed;
        this.speedY = (Math.random() - 0.5) * speed;
        
        // Enhanced color variations with purple theme
        const colors = [
          `rgba(183, 148, 246, ${Math.random() * 0.8 + 0.2})`, // purple-light
          `rgba(159, 122, 234, ${Math.random() * 0.8 + 0.2})`, // purple
          `rgba(107, 70, 193, ${Math.random() * 0.8 + 0.2})`,  // purple-dark
          `rgba(139, 92, 246, ${Math.random() * 0.8 + 0.2})`,  // violet
          `rgba(168, 85, 247, ${Math.random() * 0.8 + 0.2})`,  // purple-500
          `rgba(147, 51, 234, ${Math.random() * 0.8 + 0.2})`,  // purple-600
        ];
        
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.6 + 0.4;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }

        // Keep particles within bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));

        // Update pulse phase for breathing effect
        this.pulsePhase += this.pulseSpeed;
      }

      draw() {
        if (!ctx) return;
        
        // Create pulsing effect
        const pulseSize = this.size + Math.sin(this.pulsePhase) * 0.5;
        const pulseOpacity = this.opacity + Math.sin(this.pulsePhase) * 0.2;
        
        // Draw particle with glow effect
        ctx.save();
        ctx.globalAlpha = pulseOpacity;
        
        // Outer glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, pulseSize * 2, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, pulseSize * 2
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Inner particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        ctx.restore();
      }
    }

    const particleArray: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particleArray.push(new Particle());
    }

    // Mouse interaction
    let mouse = { x: 0, y: 0, radius: 100 };
    
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particleArray.length; i++) {
        const particle = particleArray[i];
        particle.update();
        particle.draw();

        // Mouse interaction - attract particles to mouse
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          particle.x += Math.cos(angle) * force * 0.5;
          particle.y += Math.sin(angle) * force * 0.5;
        }
      }

      // Draw connections between nearby particles
      if (showConnections) {
        for (let i = 0; i < particleArray.length; i++) {
          for (let j = i + 1; j < particleArray.length; j++) {
            const dx = particleArray[i].x - particleArray[j].x;
            const dy = particleArray[i].y - particleArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < connectionDistance) {
              ctx.save();
              ctx.globalAlpha = (1 - distance / connectionDistance) * 0.3;
              ctx.strokeStyle = 'rgba(159, 122, 234, 0.5)';
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particleArray[i].x, particleArray[i].y);
              ctx.lineTo(particleArray[j].x, particleArray[j].y);
              ctx.stroke();
              ctx.restore();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleCount, particleSize, speed, connectionDistance, showConnections]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity }}
    />
  );
};

export default ParticlesBackground;