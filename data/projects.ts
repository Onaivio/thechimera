// Central source of truth for all project/event data across The Chimera Company website

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  date: string;
  year: string;
  client?: string;
  description: string;
  shortDescription?: string;
  challenge?: string;
  execution?: string;
  results?: string[];
  
  // Images
  thumbnail: string;
  heroImage: string;
  gallery: string[];
  
  // Details
  details: {
    services: string[];
    location: string;
    year: string;
    duration?: string;
    attendees?: string;
  };
  
  // Related projects
  related: Array<{
    title: string;
    image: string;
    slug: string;
  }>;
}

export const projects: Project[] = [
  {
    id: "01",
    slug: "luxury-destination-wedding-santorini",
    title: "LUXURY DESTINATION WEDDING",
    category: "DESTINATION WEDDING",
    location: "SANTORINI, GREECE",
    date: "JUNE 15, 2024",
    year: "2024",
    client: "Private Client",
    shortDescription:
      "An intimate three-day destination wedding celebration overlooking the Aegean Sea, blending Greek elegance with modern luxury.",
    description:
      "A breathtaking three-day celebration that merged timeless Greek architecture with contemporary luxury design. Every detail was meticulously curated to create an unforgettable experience for 120 guests from around the world.",
    challenge:
      "To orchestrate a seamless multi-day destination wedding across multiple venues in Santorini, managing international vendor coordination, guest logistics, and creating cohesive experiences that honored both Greek tradition and modern luxury aesthetics.",
    execution:
      "We began planning 18 months in advance, conducting multiple site visits to curate the perfect venues. The welcome dinner featured traditional Greek meze under string lights at a cliffside taverna. The ceremony took place at sunset in a private estate with sweeping caldera views, followed by a reception featuring locally-sourced Mediterranean cuisine and live bouzouki music. The final day included a luxury yacht excursion with champagne brunch. Every detail—from custom ceramic favors by local artisans to hand-calligraphed menus in English and Greek—was thoughtfully designed.",
    results: [
      "Zero logistical issues across three days of events",
      "Featured in Vogue Weddings and Martha Stewart Weddings",
      "100% guest satisfaction with seamless international coordination",
      "Strengthened partnerships with luxury Santorini vendors",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1200&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1200&q=80",
    ],
    details: {
      services: [
        "Full-Service Planning",
        "Venue Curation",
        "Design & Styling",
        "International Guest Logistics",
        "Vendor Management",
        "On-Site Coordination",
      ],
      location: "Santorini, Greece",
      year: "2024",
      duration: "3 Days",
      attendees: "120 Guests",
    },
    related: [
      {
        title: "CORPORATE GALA DINNER",
        image:
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
        slug: "tech-company-annual-gala",
      },
      {
        title: "LUXURY BIRTHDAY CELEBRATION",
        image:
          "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
        slug: "milestone-birthday-celebration",
      },
    ],
  },
  {
    id: "02",
    slug: "tech-company-annual-gala",
    title: "CORPORATE GALA DINNER",
    category: "CORPORATE EVENT",
    location: "SAN FRANCISCO, CA",
    date: "SEPTEMBER 22, 2024",
    year: "2024",
    client: "Tech Unicorn Inc.",
    shortDescription:
      "A sophisticated annual gala celebrating innovation, featuring cutting-edge design and immersive brand experiences for 500 executives.",
    description:
      "An elegant annual gala that seamlessly blended corporate professionalism with creative flair, celebrating the company's breakthrough year while reinforcing brand identity through thoughtful design and engaging experiences.",
    challenge:
      "To create a high-impact corporate event that would engage C-suite executives, showcase company achievements, and provide networking opportunities while maintaining sophistication and on-brand messaging throughout a 5-hour program.",
    execution:
      "We transformed a historic San Francisco venue into a modern tech showcase. Custom LED installations displayed company milestones and real-time data visualizations. A cocktail reception featured interactive brand experiences and product demos. The dinner program included keynote speeches, award presentations, and entertainment from a Grammy-winning artist. Sustainable practices were integrated throughout—carbon-neutral catering, digital programs, and donations to environmental causes in lieu of printed materials.",
    results: [
      "98% executive attendance rate",
      "Significant boost in employee morale and company pride",
      "Generated $2M in media impressions through attendee social shares",
      "Client immediately rebooked for following year",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1200&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f29da8c0d0?w=1200&q=80",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1200&q=80",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=1200&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f29da8c0d6?w=1200&q=80",
    ],
    details: {
      services: [
        "Event Strategy",
        "Venue Selection",
        "Brand Integration",
        "Production Management",
        "Entertainment Booking",
        "Full-Service Coordination",
      ],
      location: "San Francisco, California",
      year: "2024",
      duration: "5 Hours",
      attendees: "500 Executives",
    },
    related: [
      {
        title: "LUXURY DESTINATION WEDDING",
        image:
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
        slug: "luxury-destination-wedding-santorini",
      },
      {
        title: "PRODUCT LAUNCH EVENT",
        image:
          "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
        slug: "fashion-brand-product-launch",
      },
    ],
  },
  {
    id: "03",
    slug: "milestone-birthday-celebration",
    title: "LUXURY BIRTHDAY CELEBRATION",
    category: "SOCIAL EVENT",
    location: "MIAMI, FL",
    date: "MARCH 08, 2025",
    year: "2025",
    client: "Private Client",
    shortDescription:
      "An extravagant milestone birthday celebration featuring tropical elegance, live performances, and curated experiences for 200 guests.",
    description:
      "A lavish 50th birthday celebration that transformed a Miami Beach estate into a tropical paradise, featuring world-class entertainment, immersive design, and personalized guest experiences that created lasting memories.",
    challenge:
      "To design and execute an unforgettable milestone celebration that reflected the client's vibrant personality, honored their cultural heritage, and provided unique experiences for a diverse guest list ranging from family to celebrities.",
    execution:
      "We curated a 'Tropical Luxe' theme throughout the oceanfront estate. Custom floral installations featured rare orchids and birds of paradise. A sunset cocktail hour included passed hors d'oeuvres and signature cocktails named after key moments in the client's life. Dinner featured a fusion menu celebrating the client's heritage, served family-style to encourage connection. Entertainment included a surprise performance by the client's favorite artist, followed by DJ sets and an after-party lounge with cigar rolling and craft cocktails. Personalized gift bags included custom fragrances and artisan chocolates.",
    results: [
      "Guests called it 'the event of the decade'",
      "Secured exclusive photography for Town & Country Magazine",
      "Generated 15 high-profile referrals within two months",
      "Client family has engaged us for three subsequent events",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1200&q=80",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1200&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f29da8c0d0?w=1200&q=80",
    ],
    details: {
      services: [
        "Event Concept & Design",
        "Venue Styling",
        "Entertainment Curation",
        "Catering Coordination",
        "Guest Experience Design",
        "Full-Service Execution",
      ],
      location: "Miami Beach, Florida",
      year: "2025",
      duration: "6 Hours",
      attendees: "200 Guests",
    },
    related: [
      {
        title: "LUXURY DESTINATION WEDDING",
        image:
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
        slug: "luxury-destination-wedding-santorini",
      },
      {
        title: "CORPORATE GALA DINNER",
        image:
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
        slug: "tech-company-annual-gala",
      },
    ],
  },
  {
    id: "04",
    slug: "fashion-brand-product-launch",
    title: "PRODUCT LAUNCH EVENT",
    category: "BRAND ACTIVATION",
    location: "NEW YORK, NY",
    date: "OCTOBER 14, 2024",
    year: "2024",
    client: "Luxury Fashion House",
    shortDescription:
      "An immersive product launch experience combining runway presentation, interactive installations, and influencer engagement for a new luxury collection.",
    description:
      "A cutting-edge product launch that merged fashion, art, and technology to introduce a new luxury collection. The event created buzz through Instagram-worthy moments, exclusive previews, and strategic influencer partnerships.",
    challenge:
      "To launch a new collection in a saturated market, creating significant media attention and social buzz while providing an experience worthy of the brand's luxury positioning and appealing to both press and high-value consumers.",
    execution:
      "We transformed a SoHo gallery into an immersive brand experience. Upon arrival, guests received custom welcome cocktails and entered through a tunnel of LED screens displaying the collection's inspiration. The main space featured the collection displayed as art installations, allowing intimate product interaction. A surprise runway show presented the full line, followed by a panel discussion with the designer and fashion icons. VIP guests received early shopping access and personalized styling consultations. Every detail reinforced brand identity—from custom scents to branded glassware to strategic photo moments optimized for social sharing.",
    results: [
      "500K+ social media impressions within 24 hours",
      "Secured features in Vogue, WWD, and Harper's Bazaar",
      "30% of collection sold during VIP preview",
      "Established replicable launch template for future collections",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1200&q=80",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80",
    ],
    details: {
      services: [
        "Event Concept & Strategy",
        "Brand Experience Design",
        "Influencer Management",
        "Media Relations",
        "Production & Logistics",
        "Social Media Integration",
      ],
      location: "SoHo, New York",
      year: "2024",
      duration: "4 Hours",
      attendees: "300 VIP Guests",
    },
    related: [
      {
        title: "CORPORATE GALA DINNER",
        image:
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
        slug: "tech-company-annual-gala",
      },
      {
        title: "LUXURY BIRTHDAY CELEBRATION",
        image:
          "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
        slug: "milestone-birthday-celebration",
      },
    ],
  },
];

// Helper functions
function normalizeSlug(input: string) {
  const decoded = (() => {
    try {
      return decodeURIComponent(input);
    } catch {
      return input;
    }
  })();

  return decoded.trim().replace(/^\/+|\/+$/g, "").toLowerCase();
}

export function getProjectBySlug(slug: string): Project | undefined {
  const target = normalizeSlug(slug);
  return projects.find((project) => normalizeSlug(project.slug) === target);
}

export function getAllProjects(): Project[] {
  return projects;
}

export function getRelatedProjects(currentSlug: string, limit: number = 2): Project[] {
  const current = normalizeSlug(currentSlug);
  return projects
    .filter((project) => normalizeSlug(project.slug) !== current)
    .slice(0, limit);
}

export function getFeaturedProjects(limit: number = 4): Project[] {
  return projects.slice(0, limit);
}
