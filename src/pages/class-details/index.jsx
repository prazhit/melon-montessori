import HomeBanner from "@components/banners/home-banner";
import ClassDetailsArea from "@components/classes/class-details-page/class-details-area";
import MoreProgrammers from "@components/classes/class-details-page/more-programmers";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import SEO from "@components/seo";
import class_data from "@data/class-data";
import Footer from "@layout/footers/footer";
import HeaderTwo from "@layout/headers/headerTwo";
import { Wrapper } from "@layout/index";

export default function ClassDetails() {
  const item = class_data[0];
  return (
    <Wrapper>
      <SEO pageTitle={"Class Details"} />
      <HeaderTwo />
      <ClassDetailsArea item={item} />
      <HomeBanner />
      <MoreProgrammers />
      <HomeNewsletter />
      <Footer />
    </Wrapper>
  );
}
