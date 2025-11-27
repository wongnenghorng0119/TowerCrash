'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [hoveredBuilding, setHoveredBuilding] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/background.png)',
        }}
      ></div>

      {/* Tooltip following mouse */}
      {hoveredBuilding && (
        <div 
          className="fixed z-50 pointer-events-none"
          style={{
            left: mousePos.x + 20,
            top: mousePos.y + 20,
          }}
        >
          <div className="bg-gray-900/95 backdrop-blur-sm border-2 border-gray-950 rounded-xl px-6 py-2 shadow-2xl">
            <p className="text-yellow-100 font-bold text-base whitespace-nowrap">{hoveredBuilding}</p>
          </div>
        </div>
      )}

      {/* Town Map - Desktop: absolute positioning, Mobile: grid layout */}
      <div 
        className="relative w-full h-full px-4 sm:px-8 md:px-20 py-8 overflow-auto"
        onMouseMove={handleMouseMove}
      >
        {/* Mobile Grid Layout */}
        <div className="md:hidden grid grid-cols-2 gap-4 max-w-md mx-auto pt-20">
          <Link href="/lucky-draw" className="flex flex-col items-center p-4 bg-black/20 rounded-xl hover:bg-black/30 transition-all">
            <img src="/luckydraw.png" alt="Lucky Draw" className="w-24 h-auto mb-2" />
            <span className="text-white font-bold text-sm">🎁 Lucky Draw</span>
          </Link>
          <Link href="/challenge-list" className="flex flex-col items-center p-4 bg-black/20 rounded-xl hover:bg-black/30 transition-all">
            <img src="/challenge.png" alt="Challenge" className="w-24 h-auto mb-2" />
            <span className="text-white font-bold text-sm">⚔️ Challenge</span>
          </Link>
          <Link href="/play" className="flex flex-col items-center p-4 bg-black/20 rounded-xl hover:bg-black/30 transition-all col-span-2">
            <img src="/game.png" alt="Game Arena" className="w-32 h-auto mb-2" />
            <span className="text-white font-bold">🎮 Game Arena</span>
          </Link>
          <Link href="/my-towers" className="flex flex-col items-center p-4 bg-black/20 rounded-xl hover:bg-black/30 transition-all">
            <img src="/tower.png" alt="My Bag" className="w-24 h-auto mb-2" />
            <span className="text-white font-bold text-sm">🎒 My Bag</span>
          </Link>
          <Link href="/market" className="flex flex-col items-center p-4 bg-black/20 rounded-xl hover:bg-black/30 transition-all">
            <img src="/marketplace.png" alt="Market" className="w-24 h-auto mb-2" />
            <span className="text-white font-bold text-sm">🏪 Market</span>
          </Link>
          <Link href="/history" className="flex flex-col items-center p-4 bg-black/20 rounded-xl hover:bg-black/30 transition-all col-span-2">
            <img src="/history.png" alt="History" className="w-20 h-auto mb-2" />
            <span className="text-white font-bold text-sm">📋 History</span>
          </Link>
        </div>

        {/* Desktop Absolute Positioning */}
        <div className="hidden md:flex items-center justify-center w-full h-full relative">
        
        
        {/* Center Top - Game Arena (large) */}
        <Link 
          href="/play"
          className="absolute top-[22%] left-1/2 transform -translate-x-1/2 cursor-pointer hover:scale-105 transition-all duration-300 z-30"
          onMouseEnter={() => setHoveredBuilding('🎮 Game Arena')}
          onMouseLeave={() => setHoveredBuilding(null)}
        >
          <img 
            src="/game.png" 
            alt="Game Arena" 
            className="md:w-96 h-auto drop-shadow-2xl"
          />
        </Link>

        {/* Top Left - Lucky Draw */}
        <Link 
          href="/lucky-draw" 
          className="absolute top-[18%] left-[20%] cursor-pointer hover:scale-105 transition-all duration-300 z-20"
          onMouseEnter={() => setHoveredBuilding('🎁 Lucky Draw')}
          onMouseLeave={() => setHoveredBuilding(null)}
        >
          <img 
            src="/luckydraw.png" 
            alt="Lucky Draw" 
            className="md:w-60 h-auto drop-shadow-2xl"
          />
        </Link>

        {/* Top Right - Challenge Hall */}
        <Link 
          href="/challenge-list" 
          className="absolute top-[18%] right-[20%] cursor-pointer hover:scale-105 transition-all duration-300 z-20"
          onMouseEnter={() => setHoveredBuilding('⚔️ Challenge Hall')}
          onMouseLeave={() => setHoveredBuilding(null)}
        >
          <img 
            src="/challenge.png" 
            alt="Challenge Hall" 
            className="md:w-60 h-auto drop-shadow-2xl"
          />
        </Link>

        {/* Bottom Left - Tower Bag */}
        <Link 
          href="/my-towers" 
          className="absolute bottom-[22%] left-[24%] cursor-pointer hover:scale-105 transition-all duration-300 z-20"
          onMouseEnter={() => setHoveredBuilding('🎒 My Towers')}
          onMouseLeave={() => setHoveredBuilding(null)}
        >
          <img 
            src="/tower.png" 
            alt="Tower Bag" 
            className="md:w-56 h-auto drop-shadow-2xl"
          />
        </Link>

        {/* Right Middle - Marketplace */}
        <Link 
          href="/market" 
          className="absolute top-[42%] right-[20%] cursor-pointer hover:scale-105 transition-all duration-300 z-20"
          onMouseEnter={() => setHoveredBuilding('🏪 Marketplace')}
          onMouseLeave={() => setHoveredBuilding(null)}
        >
          <img 
            src="/marketplace.png" 
            alt="Marketplace" 
            className="md:w-60 h-auto drop-shadow-2xl"
          />
        </Link>

        {/* Bottom Right - History Board (small notice board) */}
        <Link 
          href="/history" 
          className="absolute bottom-[12%] right-[32%] cursor-pointer hover:scale-105 transition-all duration-300 z-20"
          onMouseEnter={() => setHoveredBuilding('📋 History Board')}
          onMouseLeave={() => setHoveredBuilding(null)}
        >
          <img 
            src="/history.png" 
            alt="History Board" 
            className="md:w-44 h-auto drop-shadow-2xl"
          />
        </Link>
        </div>
      </div>
    </div>
  );
}
