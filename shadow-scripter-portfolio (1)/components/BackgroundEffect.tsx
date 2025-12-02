import React, { useEffect, useRef } from 'react';

const BackgroundEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let feathers: Feather[] = [];
    let crows: Crow[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    // --- FEATHER CLASS ---
    class Feather {
      x: number;
      y: number;
      length: number;
      width: number;
      angle: number;
      speedY: number;
      speedX: number;
      rotationSpeed: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height; // Initial random positions
        this.length = Math.random() * 20 + 10;
        this.width = this.length / 4;
        this.angle = Math.random() * Math.PI * 2;
        this.speedY = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 1 - 0.5;
        this.rotationSpeed = Math.random() * 0.02 - 0.01;
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      reset() {
        this.x = Math.random() * canvas!.width;
        this.y = -50;
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX + Math.sin(this.y * 0.01) * 0.5; // Swaying motion
        this.angle += this.rotationSpeed;

        if (this.y > canvas!.height + 50) {
          this.reset();
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.beginPath();
        // Feather shape
        ctx.moveTo(0, -this.length / 2);
        ctx.quadraticCurveTo(this.width, 0, 0, this.length / 2);
        ctx.quadraticCurveTo(-this.width, 0, 0, -this.length / 2);
        
        ctx.fillStyle = `rgba(10, 10, 10, ${this.opacity})`;
        ctx.fill();
        
        // Spine
        ctx.beginPath();
        ctx.moveTo(0, -this.length / 2);
        ctx.lineTo(0, this.length / 2);
        ctx.strokeStyle = `rgba(30, 30, 30, ${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        
        ctx.restore();
      }
    }

    // --- CROW CLASS ---
    class Crow {
      x: number;
      y: number;
      scale: number;
      speedX: number;
      speedY: number;
      flapSpeed: number;
      flapFrame: number;
      opacity: number;
      direction: number; // 1 for right, -1 for left

      constructor() {
        this.reset(true);
      }

      reset(randomX = false) {
        this.direction = Math.random() > 0.5 ? 1 : -1;
        this.scale = Math.random() * 0.4 + 0.2; // Varied sizes for depth
        
        if (randomX) {
           this.x = Math.random() * canvas!.width;
        } else {
           // Start off-screen
           this.x = this.direction === 1 ? -100 : canvas!.width + 100;
        }
        
        this.y = Math.random() * (canvas!.height * 0.8); // Mostly upper/mid screen
        
        this.speedX = (Math.random() * 3 + 2) * this.direction; // Faster than feathers
        this.speedY = (Math.random() * 1 - 0.5);
        this.flapSpeed = Math.random() * 0.15 + 0.1;
        this.flapFrame = Math.random() * Math.PI;
        this.opacity = Math.random() * 0.3 + 0.1; // Subtle
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY + Math.sin(this.flapFrame) * 0.5;
        this.flapFrame += this.flapSpeed;

        // Reset if completely off screen
        if ((this.direction === 1 && this.x > canvas!.width + 100) ||
            (this.direction === -1 && this.x < -100)) {
           // Small chance to respawn immediately, otherwise wait for next cycle
           // to create natural "flock" gaps
           if (Math.random() > 0.95) { 
               this.reset();
           } else {
             // Move it far away so it can try to respawn next frame (simple logic hack)
             // or just let it hang out off screen until random chance hits? 
             // Actually, let's just reset immediately for constant ambient activity
             this.reset();
           }
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(this.direction, 1); // Flip horizontally if going left

        ctx.fillStyle = `rgba(5, 5, 5, ${this.opacity})`;
        
        // Draw Crow Silhouette (Stylized V-shape with body)
        
        // Body
        ctx.beginPath();
        ctx.ellipse(0, 0, 10 * this.scale, 3 * this.scale, 0, 0, Math.PI * 2);
        ctx.fill();

        // Wings Animation
        const wingY = Math.sin(this.flapFrame) * 12 * this.scale;
        
        ctx.beginPath();
        // Left Wing (Background)
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(-5 * this.scale, -15 * this.scale + wingY, -25 * this.scale, -10 * this.scale + wingY);
        ctx.lineTo(-5 * this.scale, 0);
        ctx.fill();

        // Right Wing (Foreground)
        ctx.beginPath();
        ctx.moveTo(2 * this.scale, 0);
        ctx.quadraticCurveTo(8 * this.scale, -20 * this.scale + wingY, 30 * this.scale, -15 * this.scale + wingY);
        ctx.lineTo(8 * this.scale, 0);
        ctx.fill();

        ctx.restore();
      }
    }

    const init = () => {
      feathers = [];
      crows = [];
      
      // Create Feathers
      const featherCount = Math.floor((canvas.width * canvas.height) / 30000);
      for (let i = 0; i < featherCount; i++) {
        feathers.push(new Feather());
      }
      
      // Create Crows (Ambient background)
      const crowCount = 8;
      for (let i = 0; i < crowCount; i++) {
        crows.push(new Crow());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      feathers.forEach((feather) => {
        feather.update();
        feather.draw();
      });

      crows.forEach((crow) => {
        crow.update();
        crow.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default BackgroundEffect;