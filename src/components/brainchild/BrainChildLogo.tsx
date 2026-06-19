import React from 'react';

const NavLogo = () => {
  return (
    <div className="flex flex-col items-center leading-none select-none group cursor-pointer">

      {/* Main logo text */}
      <div
        className="flex items-center gap-0 transition-transform duration-300 group-hover:scale-[1.03]"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {/* SKY */}
        <span
          className="text-2xl md:text-3xl font-extrabold tracking-tight text-blue drop-shadow-sm"
        >
          SKY
        </span>

        {/* Divider pip */}
        <span
          className="mx-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 self-center"
          style={{ background: 'linear-gradient(135deg, #FF6B9D, #9B1C2C)' }}
        />

        {/* VIEW */}
        <span
          className="text-2xl md:text-3xl font-extrabold tracking-tight"
          style={{ color: '#FF6B9D' }}
        >
          VIEW
        </span>
      </div>

      {/* Animated underline */}
      <span
        className="h-[2px] w-0 group-hover:w-full transition-all duration-300 mt-0.5 rounded-full"
        style={{ background: 'linear-gradient(90deg, #4A9EDB 0%, #FF6B9D 100%)' }}
      />

      {/* Subtitle */}
      <p
        className="text-[9px] md:text-[10px] uppercase font-extrabold tracking-[0.55em] mt-1 whitespace-nowrap"
        style={{
          fontFamily: 'var(--font-body)',
          color: 'rgba(0, 0, 0, 0.45)',
          letterSpacing: '0.3em',
        }}
      >
        Nursery · Primary · Secondary
      </p>
    </div>
  );
};

export default NavLogo;