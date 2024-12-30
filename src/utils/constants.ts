import { images } from '../assets/images';
import { documents } from '../assets/documents';

// Application constants
export const NAVIGATION_LINKS = [
  'About',
  'Education',
  'Projects',
  'Certifications',
  'GitHub',
  'Publications',
  'Contact'
] as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/ManisaiGondrala/',
  linkedin: 'https://www.linkedin.com/in/gondrala-mani-sai-588192226/',
  twitter: 'https://x.com/ManiSai32072634'
} as const;

export const CONTACT_INFO = {
  email: 'manisaigondrala94@gmail.com',
  phone: '+91 8790749549',
  location: 'Mahabubabad, Telangana, India'
} as const;

export const ABOUT_INFO = {
  description: `I am Gondrala Mani Sai, a B.Tech student at KL University, passionate about web development, AI technologies, and 3D design. As a dedicated and creative problem solver with strong logical thinking, I approach challenges with efficiency and innovation. I specialize in building scalable web applications with a solid foundation in both frontend and backend technologies. Aspiring to become a Software Engineer at leading tech companies, I aim to contribute to meaningful and groundbreaking projects in the future.`,
  roles: [
    'Full Stack Development',
    '3D - Design',
    'Programming',
    'Problem Solving',
    'Python',
    'MYSQL',
    
  ]
} as const;

export const PROFILE_IMAGE = images.profile;

export const DOCUMENTS = documents;