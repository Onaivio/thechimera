"use client";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import RevealWrapper from "../animation/RevealWrapper";
import TextAppearAnimation02 from "../animation/TextAppearAnimation02";
import ServiceCard from "../ui/service-card";
import { ImageWithFallback } from "../ui/ImageWithFallback";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Weddings",
    description:
      "Tailored celebrations that reflect your love story, culture, and personality — from design to execution, every moment feels effortless.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    link: "/services/weddings",
  },
  {
    id: 2,
    title: "Corporate Events",
    description:
      "Polished, strategic events that enhance your brand, engage your audience, and leave a lasting professional impression.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    link: "/services/corporate",
  },
  {
    id: 3,
    title: "Social Events",
    description:
      "From milestone birthdays to private soirées, we create elegant gatherings that turn life’s moments into cherished memories.",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    link: "/services/social",
  },
  {
    id: 4,
    title: "Destination Events",
    description:
      "Planning beyond borders — seamless, stress-free experiences in breathtaking locations.",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    link: "/services/destination",
  },
];

const ServiceSection = () => {
  return (
    <section
      id="services"
      className="overflow-hidden pb-14 px-3.5 pt-14 md:pb-16 md:pt-16 max-w-7xl mx-auto"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-y-3 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <TextAppearAnimation02>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl mb-4">
                Our <span className="font-instrument italic">Services</span>
              </h2>
            </TextAppearAnimation02>
          </div>

          <div className="max-w-md">
            <TextAppearAnimation02>
              <p className="text-lg text-foreground/70">
                Founded to redefine luxury event planning, we craft experiences
                that are unique, timeless, and flawlessly executed.
              </p>
            </TextAppearAnimation02>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {services.map((service, index) => (
          <div key={index} className="service-card group">
            <div className="relative aspect-square mb-6 overflow-hidden">
              <Link href={service.link}>
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </Link>
            </div>
            <h2 className="text-3xl mb-4">{service.title}</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              {service.description}
            </p>
            <Link
              href={service.link}
              className="inline-block text-sm tracking-wider border-b border-current pb-1 hover:text-accent transition-colors"
            >
              LEARN MORE
            </Link>
          </div>
        ))}
      </div>
      {/* see more */}
      <div className="text-center mt-10">
        <Link
          href="/services"
          className="inline-block text-sm tracking-wider border-b border-current pb-1 hover:text-accent transition-colors"
        >
          VIEW ALL SERVICES
        </Link>
      </div>

      {/* <RevealWrapper className="relative ">
        <Swiper
          spaceBetween={24}
          modules={[Navigation]}
          className="pl-[12%]!"
          navigation={{
            prevEl: ".swiper-prev-btn",
            nextEl: ".swiper-next-btn",
          }}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1440: { slidesPerView: 4, spaceBetween: 24 },
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <ServiceCard {...service} />
            </SwiperSlide>
          ))}

          <div className="mt-6 flex items-center space-x-2">
            <button className="swiper-prev-btn size-18 border p-5 dark:border-dark dark:bg-secondary transition-all duration-300 hover:bg-foreground hover:text-background hover:border-foreground group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={33}
                viewBox="0 0 32 33"
                fill="none"
              >
                <path
                  d="M27 16.25H5"
                  className="stroke-current transition-colors"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 7.25L5 16.25L14 25.25"
                  className="stroke-current transition-colors"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="swiper-next-btn size-18 border p-5 dark:border-dark dark:bg-secondary transition-all duration-300 hover:bg-foreground hover:text-background hover:border-foreground group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={33}
                viewBox="0 0 32 33"
                fill="none"
              >
                <path
                  d="M5 16.25H27"
                  className="stroke-current transition-colors"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 7.25L27 16.25L18 25.25"
                  className="stroke-current transition-colors"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </Swiper>
      </RevealWrapper> */}
    </section>
  );
};

export default ServiceSection;
