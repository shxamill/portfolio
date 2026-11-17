import type { ImageMetadata } from 'astro';
import shotVeluneProd from '../assets/media/shot-veluneproductions.png';
import reelPoster from '../assets/media/velune-reel-poster.jpg';
import shotVeluneSite from '../assets/media/shot-velune-site.png';
import shotDn from '../assets/media/shot-dn.png';
import kinjal from '../assets/media/velune-kinjal.jpg';
import lakshi from '../assets/media/velune-lakshi.jpg';
import stilat from '../assets/media/velune-stilat.jpg';
import pledits from '../assets/media/velune-pledits.jpg';
import yash from '../assets/media/velune-yash.jpg';
import nomi from '../assets/media/velune-nomi.jpg';
import netravathi from '../assets/media/trekcult-netravathi.jpg';
import kedarkantha from '../assets/media/trekcult-kedarkantha.jpg';

export type Section = { heading: string; paragraphs: string[]; points?: string[] };
export type Figure = { src: ImageMetadata; alt: string; caption?: string };

export type CaseStudy = {
  slug: string;
  title: string;
  /** One plain sentence: what it is. */
  line: string;
  colour: 'code' | 'studio' | 'learn';
  role: string;
  when: string;
  stack: string[];
  links: { label: string; href: string }[];
  /** Hard numbers that can be checked. */
  evidence: { value: string; label: string }[];
  hero?: Figure;
  heroVideo?: { src: string; poster: ImageMetadata; alt: string };
  sections: Section[];
  gallery?: Figure[];
  demo?: 'fake-news';
};

export const work: CaseStudy[] = [
  {
    slug: 'engineering-os',
    title: 'Engineering OS',
    line: 'A Claude Code plugin that makes an AI coding agent work like an engineering team, and stops it from calling work done without proof.',
    colour: 'code',
    role: 'Solo project: design, code, tests, CI',
    when: 'October 2026 to now',
    stack: ['JavaScript (Node.js)', 'Shell', 'Claude Code hooks', 'GitHub Actions'],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/shxamill/engineers' }],
    evidence: [
      { value: '377/377', label: 'hook tests passing' },
      { value: '107/107', label: 'engine tests passing' },
      { value: '35', label: 'mutations that must break a test' },
      { value: '2 OS', label: 'CI on Ubuntu and Windows' },
    ],
    sections: [
      {
        heading: 'The problem',
        paragraphs: [
          'AI coding agents are quick to say a task is finished. They will report that tests pass when the tests were never run, or approve their own work. Instructions in a prompt do not stop this, because a model can simply not follow them.',
          'I wanted the agent to behave like a small engineering organisation: decide how big and risky a request is, bring in only the specialists it needs, and not ship until someone independent has checked the work.',
        ],
      },
      {
        heading: 'What I built',
        paragraphs: [
          'Engineering OS turns the main Claude Code session into a CTO-style orchestrator. Each request is classified by scope and risk, then staffed from a catalogue of capabilities across product, design, software, platform, quality, security and documentation. Small fixes get a short lifecycle; risky changes get design review, a build, independent review and verification.',
        ],
        points: [
          '16 specialist agents, 24 skills and 31 routable capabilities.',
          '7 hooks that run on Claude Code events and enforce the critical gates in code.',
          'A validator for the whole organisation definition, run before every commit.',
        ],
      },
      {
        heading: 'Decisions that mattered',
        paragraphs: [
          'Put the rules in hooks, not prompts. A hook is a script that runs whether the model cooperates or not, so “no verification evidence, no done” is enforced by code.',
          'Test the tests. The suite includes 35 scripted mutations: each one deliberately breaks the plugin, and CI fails unless a test catches it. That is how I know the 377 hook tests are checking something.',
          'Run CI on Windows as well as Ubuntu. Hooks are scripts that have to behave the same on every machine, so CI runs both operating systems plus a job that checks Git’s line-ending conversion.',
          'Ask for a fresh pair of eyes. An independent review in a fresh context found 20 defects in version 3, and a second pass on the fixes found 4 more. All are fixed or documented in the repository.',
        ],
      },
      {
        heading: 'Where it stands',
        paragraphs: [
          'Version 3 is marked experimental. The automated suites pass, but the plugin has not yet been used on a production codebase. The next step is a comparison against plain Claude Code on real repositories, not just my benchmark scenarios.',
        ],
      },
    ],
  },
  {
    slug: 'fake-news-detector',
    title: 'Fake news detector',
    line: 'A text classifier with a Streamlit app, built as a 135-hour TCS iON industry project. The real model runs below.',
    colour: 'code',
    role: 'Industry project trainee, TCS iON',
    when: 'November 2025 to February 2026',
    stack: ['Python', 'scikit-learn', 'TF-IDF', 'Logistic regression', 'Streamlit', 'Jupyter'],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/shxamill/fake_news' }],
    evidence: [
      { value: '135 h', label: 'industry-certified project' },
      { value: '5,000', label: 'words in the TF-IDF vocabulary' },
      { value: '140 KB', label: 'model, small enough to run in a browser' },
    ],
    demo: 'fake-news',
    sections: [
      {
        heading: 'What I built',
        paragraphs: [
          'Two notebooks clean the text and train the model: lower-casing, stripping links and symbols, a TF-IDF vectoriser over the 5,000 most useful words, and a logistic regression classifier evaluated with precision, recall and F1-score.',
          'The Streamlit app takes any article or post, scores it, and also looks up related news and Wikipedia entries so a reader has context, not just a number.',
          'For this site I exported the vectoriser and model weights to JSON and rewrote the prediction in JavaScript. It reproduces the Python probabilities to four decimal places.',
        ],
      },
      {
        heading: 'What the model actually learned',
        paragraphs: [
          'The most useful thing I learned came from reading the weights. The words that push hardest towards “real” are reuters, said, washington and the days of the week. The words that push towards “fake” are video, via, image, breaking and watch.',
          'Those are signs of where an article came from, not whether it is true. Agency copy says “WASHINGTON (Reuters) … said on Tuesday”; viral posts say “WATCH this video”. So the model is mostly recognising writing style. It does well on its dataset and can be fooled by a false claim written like a wire report.',
        ],
      },
      {
        heading: 'What I would do next',
        paragraphs: [
          'Strip agency bylines and datelines before training, test on articles from sources the model has never seen, and compare against a small transformer model. And keep the honest framing the app already has: a probability that text looks like real reporting, not a fact-check.',
        ],
      },
    ],
  },
  {
    slug: 'velune',
    title: 'Velune Creative Studio',
    line: 'The film, photo and web studio I co-founded in Bengaluru, and the websites and campaigns we make for clients.',
    colour: 'studio',
    role: 'Co-founder: websites, content and marketing',
    when: '2026 to now',
    stack: ['Astro', 'Next.js', 'TypeScript', 'GSAP', 'ffmpeg', 'ImageMagick', 'Meta Ads'],
    links: [
      { label: 'veluneproductions.com', href: 'https://www.veluneproductions.com' },
      { label: 'Instagram', href: 'https://www.instagram.com/veluneproductions/' },
      { label: 'Studio site source', href: 'https://github.com/shxamill/veluneproductions' },
    ],
    evidence: [
      { value: '9', label: 'services, from film to Meta Ads' },
      { value: '6', label: 'featured client projects on the site' },
      { value: '3', label: 'client websites shipped' },
    ],
    heroVideo: { src: '/media/velune-reel.mp4', poster: reelPoster, alt: 'Velune showreel: bridal, fashion and brand shoots.' },
    sections: [
      {
        heading: 'The studio',
        paragraphs: [
          'Velune brings creative production and digital services together for brands, businesses, products and people: video, photography, iPhone videography, content, social media, branding, digital marketing and Meta Ads. Our work so far includes bridal and fashion shoots for makeup artists, a luxury clothing label, a kids’ brand film, and campaigns for a trekking company.',
        ],
      },
      {
        heading: 'Building the studio website twice',
        paragraphs: [
          'The first version was a Next.js 16 and React 19 site with GSAP motion and Lenis smooth scrolling. It looked right, but a studio site is mostly heavy media and almost no logic, so I rebuilt it as static pages in Astro.',
          'The interesting part is the media pipeline. One re-runnable script takes the original phone and camera footage, including HEVC .MOV files that Chrome and Firefox cannot play, and produces AV1/WebM and H.264 versions in 16:9 and 9:16 with audio removed. Stills become responsive AVIF and WebP at build time. The originals are never modified.',
        ],
      },
      {
        heading: 'Client websites',
        paragraphs: [
          'DN Dry Fruits sells cashews, makhana and dry fruits. Instead of a payment gateway, the cart becomes a ready-to-send WhatsApp message to the shop, which is how its customers already order. Products, prices, coupons and delivery rules live in two data files the owner can edit.',
          'Caalipo is a Gen-Z denim bag brand. Its storefront is plain HTML, CSS and JavaScript modules with no build step: hero slider, product grid, cart drawer and search. Product photos and checkout are still being finalised with the client.',
        ],
      },
      {
        heading: 'Content and campaigns',
        paragraphs: [
          'For TrekCult, a trekking company, we make Instagram carousels, explainer videos and event posters: beginner guides for Kedarkantha, a Netravathi community trek, and a logo sting and end cards for their videos.',
        ],
      },
    ],
    gallery: [
      { src: lakshi, alt: 'Smiling bride in traditional jewellery and a maang tikka.', caption: 'Lakshi Lingaraju, makeup artistry' },
      { src: stilat, alt: 'Model on horseback in an oversized pale green shirt and a wide-brimmed hat.', caption: 'Stilat, luxury clothing' },
      { src: kinjal, alt: 'Model in a crystal-embellished strapless gown, photographed at night.', caption: 'Kinjal Mehtha, makeup artistry' },
      { src: pledits, alt: 'Model in a yellow silk sari among red ginger flowers.', caption: 'PL Edits, styling' },
      { src: yash, alt: 'Bride in a green silk sari seated by an antique gramophone.', caption: 'Yash Jain, makeup artistry' },
      { src: nomi, alt: 'A child running along a beach under a grey sky.', caption: 'Nomi Kids Culture, brand film' },
      { src: kedarkantha, alt: 'Instagram slide asking whether a beginner can do Kedarkantha.', caption: 'TrekCult, Instagram carousel' },
      { src: netravathi, alt: 'Poster for a Netravathi community trek over green hills.', caption: 'TrekCult, event poster' },
      { src: shotDn, alt: 'DN Dry Fruits homepage.', caption: 'DN Dry Fruits, online store' },
      { src: shotVeluneSite, alt: 'Velune site, first version.', caption: 'Velune, first website' },
    ],
  },
  {
    slug: 'mern-apps',
    title: 'Food delivery app and hackathon task manager',
    line: 'Two MERN-stack builds: a full ordering platform with payments, and an AI task manager that reached the top 10 at a national IBM hackathon.',
    colour: 'code',
    role: 'Full-stack developer; one of four in the hackathon team',
    when: 'Around December 2024 to March 2025',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Vite', 'JWT', 'Stripe'],
    links: [{ label: 'Food delivery source on GitHub', href: 'https://github.com/shxamill/food_del' }],
    evidence: [
      { value: 'Top 10', label: 'of 30 teams at IBM ICE Day' },
      { value: '24 h', label: 'to a working prototype' },
      { value: '3 apps', label: 'customer site, admin panel, API' },
    ],
    sections: [
      {
        heading: 'Food delivery platform',
        paragraphs: [
          'Three apps share one MongoDB database: a React customer site for browsing and ordering, a React admin panel for the menu and order status, and an Express API between them.',
        ],
        points: [
          'Accounts with hashed passwords and JWT authentication on cart and order routes.',
          'Menu management with image uploads, carts per user, and order tracking with status updates.',
          'Online payment through Stripe Checkout, with a verification step, plus cash on delivery.',
        ],
      },
      {
        heading: 'An honest note about the repository',
        paragraphs: [
          'The backend is complete on GitHub, but the page and component folders of the two React apps are missing from the repository. The README says so, and CI checks the backend and skips the incomplete front ends instead of pretending they build.',
        ],
      },
      {
        heading: 'AI task manager at IBM ICE Day',
        paragraphs: [
          'At IBM’s national ICE Day hackathon, our team of four BCA students competed against 30 teams from colleges across India, most of them final-year B.Tech students. In 24 hours we built a task manager for colleges with task tracking, categories, priorities and an AI chatbot that answers questions about your tasks.',
          'We made the top 10, and ours was one of the few projects that ended the day with a fully working build. The same event also earned me a bronze medal in the report-making competition.',
        ],
      },
    ],
  },
];
