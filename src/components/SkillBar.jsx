import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SkillBar({ name, level, category }) {
  const barRef = useRef(null);
  const levelPercentage = (level / 5) * 100;

  useEffect(() => {
    const bar = barRef.current;
    
    gsap.fromTo(bar.querySelector('.skill-progress'),
      { width: '0%' },
      {
        width: `${levelPercentage}%`,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: bar,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, [levelPercentage]);

  return (
    <div ref={barRef} className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-white/90 font-medium">{name}</span>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ml-1 ${
                i < level ? 'bg-primary' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="skill-progress h-full bg-primary rounded-full transition-all duration-300"
          style={{ width: '0%' }}
        />
      </div>
    </div>
  );
}