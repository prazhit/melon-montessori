import author_1 from "@assets/img/program/author-1.png";
import program_6 from "@assets/img/program/home-program-1.jpg";
import program_2 from "@assets/img/program/home-program-2.jpg";
import program_4 from "@assets/img/program/home-program-4.jpg";
import program_5 from "@assets/img/program/home-program-5.jpg";
import ProgramIconTwo from "@svg/program-icon-2";
import ProgramIconFour from "@svg/program-icon-4";
import ProgramIconFive from "@svg/program-icon-5";
import ProgramIconSix from "@svg/program-icon-6";

const program_data = [
  // {
  //   id: 1,
  //   title: "Day Care",
  //   img: program_5,
  //   description:
  //     "To round out our weekend of celebra tions, we are holding our reunion.",
  //   icon: <ProgramIconFour />,
  //   clrClass: "clr-1",
  //   image1: "pg1_11zon_gkjlyd",
  //   image2: "pg-2_ehajff",
  //   authorImg: author_1,
  //   authorName: "Alexia Honix",
  //   price: 175.0,
  //   delay: ".2s",
  //   programs: [
  //     {
  //       id: 1,
  //       title: "17m - 24m",
  //       subTitle: "age",
  //     },
  //     {
  //       id: 2,
  //       title: "5 Days",
  //       subTitle: "weekly",
  //     },
  //     {
  //       id: 3,
  //       title: "5.30 Hrs",
  //       subTitle: "period",
  //     },
  //   ],
  // },
  {
    id: 2,
    title: "Play Group",
    img: program_2,
    image1: "pg1_11zon_gkjlyd",
    image2: "pg1_11zon_gkjlyd",
    description:
      "Our Play Group program provides a nurturing environment for children aged 24 months to 3 years.",
    icon: <ProgramIconTwo />,
    clrClass: "clr-2",
    delay: ".3s",
    desc1:
      "Our Play Group program provides a nurturing environment for children aged 18 months to 3 years, designed to inspire their curiosity and foster a love for learning. Rooted in the Montessori philosophy, our play-based activities encourage sensory exploration, creativity, and social interaction, helping little ones build a strong foundation for their developmental milestones.",
    desc2:
      "Through engaging activities, such as art, music, storytelling, and outdoor play, we create an enriching atmosphere where your child feels safe, valued, and excited to explore. Join us in making your child’s first steps in education joyful and memorable!",
    authorImg: author_1,
    authorName: "Alexia Honix",
    price: 195.0,
    age: "2 - 3 Yrs",
    programs: [
      {
        id: 1,
        title: "2 - 3 Yrs",
        subTitle: "age",
      },
      {
        id: 2,
        title: "5 Days",
        subTitle: "weekly",
      },
      {
        id: 3,
        title: "5 Hrs",
        subTitle: "period",
      },
    ],
  },

  {
    id: 3,
    title: "Nursery",
    img: program_4,
    image1: "nursery1_11zon_db1xpk",
    image2: "nursery2_11zon_bl4ioj",
    description:
      "Our Nursery program is thoughtfully designed for children aged 3 to 4 years, providing a stimulating environment where young learners thrive.",
    icon: <ProgramIconFour />,
    clrClass: "clr-4",
    age: "3 - 4 Yrs",
    delay: ".5s",
    authorImg: author_1,
    authorName: "Alexia Honix",
    price: 140.0,
    desc1:
      "Our Nursery program is thoughtfully designed for children aged 3 to 4 years, providing a stimulating environment where young learners thrive. Guided by the Montessori approach, we focus on developing independence, confidence, and critical thinking through hands-on activities and purposeful play. Your child will explore a variety of engaging materials that spark their curiosity and foster a lifelong love of learning.",
    desc2:
      "Through group activities, art, music, and outdoor adventures, children develop social skills, self-expression, and a sense of community. Let’s embark on this exciting journey together to nurture your child’s growth and potential!",
    programs: [
      {
        id: 1,
        title: "3 - 4 Yrs",
        subTitle: "age",
      },
      {
        id: 2,
        title: "5 Days",
        subTitle: "weekly",
      },
      {
        id: 3,
        title: "5 Hrs",
        subTitle: "period",
      },
    ],
  },
  {
    id: 4,
    title: "LKG",
    img: program_5,
    description:
      "Our Junior KG program, tailored for children aged 4 to 5 years, bridges early learning with structured academics in a joyful, Montessori-inspired environment.",
    icon: <ProgramIconFive />,
    clrClass: "clr-5",
    delay: ".6s",
    authorImg: author_1,
    image1: "lkg-2_zsgmqi",
    image2: "lkg-1_11zon_to3cvx",
    authorName: "Alexia Honix",
    price: 150.0,
    desc1:
      "Our Junior KG program, tailored for children aged 4 to 5 years, bridges early learning with structured academics in a joyful, Montessori-inspired environment. This stage focuses on enhancing foundational skills in literacy, numeracy, and critical thinking while nurturing creativity and individuality. With hands-on materials and guided exploration, children build confidence and curiosity to prepare for their next academic milestones.",
    desc2:
      "In Junior KG, we emphasize holistic development by blending academics with activities like art, music, storytelling, and group play. Children develop essential social and emotional skills, along with the ability to work independently and collaboratively.",
    age: "4 - 5 Yrs",
    programs: [
      {
        id: 1,
        title: "4 - 5 Yrs",
        subTitle: "age",
      },
      {
        id: 2,
        title: "5 Days",
        subTitle: "weekly",
      },
      {
        id: 3,
        title: "5 Hrs",
        subTitle: "period",
      },
    ],
  },
  {
    id: 5,
    title: "UKG",
    img: program_6,
    description:
      "Our Senior KG program, designed for children aged 5 to 6 years, provides a dynamic and engaging environment to prepare young learners for primary school.",
    icon: <ProgramIconSix />,
    clrClass: "clr-6",
    delay: ".7s",
    authorImg: author_1,
    authorName: "Alexia Honix",
    image1: "ukg-2_11zon_ymsfzs",
    image2: "ukg-1_11zon_qevn1k",
    desc1:
      "Our Senior KG program, designed for children aged 5 to 6 years, provides a dynamic and engaging environment to prepare young learners for primary school. Grounded in the Montessori philosophy, the program focuses on refining academic skills in literacy, numeracy, and problem-solving while encouraging creativity, independence, and a love for learning.",
    desc2:
      "Children are guided through advanced concepts and school-level preparation, ensuring they are ready for the structured learning environment of primary education. Our program integrates interactive activities, collaborative projects, and hands-on experiences to build a strong academic foundation.",
    price: 170.0,
    age: "5 - 6 Yrs",
    programs: [
      {
        id: 1,
        title: "5 - 6 Yrs",
        subTitle: "age",
      },
      {
        id: 2,
        title: "5 Days",
        subTitle: "weekly",
      },
      {
        id: 3,
        title: "5 Hrs",
        subTitle: "period",
      },
    ],
  },
];

export default program_data;
