// src/data/profiles.ts

export interface SocialLink {
  platform: string;
  url: string;
}

export interface Profile {
  username: string;
  name: string;
  bio: string;
  image: string;
  socialLinks: SocialLink[];
}

export const profiles: Profile[] = [
  {
    username: 'juanflores',
    name: 'Juan Flores',
    bio: 'Desarrollador web',
    image: '/images/juanflores.jpg',
    socialLinks: [
      { platform: 'Twitter', url: 'https://twitter.com/juanflores' },
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/juanflores' },
      { platform: 'GitHub', url: 'https://github.com/juanflores' },
      { platform: 'Instagram', url: 'https://www.instagram.com/juanflores' },
    ],
  },
  // Agrega más perfiles aquí
];
