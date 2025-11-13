import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tabs = [
  {
    title: 'About',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quos, voluptate voluptas quia quae voluptatibus quod doloribus quas natus. Quisquam voluptatum, quibusdam, quos, voluptate voluptas quia quae voluptatibus quod doloribus quas natus.',
    image: '/images/me.jpg',
  },
  {
    title: 'Experience',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quos, voluptate voluptas quia quae voluptatibus quod doloribus quas natus. Quisquam voluptatum, quibusdam, quos, voluptate voluptas quia quae voluptatibus quod doloribus quas natus.',
    image: '/images/me2.jpg',
  },
  {
    title: 'Education',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quos, voluptate voluptas quia quae voluptatibus quod doloribus quas natus. Quisquam voluptatum, quibusdam, quos, voluptate voluptas quia quae voluptatibus quod doloribus quas natus.',
    image: '/images/me3.jpg',
  },
];

export default function AboutTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRef = useRef(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    const animateContent = () => {
      // Animate out old content
      gsap.to(contentRefs.current[activeIndex], {
        opacity: 0,
        y: 20,
        duration: 0.3,
        onComplete: () => {
          // Animate in new content
          gsap.fromTo(
            contentRefs.current[activeIndex],
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.3 }
          );
        },
      });

      // Animate image
      gsap.to(imageRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.3,
        onComplete: () => {
          gsap.fromTo(
            imageRef.current,
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 0.3 }
          );
        },
      });
    };

    animateContent();
  }, [activeIndex, tabs.length]);

  useEffect(() => {
    // Initial animations for first load
    gsap.fromTo(
      '.about-section',
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div ref={imageRef} className="relative about-image overflow-hidden bg-gray-300 sticky top-32 w-full max-w-md">
        <div className="aspect-square bg-gray-300"></div>
        <img
          src={tabs[activeIndex].image}
          alt={tabs[activeIndex].title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex gap-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`${
                activeIndex === index ? 'text-primary' : 'text-gray-500'
              } hover:text-primary transition-colors`}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="relative">
          {tabs.map((tab, index) => (
            <div
              key={index}
              ref={(el) => (contentRefs.current[index] = el)}
              className={`${
                activeIndex === index ? 'block' : 'hidden'
              } transition-all duration-300`}
            >
              <p className="text-gray-500">{tab.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}