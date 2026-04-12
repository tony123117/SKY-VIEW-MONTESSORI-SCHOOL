import React from 'react';

const NavLogo = () => {
  const colors = ['text-[#1E3A8A]', 'text-[#EF4444]', 'text-[#22C55E]', 'text-[#EC4899]', 'text-[#FACC15]'];

  // Slimmer border for small scale
  const miniStickerFilter = {
    filter: `
      drop-shadow(1px 0 0 white) 
      drop-shadow(-1px 0 0 white) 
      drop-shadow(0 1px 0 white) 
      drop-shadow(0 -1px 0 white) 
      drop-shadow(1px 1px 2px rgba(0,0,0,0.2))
    `
  };

  return (
    <div className="flex flex-col items-center leading-none select-none group cursor-pointer">
      {/* BRAIN CHILD - Upright Version */}
      <div 
        className="flex gap-1 text-xl font-bold tracking-tighter not-italic"
        style={{ 
          fontFamily: '"Bubblegum Sans", cursive', 
          fontStyle: 'normal', // Forces font to not be italic
          ...miniStickerFilter 
        }}
      >
        {"BRAIN".split("").map((char, i) => (
          <span key={i} className={colors[i % colors.length]}>{char}</span>
        ))}
        <span className="w-1" />
        {"CHILD".split("").map((char, i) => (
          <span key={i} className={colors[(i + 1) % colors.length]}>{char}</span>
        ))}
      </div>

      {/* Int'l School, Enugu - Micro Version */}
      <p 
        className="text-[8px] uppercase font-black tracking-[0.1em] text-[#1E3A8A] mt-[-2px]"
        style={{ 
          fontFamily: 'sans-serif', 
          fontStyle: 'normal', // Forces font to not be italic
          ...miniStickerFilter 
        }}
      >
        Int'l School, Enugu
      </p>
    </div>
  );
};

export default NavLogo;