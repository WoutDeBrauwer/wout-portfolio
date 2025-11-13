import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useScrollAnimation = () => {
  useEffect(() => {
    // Fade in hero section and ensure final styles are cleared
    gsap.fromTo(
      '.hero-content',
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', clearProps: 'all' }
    )

    // Stagger the nav items - use fromTo so they don't remain with inline opacity/transform
    gsap.fromTo(
      '.nav-item',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out', clearProps: 'all' }
    )

    // About section animation (use fromTo + clearProps so inline styles are removed)
    gsap.fromTo(
      '.about-image',
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-image',
          start: 'top 85%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        },
        clearProps: 'all'
      }
    )

    gsap.fromTo(
      '.about-content',
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 85%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        },
        clearProps: 'all'
      }
    )

    // Portfolio section animations
    gsap.fromTo(
      '.portfolio-title',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.portfolio-title',
          start: 'top 85%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        },
        clearProps: 'all'
      }
    )

    // Stagger portfolio items
    gsap.fromTo(
      '.portfolio-item',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.portfolio-grid',
          start: 'top 85%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        },
        clearProps: 'all'
      }
    )

    // ensure ScrollTrigger measurements are up to date
    ScrollTrigger.refresh()

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
}