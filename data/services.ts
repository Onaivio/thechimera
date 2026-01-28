export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  overview: string;
  whatWeOffer: string[];
  idealFor: string[];
}

export const services: ServiceItem[] = [
  {
    slug: "weddings",
    title: "Weddings",
    shortDescription:
      "Tailored celebrations that reflect your love story, culture, and personality — from design to execution, every moment feels effortless.",
    heroImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80",
    overview:
      "From intimate ceremonies to grand destination celebrations, we translate your vision into a wedding that feels timeless, personal, and flawlessly executed.",
    whatWeOffer: [
      "Concept development & design direction",
      "Vendor sourcing, curation, and management",
      "Budget guidance and planning structure",
      "Timeline creation & production scheduling",
      "Guest experience details and flow",
      "On-site coordination and day-of execution",
    ],
    idealFor: [
      "Couples who value elevated design and calm execution",
      "Cultural weddings requiring thoughtful coordination",
      "Destination celebrations needing end-to-end logistics",
    ],
  },
  {
    slug: "corporate",
    title: "Corporate Events",
    shortDescription:
      "Polished, strategic events that enhance your brand, engage your audience, and leave a lasting professional impression.",
    heroImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80",
    overview:
      "We plan corporate experiences with strategy and precision — ensuring your event supports business goals while feeling effortless for guests and stakeholders.",
    whatWeOffer: [
      "Event strategy aligned to your objectives",
      "Run-of-show and speaker/production coordination",
      "Vendor & venue management",
      "Brand-forward guest experience planning",
      "Logistics, staffing, and on-site oversight",
      "Post-event wrap-up support",
    ],
    idealFor: [
      "Product launches and brand activations",
      "Executive retreats and client experiences",
      "Conferences, dinners, and corporate celebrations",
    ],
  },
  {
    slug: "social",
    title: "Social Events",
    shortDescription:
      "From milestone birthdays to private soirées, we create elegant gatherings that turn life’s moments into cherished memories.",
    heroImage:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&q=80",
    overview:
      "We design elevated social celebrations with intention — refined, warm, and seamlessly coordinated so you can be fully present.",
    whatWeOffer: [
      "Theme and design concept creation",
      "Vendor sourcing and creative curation",
      "Guest flow planning and timeline management",
      "Décor, styling, and experiential touches",
      "On-site coordination and vendor supervision",
    ],
    idealFor: [
      "Milestone birthdays and anniversaries",
      "Private dinners and intimate soirées",
      "Luxury celebrations with bespoke details",
    ],
  },
  {
    slug: "destination",
    title: "Destination Events",
    shortDescription:
      "Planning beyond borders — seamless, stress-free experiences in breathtaking locations.",
    heroImage:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80",
    overview:
      "We manage the complexity of destination planning with discretion and precision — coordinating vendors, logistics, and timelines across locations.",
    whatWeOffer: [
      "Location and venue guidance",
      "Vendor curation suited to your style and standards",
      "Guest logistics support and planning cadence",
      "Production timelines, schedules, and coordination",
      "On-site execution and real-time problem solving",
    ],
    idealFor: [
      "Clients planning events in a new city or country",
      "Multi-day celebrations and destination weddings",
      "High-touch experiences requiring logistical rigor",
    ],
  },
];

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

export function getAllServices() {
  return services;
}

export function getServiceBySlug(slug: string) {
  const target = normalizeSlug(slug);
  return services.find((s) => normalizeSlug(s.slug) === target);
}
