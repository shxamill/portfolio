import type { ImageMetadata } from 'astro';
import benyar from '../assets/media/benyar-movement.png';
import shotVeluneSite from '../assets/media/shot-velune-site.png';
import shotVeluneProd from '../assets/media/shot-veluneproductions.png';
import shotDn from '../assets/media/shot-dn.png';
import trekKedarkantha from '../assets/media/trekcult-kedarkantha.jpg';
import reelPoster from '../assets/media/velune-reel-poster.jpg';

export type Track = 'code' | 'studio' | 'courses' | 'degree';

export const tracks: { id: Track; label: string; colour: 'code' | 'studio' | 'learn' }[] = [
  { id: 'code', label: 'Code', colour: 'code' },
  { id: 'studio', label: 'Studio', colour: 'studio' },
  { id: 'courses', label: 'Courses', colour: 'learn' },
  { id: 'degree', label: 'Degree', colour: 'learn' },
];

/** First and last month shown on the timeline (inclusive). */
export const range = { from: '2023-08', to: '2026-11' };

export type Media =
  | { kind: 'image'; src: ImageMetadata; alt: string; fit?: 'cover' | 'contain'; position?: string }
  | { kind: 'video'; src: string; poster: ImageMetadata; alt: string }
  | { kind: 'terminal'; title: string; lines: string[] }
  | { kind: 'card'; big: string; small: string };

export type Clip = {
  id: string;
  track: Track;
  title: string;
  /** YYYY-MM, inclusive */
  start: string;
  end: string;
  /** Shown as "around" when the exact month is not on record. */
  approx?: boolean;
  /** Still going: shown as "to now". */
  ongoing?: boolean;
  summary: string;
  media: Media;
  links?: { label: string; href: string }[];
  caseStudy?: string;
};

export type Marker = { id: string; at: string; approx?: boolean; title: string; summary: string };

export const clips: Clip[] = [
  // Code
  {
    id: 'food-del', track: 'code', title: 'Food delivery app', start: '2024-12', end: '2025-03', approx: true,
    summary: 'A MERN ordering platform: customer site, admin panel and an Express API with JWT login, cart, orders and Stripe checkout.',
    media: { kind: 'terminal', title: 'backend/server.js · mounted routes', lines: [
      'POST /api/user/register      registerUser',
      'POST /api/user/login         loginUser',
      'GET  /api/food/list          listFood',
      'POST /api/food/add           upload.single("image"), addFood',
      'POST /api/cart/add           auth, addToCart',
      'POST /api/order/place        auth, placeOrder   → Stripe',
      'POST /api/order/placecod     auth, placeOrderCod',
      'POST /api/order/verify       verifyOrder',
      'POST /api/order/status       updateStatus',
    ] },
    links: [{ label: 'Source', href: 'https://github.com/shxamill/food_del' }],
    caseStudy: 'mern-apps',
  },
  {
    id: 'hackathon', track: 'code', title: 'AI task manager, IBM hackathon', start: '2025-01', end: '2025-01', approx: true,
    summary: 'Built in 24 hours with a team of four at IBM ICE Day. Task tracking, priorities and an AI chatbot. We finished in the top 10 of 30 teams.',
    media: { kind: 'card', big: 'Top 10 of 30', small: 'IBM ICE Day national hackathon, MERN stack, 24 hours' },
    caseStudy: 'mern-apps',
  },
  {
    id: 'fake-news', track: 'code', title: 'Fake news detector', start: '2025-11', end: '2026-02',
    summary: 'A 135-hour TCS iON industry project. TF-IDF features and logistic regression behind a Streamlit app. You can try the model on this site.',
    media: { kind: 'terminal', title: 'model.predict_proba(…)  real-news probability', lines: [
      '"NASA confirms the Artemis crew returned safely…"     0.9239',
      '"SHOCKING!!! Doctors don\'t want you to know…"         0.0516',
      '"The Reserve Bank of India kept its repo rate…"       0.9158',
      '',
      'strongest real-leaning words   reuters, said, washington, tuesday',
      'strongest fake-leaning words   video, via, image, breaking, watch',
    ] },
    links: [{ label: 'Source', href: 'https://github.com/shxamill/fake_news' }],
    caseStudy: 'fake-news-detector',
  },
  {
    id: 'benyar', track: 'code', title: 'BENYAR watch landing page', start: '2026-03', end: '2026-03',
    summary: 'A scroll-driven product page in React and Framer Motion. The hero plays a 240-frame image sequence as you scroll.',
    media: { kind: 'image', src: benyar, alt: 'Exploded view of a mechanical watch movement on black, a frame from the scroll sequence.', fit: 'contain' },
    links: [{ label: 'Live', href: 'https://anime-watch-swart.vercel.app' }, { label: 'Source', href: 'https://github.com/shxamill/benyar-watch-landing' }],
  },
  {
    id: 'velune-site', track: 'code', title: 'Velune website, first version', start: '2026-09', end: '2026-09',
    summary: 'The first studio site, in Next.js 16, React 19, TypeScript, Tailwind CSS 4 and GSAP, with floating client work around the tagline.',
    media: { kind: 'image', src: shotVeluneSite, alt: 'Velune site v1: the tagline Create. Capture. Elevate. surrounded by client photographs.' },
    links: [{ label: 'Live', href: 'https://velune-site.vercel.app' }, { label: 'Source', href: 'https://github.com/shxamill/velune-site' }],
    caseStudy: 'velune',
  },
  {
    id: 'eng-os', ongoing: true, track: 'code', title: 'Engineering OS', start: '2026-10', end: '2026-11',
    summary: 'A Claude Code plugin that runs AI coding work like an engineering team, and refuses to call work done until hooks see tests and an independent review.',
    media: { kind: 'terminal', title: 'engineers $ npm test (real output)', lines: [
      '$ node plugins/engineering-os/scripts/test-engines.mjs',
      '107/107 engine tests passed',
      '$ node plugins/engineering-os/scripts/verify-hooks.mjs',
      '377/377 hook tests passed',
      '$ node plugins/engineering-os/scripts/validate-org.mjs',
      '16 agents · 24 skills · 31 capabilities · 7 hooks',
      'OK: engineering-os plugin valid',
    ] },
    links: [{ label: 'Source', href: 'https://github.com/shxamill/engineers' }],
    caseStudy: 'engineering-os',
  },
  {
    id: 'caalipo', track: 'code', title: 'Caalipo storefront', start: '2026-10', end: '2026-10',
    summary: 'A storefront for a denim bag brand with no build step: hero slider, product grid, cart drawer and search in plain JavaScript modules.',
    media: { kind: 'card', big: 'Zero dependencies', small: 'Caalipo storefront, HTML, CSS and JavaScript modules, Velune client' },
    links: [{ label: 'Live', href: 'https://caalipo-website.vercel.app' }, { label: 'Source', href: 'https://github.com/shxamill/caalipo-website' }],
    caseStudy: 'velune',
  },
  {
    id: 'velune-astro', ongoing: true, track: 'code', title: 'veluneproductions.com', start: '2026-10', end: '2026-11',
    summary: 'The studio site rebuilt in Astro as static pages, with a script that turns raw client footage into web-ready AV1 and H.264 video.',
    media: { kind: 'image', src: shotVeluneProd, alt: 'The Velune website homepage with the headline Create. Capture. Elevate.', position: 'top' },
    links: [{ label: 'Live', href: 'https://www.veluneproductions.com' }, { label: 'Source', href: 'https://github.com/shxamill/veluneproductions' }],
    caseStudy: 'velune',
  },
  {
    id: 'dn', track: 'code', title: 'DN Dry Fruits store', start: '2026-11', end: '2026-11',
    summary: 'An online shop for a dry-fruit seller. The cart turns into a ready-to-send WhatsApp order, so the shop needed no payment gateway to start selling.',
    media: { kind: 'image', src: shotDn, alt: 'DN Dry Fruits homepage: cashews pouring from a wooden scoop under the headline Nuts That Make Every Day Better.' },
    links: [{ label: 'Live', href: 'https://dn-dry-fruits.vercel.app' }],
    caseStudy: 'velune',
  },

  // Studio
  {
    id: 'velune', ongoing: true, track: 'studio', title: 'Velune Creative Studio', start: '2026-01', end: '2026-11', approx: true,
    summary: 'I co-founded Velune: film, photography, content and websites for brands, makeup artists and small businesses in Bengaluru.',
    media: { kind: 'video', src: '/media/velune-reel.mp4', poster: reelPoster, alt: 'Velune showreel: bridal, fashion and brand shoots.' },
    links: [{ label: 'Website', href: 'https://www.veluneproductions.com' }, { label: 'Instagram', href: 'https://www.instagram.com/veluneproductions/' }],
    caseStudy: 'velune',
  },
  {
    id: 'trekcult', ongoing: true, track: 'studio', title: 'TrekCult campaigns', start: '2026-10', end: '2026-11',
    summary: 'Instagram carousels, explainer videos and posters for a trekking company, from Kedarkantha guides to a Netravathi community trek.',
    media: { kind: 'image', src: trekKedarkantha, alt: 'Instagram slide: Can a beginner do Kedarkantha? A trekker crosses deep snow.', fit: 'contain' },
    caseStudy: 'velune',
  },

  // Courses
  { id: 'cs-basics', track: 'courses', title: 'First four Coursera courses', start: '2023-12', end: '2023-12',
    summary: 'Pointers, Arrays and Recursion (Duke), Matrix Algebra for Engineers (HKUST), Foundations of Computer Science (LearnQuest) and Successful Presentation (CU Boulder).',
    media: { kind: 'card', big: '4 courses', small: 'Duke, HKUST, LearnQuest, CU Boulder' } },
  { id: 'meta', track: 'courses', title: 'Meta: back-end development', start: '2024-08', end: '2024-08',
    summary: 'Introduction to Back-End Development from Meta, where I built a responsive page with HTML and Bootstrap.',
    media: { kind: 'card', big: 'Meta', small: 'Introduction to Back-End Development' } },
  { id: 'plotly', track: 'courses', title: 'COVID-19 data with Plotly', start: '2024-11', end: '2024-11',
    summary: 'Bar charts, scatter plots, choropleth maps and word clouds over CDC and Worldometer data.',
    media: { kind: 'card', big: 'Plotly', small: 'COVID-19 medical analysis and visualisation, Coursera Project Network' } },
  { id: 'softskills', track: 'courses', title: 'IBM soft skills, UI design, Git', start: '2025-09', end: '2025-10',
    summary: 'The five-course IBM People & Soft Skills specialization, Scrimba’s Learn UI Design and Packt’s Git and GitHub.',
    media: { kind: 'card', big: '7 certificates', small: 'IBM, Scrimba, Packt' } },
  { id: 'deep-learning', track: 'courses', title: 'Deep learning', start: '2025-11', end: '2025-11',
    summary: 'Deep Learning from Illinois Tech.', media: { kind: 'card', big: 'Deep learning', small: 'Illinois Tech' } },
  { id: 'java', track: 'courses', title: 'Oracle Java Foundations', start: '2026-02', end: '2026-02',
    summary: 'Oracle Java Foundations.', media: { kind: 'card', big: 'Java', small: 'Oracle Java Foundations' } },
  { id: 'ms-ai', track: 'courses', title: 'Microsoft: foundations of AI and ML', start: '2026-11', end: '2026-11',
    summary: 'Foundations of AI and Machine Learning from Microsoft.', media: { kind: 'card', big: 'Microsoft', small: 'Foundations of AI and Machine Learning' } },

  // Degree
  {
    id: 'bca', track: 'degree', title: 'BCA in AI, Cloud Computing and DevOps', start: '2023-08', end: '2026-05', approx: true,
    summary: 'Yenepoya University, taught with the IBM Innovation Centre for Education. Machine learning, NLP, neural networks, cloud and DevOps, plus semester projects.',
    media: { kind: 'card', big: 'BCA', small: 'AI, Cloud Computing and DevOps, Yenepoya University, IBM ICE program' },
  },
];

export const markers: Marker[] = [
  { id: 'bronze', at: '2025-03', approx: true, title: 'Bronze medal, IBM ICE Day report-making', summary: 'Third place in the report-making competition at IBM ICE Day.' },
  { id: 'idc', at: '2025-06', approx: true, title: 'Volunteer, Microsoft IDC Together Fest', summary: 'Helped run activities and support participants at Microsoft India Development Center’s family festival.' },
  { id: 'graduated', at: '2026-05', title: 'Final exams passed', summary: 'Passed the BCA final examinations in May 2026. The degree was awarded in October 2026.' },
  { id: 'ibm-badge', at: '2026-06', title: 'IBM AI & Machine Learning Graduate', summary: 'IBM’s credential for 450 hours of classes, labs and industry projects in AI and machine learning.' },
];
