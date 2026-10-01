export const CATEGORIES = [
  "Residential Exterior",
  "Roofing & Siding",
  "Commercial & Multi-Family",
  "Interior Renovations",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type Project = {
  id: string;
  title: string;
  location: string;
  category: Category;
  year: number;
  /** Hero image shown on the card and at the top of the detail modal. */
  imageUrl: string;
  /** Short trade badges shown on the card. */
  trades: string[];
  /** Scope tags shown on the card. */
  scope: string[];
  /** Overview narrative / challenge solved (shown in the detail modal). */
  overview: string;
  /** Itemized scope of work, including materials (shown in the detail modal). */
  scopeItems: string[];
  /** Highlighted on the homepage "Featured Work" teaser. */
  featured?: boolean;
};

/**
 * PLACEHOLDER CONTENT: titles, locations, years, narratives and material
 * lists below are illustrative. Replace them with real project details
 * (and add photos) before launch.
 */
export const PROJECTS: Project[] = [
  {
    id: "mahogany-lake-custom-cladding",
    title: "Mahogany Lake Custom Cladding",
    location: "Mahogany, Calgary",
    category: "Residential Exterior",
    year: 2025,
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    trades: ["James Hardie", "Stone Veneer"],
    scope: ["Lap siding", "Stone accents", "Trim & soffit"],
    overview:
      "A custom lake-community home needed a premium exterior that balanced warm stone detailing with low-maintenance cladding. We coordinated siding, stone and trim as one envelope so details lined up and the schedule stayed tight.",
    scopeItems: [
      "James Hardie lap siding with factory-primed trim",
      "Manufactured stone veneer on entry columns and feature walls",
      "Aluminum soffit and fascia",
      "Custom flashing at every transition and window head",
    ],
    featured: true,
  },
  {
    id: "airdrie-multi-family-townhomes",
    title: "Airdrie Multi-Family Townhomes",
    location: "Airdrie",
    category: "Commercial & Multi-Family",
    year: 2024,
    imageUrl:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    trades: ["Hardie Board", "Flashings", "Eavestroughs"],
    scope: ["Row housing", "Phased install", "Drainage"],
    overview:
      "A multi-building townhome development required repeatable quality across many units and a phased schedule that matched the framing and interior trades. A dedicated crew rotated building by building to keep the critical path moving.",
    scopeItems: [
      "James Hardie panel and lap siding across all elevations",
      "Commercial-grade flashing at balconies, windows and rooflines",
      "Seamless eavestroughs with heavy-gauge downspouts",
      "Phased scheduling aligned with the general contractor",
    ],
    featured: true,
  },
  {
    id: "nw-calgary-roofing-hardie-retrofit",
    title: "NW Calgary Roofing & James Hardie Retrofit",
    location: "NW Calgary",
    category: "Roofing & Siding",
    year: 2025,
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    trades: ["Architectural Shingles", "James Hardie"],
    scope: ["Re-roof", "Siding retrofit", "Moisture barrier"],
    overview:
      "An aging home with failing siding and a worn roof needed a full envelope refresh. We stripped back to the sheathing, corrected moisture issues and rebuilt the exterior as one coordinated system.",
    scopeItems: [
      "30-year architectural shingles with ice & water shield at eaves and valleys",
      "James Hardie lap siding over a new weather-resistive barrier",
      "New flashing at windows, doors and roof-to-wall intersections",
      "Replacement fascia, soffit and eavestroughs",
    ],
    featured: true,
  },
  {
    id: "commercial-storefront-eifs-cladding",
    title: "Commercial Storefront & EIFS Cladding",
    location: "Calgary",
    category: "Commercial & Multi-Family",
    year: 2024,
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    trades: ["Commercial EIFS", "Flashings"],
    scope: ["EIFS", "Storefront", "Sealants"],
    overview:
      "A retail storefront refresh demanded a clean, modern façade with minimal disruption to neighbouring tenants. The EIFS system and flashing package were sequenced to keep the entrance accessible throughout.",
    scopeItems: [
      "Exterior Insulation and Finish System (EIFS) with reinforced base coat",
      "Commercial flashing and sealant detailing at storefront glazing",
      "Reveals and architectural accent bands",
      "Sequenced work to keep the tenant entrance open",
    ],
  },
  {
    id: "inner-city-modern-stone-siding",
    title: "Inner-City Modern Stone & Siding",
    location: "Inner-City Calgary",
    category: "Residential Exterior",
    year: 2024,
    imageUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    trades: ["Stone Veneer", "Siding"],
    scope: ["Stone veneer", "Composite siding", "Modern detailing"],
    overview:
      "A contemporary infill build called for crisp lines and tight tolerances. We paired natural-looking stone with clean-profile siding, paying close attention to corners, reveals and flashing so the finished envelope matched the architect's drawings.",
    scopeItems: [
      "Manufactured stone veneer on the street-facing façade",
      "Composite and engineered wood siding with concealed fasteners",
      "Custom-bent metal flashing and trim",
      "Soffit and fascia to match the modern profile",
    ],
  },
  {
    id: "southwest-calgary-roof-replacement",
    title: "Southwest Calgary Residential Roof Replacement",
    location: "SW Calgary",
    category: "Roofing & Siding",
    year: 2025,
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    trades: ["Architectural Shingles", "Eavestroughs"],
    scope: ["Tear-off", "New shingles", "Drainage"],
    overview:
      "A full tear-off and replacement on a mature home, completed in a short weather window. The new roof system was paired with updated drainage to protect the envelope through Calgary's freeze-thaw cycles.",
    scopeItems: [
      "Complete tear-off and deck inspection",
      "30-year architectural shingles with synthetic underlayment",
      "Ice & water shield at eaves, valleys and penetrations",
      "Seamless eavestroughs and downspouts",
    ],
  },
  {
    id: "cochrane-ridge-estate-exterior-envelope",
    title: "Cochrane Ridge Estate Exterior Envelope",
    location: "Cochrane",
    category: "Residential Exterior",
    year: 2025,
    imageUrl:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    trades: ["Stucco", "Stone Veneer", "Flashings"],
    scope: ["Acrylic stucco", "Stone accents", "Waterproofing"],
    overview:
      "A large estate home on the Cochrane ridge needed a complete exterior envelope that could stand up to exposed, high-wind conditions. We delivered stucco, stone and flashing as one coordinated system so every transition was watertight.",
    scopeItems: [
      "Acrylic stucco finish over a weather-resistive barrier",
      "Manufactured stone veneer on feature walls and columns",
      "Custom flashing at windows, doors and roof-to-wall transitions",
      "Moisture-management details rated for high-wind exposure",
    ],
  },
  {
    id: "beltline-commercial-tenant-improvement",
    title: "Beltline Commercial Tenant Improvement",
    location: "Beltline, Calgary",
    category: "Interior Renovations",
    year: 2024,
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    trades: ["Tenant Improvement", "Interior Finishing"],
    scope: ["Office buildout", "Partitions", "Finishing"],
    overview:
      "A growing business needed an efficient office buildout in a busy inner-city location on a compressed timeline. We managed the interior scope and finishes so the space was ready for move-in on the landlord's schedule.",
    scopeItems: [
      "Framing and drywall for new partitions and meeting rooms",
      "Ceiling, trim and interior finishing",
      "Coordination with mechanical and electrical trades",
      "Final deficiency walkthrough and closeout",
    ],
  },
  {
    id: "chestermere-multi-unit-siding-drainage",
    title: "Chestermere Multi-Unit Siding & Drainage",
    location: "Chestermere",
    category: "Commercial & Multi-Family",
    year: 2025,
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    trades: ["Siding", "Eavestroughs", "Flashings"],
    scope: ["Multi-unit siding", "Drainage", "Exterior repairs"],
    overview:
      "A multi-unit property needed its aging siding and drainage replaced without disrupting residents. Work was sequenced building by building so each elevation was closed in quickly and kept dry.",
    scopeItems: [
      "Siding replacement with new weather-resistive barrier",
      "Seamless eavestroughs and heavy-gauge downspouts",
      "Fascia, soffit and trim replacement",
      "Flashing and sealant repairs at common-area transitions",
    ],
  },
  {
    id: "aspen-woods-shingle-soffit",
    title: "Aspen Woods Architectural Shingle & Soffit",
    location: "Aspen Woods, Calgary",
    category: "Roofing & Siding",
    year: 2024,
    imageUrl:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    trades: ["Architectural Shingles", "Soffit", "Fascia"],
    scope: ["New roof system", "Soffit & fascia", "Ventilation"],
    overview:
      "A premium west-Calgary home called for a roof and roofline package that matched the quality of the build. We installed a new shingle system with matching soffit and fascia, with ventilation and flashing detailed for long-term performance.",
    scopeItems: [
      "30-year architectural shingles with synthetic underlayment",
      "Ice & water shield at eaves, valleys and penetrations",
      "Aluminum soffit and fascia with integrated ventilation",
      "Step and counter flashing at all roof-to-wall intersections",
    ],
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
