"use client";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
	{
		number: "01",
		title: "DISCOVER",
		description:
			"We listen to your vision, style, and goals — then align on what matters most so every decision supports your story.",
		image: "https://images.unsplash.com/photo-1606744824163-985d376605aa?w=1200&q=80",
	},
	{
		number: "02",
		title: "DESIGN",
		description:
			"We curate concepts, vendors, and experiences tailored to you — from aesthetics to atmosphere — with intention in every detail.",
		image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80",
	},
	{
		number: "03",
		title: "EXECUTE",
		description:
			"We manage logistics, timelines, and on-site coordination with precision, so your celebration feels effortless from start to finish.",
		image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80",
	},
	{
		number: "04",
		title: "DELIVER",
		description:
			"You enjoy the moment — we ensure every element is flawless, discreetly handling every detail behind the scenes.",
		image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
	},
];

export function Process() {
	const container = useRef<HTMLElement>(null);
	const [activeIndex, setActiveIndex] = useState(0);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: container.current,
					start: "top 80%",
					end: "bottom 20%",
					toggleActions: "play none none none",
				},
			});

			tl.from(
				".section-header-subtitle",
				{
					opacity: 0,
					y: 20,
					duration: 0.8,
				},
				0
			)
				.from(
					".section-header-title",
					{
						opacity: 0,
						y: 30,
						duration: 1,
					},
					"-=0.6"
				)
				.from(
					".process-step",
					{
						opacity: 0,
						y: 50,
						stagger: 0.2,
						duration: 0.8,
					},
					"-=0.5"
				)
				.from(
					".process-image",
					{
						opacity: 0,
						scale: 1.1,
						duration: 1.5,
						ease: "power3.inOut",
					},
					"<"
				);
		},
		{ scope: container }
	);

	return (
		<section id="process" ref={container} className="py-16 bg-secondary/30">
			<div className="max-w-7xl mx-auto px-6 lg:px-12">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
					{/* Left Content - Accordion */}
					<div>
						<p className="section-header-subtitle text-xs lg:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
							Process / How We Work
						</p>
						<h2 className="section-header-title text-4xl lg:text-5xl xl:text-6xl tracking-tight mb-12">
							OUR APPROACH
						</h2>

						{/* Accordion Steps */}
						<div className="space-y-0 border-t border-border">
							{processSteps.map((step, index) => (
								<div
									key={index}
									className="process-step border-b border-border"
								>
									{/* Accordion Header */}
									<button
										onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
										className="w-full py-6 flex items-center justify-between gap-4 text-left group hover:text-accent transition-colors"
									>
										<div className="flex items-center gap-4">
											<span className="text-sm text-muted-foreground">{step.number}.</span>
											<h3 className="text-lg lg:text-xl font-light tracking-wide">
												{step.title}
											</h3>
										</div>
										<motion.div
											animate={{ rotate: activeIndex === index ? 180 : 0 }}
											transition={{ duration: 0.3 }}
										>
											<ChevronDown className="w-5 h-5" />
										</motion.div>
									</button>

									{/* Accordion Content */}
									<AnimatePresence initial={false}>
										{activeIndex === index && (
											<motion.div
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: "auto", opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.3, ease: "easeInOut" }}
												className="overflow-hidden"
											>
												<div className="pb-6 pl-8">
													<p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
														{step.description}
													</p>
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							))}
						</div>
					</div>

					{/* Right Image - Dynamic */}
					<div className="process-image aspect-4/5 lg:aspect-3/4 overflow-hidden rounded-sm sticky top-24">
						<AnimatePresence mode="wait">
							<motion.div
								key={activeIndex}
								initial={{ opacity: 0, scale: 1.1 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0.1, scale: 0.95 }}
								transition={{ duration: 0.2, ease: "easeInOut" }}
								className="w-full h-full relative"
							>
								<Image
									src={processSteps[activeIndex >= 0 ? activeIndex : 0].image}
									alt={processSteps[activeIndex >= 0 ? activeIndex : 0].title}
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, 50vw"
								/>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</section>
	);
}
