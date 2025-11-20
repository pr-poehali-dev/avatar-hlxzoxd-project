import { useEffect, useRef } from 'react';

const Index = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = 800;
    canvas.width = size;
    canvas.height = size;

    const gradient = ctx.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, '#1A1F2C');
    gradient.addColorStop(0.5, '#403E43');
    gradient.addColorStop(1, '#8E9196');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    ctx.strokeStyle = 'rgba(142, 145, 150, 0.3)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 5; i++) {
      const offset = 100 + i * 150;
      ctx.strokeRect(offset, offset, size - offset * 2, size - offset * 2);
    }

    ctx.font = 'bold 120px Orbitron, monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    ctx.shadowColor = '#0EA5E9';
    ctx.shadowBlur = 20;
    ctx.fillStyle = '#fff';
    ctx.fillText('HlxzoXD', size / 2, size / 2);
    
    ctx.shadowBlur = 40;
    ctx.fillText('HlxzoXD', size / 2, size / 2);

    ctx.strokeStyle = '#0EA5E9';
    ctx.lineWidth = 3;
    ctx.strokeText('HlxzoXD', size / 2, size / 2);
  }, []);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const link = document.createElement('a');
    link.download = 'HlxzoXD-avatar.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="min-h-screen bg-[#0A0E14] flex flex-col items-center justify-center p-8">
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap" rel="stylesheet" />
      
      <h1 className="text-4xl font-bold text-white mb-8 font-[Orbitron]">
        HlxzoXD Avatar
      </h1>
      
      <div className="relative">
        <canvas 
          ref={canvasRef}
          className="rounded-2xl shadow-2xl shadow-blue-500/20 border-2 border-gray-700"
          style={{ maxWidth: '600px', width: '100%', height: 'auto' }}
        />
      </div>

      <button
        onClick={handleDownload}
        className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 font-[Orbitron]"
      >
        Скачать аватарку
      </button>
    </div>
  );
};

export default Index;
