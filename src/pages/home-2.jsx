import promoImgTwo from "@assets/img/promotion/2.png";
import HomeAbout from "@components/abouts/home-about";
import HomeBanner from "@components/banners/home-banner";
import HomeTwoClass from "@components/classes/home-two-class";
import HomeTwoGallary from "@components/gallary/home-two-gallary";
import HomeTwoHero from "@components/heros/home-two-hero";
import HomeTwoProgram from "@components/programs/home-two-program";
import HomePromotion from "@components/promotions/home-promotion";
import SEO from "@components/seo";
import HomeTwoTeacher from "@components/teachers/home-two-teacher";
import HomeTwoTestimonial from "@components/testimonials/home-two-testimonial";
import FooterTwo from "@layout/footers/footerTwo";
import HeaderTwo from "@layout/headers/headerTwo";
import { Wrapper } from "@layout/index";

export default function HomeTwo() {
  return (
    <Wrapper>
      <SEO pageTitle={"Home"} />
      <HeaderTwo />
      <HomeTwoHero />
      <HomeTwoClass />
      <HomePromotion promoImg={promoImgTwo} />
      <HomeTwoProgram />
      <HomeAbout />
      <HomeTwoTeacher />
      <HomeTwoTestimonial />
      <HomeBanner />
      <HomeTwoGallary />
      <FooterTwo />
    </Wrapper>
  );
}
