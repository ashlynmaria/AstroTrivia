import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";
import { FaQuestionCircle, FaChalkboardTeacher, FaRegLightbulb, FaTrophy, FaAward, FaLock, FaGlobe, FaBookOpen } from 'react-icons/fa';

export const navLinks = [
  {
    id: "Home",
    title: "Home",
  },
  {
    id: "quizzes",
    title: "Quizzes",
  },
  {
    id: "dashboard",
    title: "Dashboard",
  },
  {
    id: "community",
    title: "Community",
  },
];

export const quizzes = [
  {
    id: "quizzes-1",
    icon: star,
    title: "Interactive Learning",
    content:
      "Engage with quizzes that make learning active, not passive. Tackle topics with confidence!",
  },
  {
    id: "quizzes-2",
    icon: shield,
    title: "Study Smart",
    content:
      "Our intelligent quiz analytics give you real-time insight into your progress and performance.",
  },
  {
    id: "quizzes-3",
    icon: send,
    title: "Personalized Paths",
    content:
      "Your educational journey is unique. Our quizzes adapt to your needs, supporting your individual learning style.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Exploring AstroTrivia has completely changed the way I approach studying. The interactive quizzes make learning seem like a game, and I've seen my grades soar!",
    name: "Herman Jensen",
    title: "Student",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "With AstroTrivia, I can study anytime, anywhere. It's like having a personal tutor that fits right in my pocket. The progression tracking helps me stay motivated!",
    name: "Steve Mark",
    title: "Student",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Engaging, insightful, and downright fun - I never imagined I could learn so much through quizzes. The competition with my peers on the leaderboard adds an exciting twist to revision!",
    name: "Kenn Gallagher",
    title: "Student",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Players Engaged",
    value: "200+",
  },

  {
    id: "stats-2",
    title: "Topics Covered",
    value: "130+",
  },
  {
    id: "stats-3",
    title: "Positive User Ratings",
    value: "97%",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const community = [
  {
    id: "community-1",
    logo: airbnb,
  },
  {
    id: "community-2",
    logo: binance,
  },
  {
    id: "community-3",
    logo: coinbase,
  },
  {
    id: "community-4",
    logo: dropbox,
  },
];