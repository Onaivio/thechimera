"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const row1Images = [
  "https://res.cloudinary.com/djnzqckey/image/upload/v1764513892/jamog1_x884b1.jpg",
  "https://res.cloudinary.com/djnzqckey/image/upload/v1764513894/jamog2_r7sx3k.jpg",
  "https://res.cloudinary.com/djnzqckey/image/upload/v1764513892/jamog3_hjiorv.jpg",
  "https://res.cloudinary.com/djnzqckey/image/upload/v1764513893/jamog4_zvwuut.jpg",
  "https://res.cloudinary.com/djnzqckey/image/upload/v1764513898/jamog5_h7943z.jpg",
];

const row2Images = [
  "https://res.cloudinary.com/djnzqckey/image/upload/v1764513896/jamog6_rwpunn.jpg",
  "https://res.cloudinary.com/djnzqckey/image/upload/v1764513895/jamog7_z88vnl.jpg",
  "https://res.cloudinary.com/djnzqckey/image/upload/v1764513896/jamog8_usefvc.jpg",
  "https://res.cloudinary.com/djnzqckey/image/upload/v1764513901/jamog9_mefem0.jpg",
  "https://res.cloudinary.com/djnzqckey/image/upload/v1764513898/jamog10_hrelsp.jpg",
];

const gridImages = [
  "https://res.cloudinary.com/djnzqckey/image/upload/v1764513892/jamog1_x884b1.jpg",
  "https://res.cloudinary.com/djnzqckey/image/upload/v1764513894/jamog2_r7sx3k.jpg",
  "https://res.cloudinary.com/djnzqckey/image/upload/v1764513892/jamog3_hjiorv.jpg",
  "https://res.cloudinary.com/djnzqckey/image/upload/v1764513893/jamog4_zvwuut.jpg",
  "https://res.cloudinary.com/djnzqckey/image/upload/v1764513898/jamog5_h7943z.jpg",
  "https://res.cloudinary.com/djnzqckey/image/upload/v1764513896/jamog6_rwpunn.jpg",
  "https://res.cloudinary.com/djnzqckey/image/upload/v1764513895/jamog7_z88vnl.jpg",
  "https://res.cloudinary.com/djnzqckey/image/upload/v1764513896/jamog8_usefvc.jpg",
  "https://res.cloudinary.com/djnzqckey/image/upload/v1764513901/jamog9_mefem0.jpg",
  "https://res.cloudinary.com/djnzqckey/image/upload/v1764513898/jamog10_hrelsp.jpg",
];

const allImages = [...row1Images, ...row2Images, ...gridImages];

export function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [openLightbox, setOpenLightbox] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
    setOpenLightbox(true);
  };

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Animate title
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
        opacity: 0,
        y: 50,
      });
    }

    // Animate grid
    if (gridRef.current) {
      const items = gridRef.current.querySelectorAll(".gallery-grid-item");
      if (items.length > 0) {
        gsap.from(items, {
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
          opacity: 0,
          y: 50,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
        });
      }
    }
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-24 bg-(--bg-primary) transition-colors duration-300 overflow-hidden"
    >
      <div className="container-custom mb-16">
        <div className="text-center">
          <h2
            ref={titleRef}
            className="text-[clamp(40px,5vw,60px)] leading-[0.9] text-(--color-primary) uppercase"
          >
            Let&apos;s Make Your
            <br />
            Special Day Timeless
          </h2>
        </div>
      </div>

      {/* Marquee Rows */}
      <div className="flex flex-col gap-6">
        {/* Top Row - Right to Left */}
        <Marquee gradient={false} speed={40} pauseOnHover direction="left">
          <div className="flex gap-6 px-3">
            {row1Images.map((img, index) => (
              <GalleryItem
                key={`row1-${index}`}
                src={img}
                index={index}
                onClick={() => handleImageClick(index)}
              />
            ))}
            {row1Images.map((img, index) => (
              <GalleryItem
                key={`row1-dup-${index}`}
                src={img}
                index={index}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        </Marquee>

        {/* Bottom Row - Left to Right */}
        <Marquee gradient={false} speed={40} pauseOnHover direction="right">
          <div className="flex gap-6 px-3">
            {row2Images.map((img, index) => (
              <GalleryItem
                key={`row2-${index}`}
                src={img}
                index={index}
                onClick={() => handleImageClick(row1Images.length + index)}
              />
            ))}
            {row2Images.map((img, index) => (
              <GalleryItem
                key={`row2-dup-${index}`}
                src={img}
                index={index}
                onClick={() => handleImageClick(row1Images.length + index)}
              />
            ))}
          </div>
        </Marquee>
      </div>

      {/* Masonry Grid Section */}
      <div className="container-custom mt-32 hidden">
        <div className="text-center mb-16">
          <p className="text-(--color-primary) uppercase tracking-[0.2em] text-sm font-medium">
            More Moments
          </p>
        </div>
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {gridImages.map((img, index) => (
            <motion.div
              key={index}
              className="gallery-grid-item relative overflow-hidden group cursor-pointer border border-(--border-color) bg-(--bg-secondary)"
              style={{
                gridRow: index === 0 || index === 5 ? "span 2" : "span 1",
                height: index === 0 || index === 5 ? "600px" : "290px",
              }}
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              onClick={() =>
                handleImageClick(row1Images.length + row2Images.length + index)
              }
            >
              <Image
                src={img}
                alt={`Gallery grid image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox
        open={openLightbox}
        close={() => setOpenLightbox(false)}
        index={selectedIndex}
        slides={allImages.map((img) => ({ src: img }))}
        controller={{
          closeOnPullUp: true,
          closeOnPullDown: true,
          closeOnBackdropClick: true,
        }}
        styles={{
          container: {
            backgroundColor: "rgba(0, 0, 0, 0.85)",
          },
        }}
      />
    </section>
  );
}

function GalleryItem({
  src,
  index,
  onClick,
}: {
  src: string;
  index: number;
  onClick?: () => void;
}) {
  return (
    <motion.div
      className="relative h-[350px] w-[280px] lg:h-[350px] lg:w-[320px] overflow-hidden border border-(--border-color) group cursor-pointer bg-(--bg-secondary)"
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <Image
        src={src}
        alt={`Gallery image ${index + 1}`}
        fill
        sizes="(max-width: 768px) 280px, 320px"
        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
    </motion.div>
  );
}
