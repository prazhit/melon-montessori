import Link from "next/link";
import React from "react";
import Image from "next/image";
import program_img from "@assets/img/program/details-1.jpg";
import { CldImage } from "next-cloudinary";

const ClassDetailsWidget = ({ item }) => {
  return (
    <section className="bd-program-details-widget pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-50">
            <div
              className="bd-program-details-widget-content theme-bg-6 wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <h3 className="bd-program-details-widget-title mb-20">
                Way to Learn
              </h3>
              <p className="mb-25">
                {item?.para3
                  ? item.para3
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
              </p>
              <p className="mb-25">
                {item?.para4
                  ? item.para4
                  : "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
              </p>
              <div className="bd-program-details-btn">
                <Link href="/about" className="bd-btn">
                  <span className="bd-btn-inner">
                    <span className="bd-btn-normal">Know More</span>
                    <span className="bd-btn-hover">Know More</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-50">
            <div
              className="bd-program-details-slider p-relative wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div className="bd-program-details-slider-thumb p-relative">
                {item?.twoImages ? (
                  <>
                    <CldImage
                      width={300}
                      height={500}
                      src={item.image3}
                      alt="img not found"
                      style={{
                        width: "49%",
                        height: "77%",
                        marginRight: "2%",
                      }}
                    />
                    <CldImage
                      width={300}
                      height={500}
                      src={item.image4}
                      alt="img not found"
                      style={{ width: "49%", height: "77%" }}
                    />
                  </>
                ) : (
                  <CldImage
                    width={600}
                    height={300}
                    src={item.image2}
                    alt="img not found"
                    style={{ width: "100%", height: "100%" }}
                  />
                )}
                <div className="panel-2 wow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassDetailsWidget;
