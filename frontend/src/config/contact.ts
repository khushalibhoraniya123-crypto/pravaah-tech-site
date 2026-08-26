/**
 * ==============================================================================
 * PRAVAAH TECHNOLOGY - CENTRAL BUSINESS & CONTACT CONFIGURATION
 * ==============================================================================
 * This is the SINGLE SOURCE OF TRUTH for all contact information, phone numbers,
 * email addresses, social media links, office locations, and core company stats.
 * 
 * Edit this ONE file to update company details across the entire website.
 * ==============================================================================
 */

export interface ContactConfig {
  companyName: string;
  tagline: string;
  badgeText: string;
  phone: string;
  phoneRaw: string; // Used for tel: links
  email: string;
  whatsapp: string;
  whatsappRaw: string; // Used for https://wa.me/ links
  whatsappMessage: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    fullFormatted: string;
  };
  workingHours: {
    weekdays: string;
    weekend: string;
  };
  socialLinks: {
    linkedin: string;
    instagram: string;
    facebook: string;
    github: string;
    twitter: string;
  };
  stats: {
    projectsDelivered: string;
    happyClients: string;
    digitalSolutions: string;
    clientSatisfaction: string;
    yearsOfExcellence: string;
  };
  inquiryServices: string[];
  budgetOptions: string[];
}

export const CONTACT_CONFIG: ContactConfig = {
  companyName: "Pravaah Technology",
  tagline: "Transforming ideas into powerful digital experiences, intelligent solutions and scalable technology.",
  badgeText: "INNOVATION • TECHNOLOGY • DIGITAL FUTURE",

  // EDIT PHONE NUMBER HERE
  phone: "+91 95743 43531",
  phoneRaw: "+919574343531",

  // EDIT EMAIL ADDRESS HERE
  email: "pravaahtechnologies15@gmail.com",

  // EDIT WHATSAPP NUMBER HERE (No spaces or plus for raw URL)
  whatsapp: "+91 95743 43531",
  whatsappRaw: "919574343531",
  whatsappMessage: "Hi Pravaah Technology, I would like to discuss a project inquiry with your team.",

  // EDIT OFFICE ADDRESS HERE
  address: {
    street: "358, 3rd Floor, Amorina Textile Market, near Polaris Mall, opp Saswat Plazza, Punagam, Varachha",
    city: "Surat",
    state: "Gujarat",
    country: "India",
    postalCode: "395010",
    fullFormatted: "358, 3rd Floor, Amorina Textile Market, near Polaris Mall, opp Saswat Plazza, Punagam, Varachha, Surat, Gujarat 395010"
  },

  workingHours: {
    weekdays: "Mon – Fri: 9:30 AM – 7:00 PM IST",
    weekend: "Sat – Sun: Support Team Available",
  },

  // EDIT SOCIAL PROFILES HERE
  socialLinks: {
    linkedin: "https://linkedin.com/company/pravaah-technology",
    instagram: "https://instagram.com/pravaahtechnology",
    facebook: "https://facebook.com/pravaahtechnology",
    github: "https://github.com/pravaah-technology",
    twitter: "https://twitter.com/pravaahtech",
  },

  // EDIT COMPANY STATS HERE
  stats: {
    projectsDelivered: "12+",
    happyClients: "9+",
    digitalSolutions: "3+",
    clientSatisfaction: "99%",
    yearsOfExcellence: "5+",
  },

  // SERVICES DROPDOWN FOR INQUIRY FORM
  inquiryServices: [
    "Web Development & SaaS",
    "App Development (iOS / Android)",
    "UI/UX & Product Design",
    "AI & Machine Learning Solutions",
    "Custom Software & ERP / CRM",
    "Business Automation Systems",
    "Cloud, DevOps & System Integration",
    "Other / Full Digital Transformation",
  ],

  // BUDGET RANGES FOR INQUIRY FORM
  budgetOptions: [
    "< $2,500 (Basic MVP / Website)",
    "$2,500 - $5,000 (Standard Business App)",
    "$5,000 - $15,000 (Custom Solution / Platform)",
    "$15,000 - $50,000 (Enterprise / AI System)",
    "$50,000+ (Comprehensive Transformation)",
    "Flexible / Open to Consultation",
  ],
};
