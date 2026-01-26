'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'
import { ImageWithFallback } from '../ui/ImageWithFallback'

gsap.registerPlugin(ScrollTrigger)

interface AnimatedHeroImageProps {
  src: string;
  alt?: string;
}

const AnimatedHeroImage = ({ src, alt = "Hero Image" }: AnimatedHeroImageProps) => {
  const imageRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 0.8,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 70%',
          end: 'top 0%',
          scrub: 1,
        },
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])
  return (
    <figure className="mx-auto w-[97%] overflow-hidden sm:w-full" ref={imageRef}>
      <ImageWithFallback src={src} alt={alt} className="mx-auto w-[97%] sm:w-full" />
    </figure>
  )
}

export default AnimatedHeroImage
