import React from "react";
import Image from "next/image";
import shape from "@assets/img/shape/wave-section-break.png";

const features = [
  {
    id: 1,
    title: "Child Friendly",
    teaser:
      "We provide a safe, nurturing, and stimulating environment that helps children develop to their fullest potential.",
    iconStyle: "icon-1",
    icon: "flaticon-swing",
  },
  {
    id: 2,
    title: "Well-Trained Teachers",
    teaser:
      "Our well-trained teachers are dedicated to helping each child discover their unique potential.",
    iconStyle: "icon-2",
    icon: "flaticon-teacher",
  },
  {
    id: 3,
    title: "Parents Colloboration",
    teaser:
      "We believe in colloborative approach with parents to ensure the best possible outcomes for your child.",
    iconStyle: "icon-3",
    icon: "flaticon-friends",
  },
  {
    id: 4,
    title: "Overall Development",
    teaser:
      "Our play-based curriculum and various ECA activities, promotes the overall development of your child.",
    iconStyle: "icon-4",
    icon: "flaticon-color-palette",
  },
];

const HomeThreeFeature = ({ wave }) => {
  return (
    <div className="bd-feature-area p-relative theme-bg pt-120 pb-120">
      {wave && (
        <div className="bd-feature-bottom-shape">
          <Image
            src={shape}
            style={{ width: "100%", height: "100%" }}
            alt="img not found"
          />
        </div>
      )}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div
              className="bd-section-title-wrapper is-white text-center mb-55 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <h2 className="bd-section-title mb-0">Why Choose Melon ?</h2>
              <p>
                Our programs are designed to help children grow and learn in a
                safe, playful, and nurturing environment. We offer a variety of
                programs and activities promoting social and physical
                development of the child.
              </p>
            </div>
          </div>
        </div>
        <div
          className="bd-feature-wrapper wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay=".4s"
        >
          <div className="row">
            <div className="col-12">
              <ul className="feature">
                {features.map((item) => (
                  <li className="feature-item" key={item.id}>
                    <div className="bd-feature">
                      <div className="bd-feature-content">
                        <div className={`bd-feature-icon ${item.iconStyle}`}>
                          <i className={item.icon}></i>
                        </div>
                        <h4 className="bd-feature-title">{item.title}</h4>
                        <p>{item.teaser}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeThreeFeature;
