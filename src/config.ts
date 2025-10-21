export interface SiteConfig {
  title: string;
  description: string;
  author: {
    name: string;
    bio: string;
    avatar?: string;
  };
  social: {
    github?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    email?: string;
    leetcode?: string; // Add this
    kaggle?: string;  
  };
  siteUrl: string;
}

export const config: SiteConfig = {
  title: "Chirayu Khalwa Portfolio",
  description: "Personal blog and project showcase by Chirayu Khalwa, B.Tech CSE Final Year",
  author: {
    name: "Chirayu Khalwa",
    bio: "Coder, Editor, and explorer of aesthetic tensions between past and present.",
    avatar: "/images/IMG20250709121326 (1).jpg" // Uncomment and add your avatar image to public/images/
  },
  social: {
    instagram:"https://www.instagram.com/alpha_sagaxx/",
    github: "https://github.com/raysamma",
    twitter: "https://twitter.com/ChirayuKhalwa",
    linkedin: "https://linkedin.com/in/ChirayuKhalwa",
    email: "khalwachirayu@gmail.com",
    leetcode: "https://leetcode.com/u/raysamma/",
    kaggle: "https://www.kaggle.com/ChirayuKhalwa"
  },
  siteUrl: "https://volks-typo.example.com"
};

// Export constants for SEO component
export const SITE_TITLE = config.title;
export const SITE_DESCRIPTION = config.description;