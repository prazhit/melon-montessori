import logo from "@assets/img/logo/logo.png";
import logoWhite from "@assets/img/logo/logo-white.svg";

const footer_data = {
  description: {
    id: 1,
    logo: logo,
    logoWhite: logoWhite,
    teaser:
      "Our Montessori is a school that offers a unique educational approach that nurtures a child’s intrinsic desire to learn. We provide a safe, nurturing, and stimulating environment that helps children develop to their fullest potential.",
    socialTitle: "Social",
    newsTitle: "Join Our Newsletter",
    newsBtn: "Subscribe now",
    social_icons: [
      {
        id: 1,
        icon: "fa-brands fa-facebook-f",
        url: "https://www.facebook.com/melonmontessoripreschool",
        name: "Facebook",
      },
      {
        id: 2,
        icon: "fa-brands fa-tiktok",
        url: "https://tiktok.com/@melonmontessori",
        name: "TikTok",
      },
      {
        id: 3,
        icon: "fa-brands fa-youtube",
        url: "https://www.youtube.com/",
        name: "Youtube",
      },
    ],
  },
  quick_links: {
    id: 2,
    title: "Quick links",
    menus: [
      {
        id: 1,
        menu: "About",
        path: "/about",
      },
      {
        id: 2,
        menu: "Programs",
        path: "/programs",
      },
      {
        id: 3,
        menu: "Shop",
        path: "/shop",
      },
      {
        id: 4,
        menu: "Classes",
        path: "/classes",
      },
      {
        id: 5,
        menu: "News",
        path: "/news",
      },
      {
        id: 6,
        menu: "Contact",
        path: "/contact",
      },
    ],
  },
  program_links: {
    id: 3,
    title: "Programs",
    programs: [
      {
        id: 1,
        menu: "Play School",
        path: "/programs",
      },
      {
        id: 2,
        menu: "Nursery",
        path: "/programs",
      },
      {
        id: 3,
        menu: "Junior Kg",
        path: "/programs",
      },
      {
        id: 4,
        menu: "Senior Kg",
        path: "/programs",
      },
      {
        id: 5,
        menu: "Holiday Camp",
        path: "/programs",
      },
      {
        id: 6,
        menu: "Day Care",
        path: "/programs",
      },
    ],
  },
  customer_services: {
    id: 3,
    title: "Programs",
    services: [
      {
        id: 1,
        menu: "Recently Viewed",
        path: "/programs",
      },
      {
        id: 2,
        menu: "New Products",
        path: "/shop",
      },
      {
        id: 3,
        menu: "Shipping & Returns",
        path: "/contact",
      },
      {
        id: 4,
        menu: "Senior Kg",
        path: "/programs",
      },
      {
        id: 5,
        menu: "Become a Seller",
        path: "/programs",
      },
    ],
  },
  contact_info: {
    id: 4,
    title: "Contact Us",
    infos: [
      {
        id: 1,
        icon: "fa-light fa-location-dot",
        url: "https://maps.app.goo.gl/1vApFvmoN7quUJwz7",
        title: "Opp. NEA, Sundarbasti, Madhyapur Thimi, Bhaktapur",
      },
      {
        id: 2,
        icon: "fa-light fa-phone",
        url: "tel:9840853666",
        title: "+977-9840853666",
      },
      {
        id: 3,
        icon: "fa-light fa-envelope",
        url: "mailto:info@melonmontessori.com.np",
        title: "info@melonmontessori.com.np",
      },
    ],
  },
};

export default footer_data;
