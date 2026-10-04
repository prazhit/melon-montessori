import Link from "next/link";
import React from "react";
import ClassCat from "./class-cat";
import ClassDetailsWidget from "./class-details-widget";
import ClassTimeTable from "./class-time-table";
import ClassDetailsWidgetTwo from "./class-details-widget-two";
import Image from "next/image";
import class_img from "@assets/img/class/6.jpg";
import author_img from "@assets/img/program/author-1.png";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import { CldImage } from "next-cloudinary";
import program_img from "@assets/img/program/details-1.jpg";

const ClassDetailsArea = ({ item }) => {
  return (
    <>
      <Breadcrumb title="Class Details" subTitle="Class Details" />
      <section className="bd-class-details-widget pt-120 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12 ">
              <div
                className="bd-class-details-thumb p-relative wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                {item?.twoImages ? (
                  <>
                    {" "}
                    <CldImage
                      width={300}
                      height={500}
                      src={item.image1}
                      alt="img not found"
                      style={{
                        width: "49%",
                        height: "100%",
                        marginRight: "2%",
                      }}
                    />
                    <CldImage
                      width={300}
                      height={500}
                      src={item.image2}
                      alt="img not found"
                      style={{ width: "49%", height: "100%" }}
                    />{" "}
                  </>
                ) : item?.image1 ? (
                  <CldImage
                    width={600}
                    height={200}
                    src={item?.image1 || program_img}
                    alt="img not found"
                  />
                ) : (
                  <Image
                    src={item?.img ? item?.img : program_img}
                    style={{ width: "100%", height: "100%" }}
                    alt="img not found"
                  />
                )}
                <div className="panel wow"></div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 mb-50">
              <div
                className="bd-class-details-widget-content theme-bg-6 wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <h3 className="bd-class-details-widget-title mb-20">
                  {item.title}
                </h3>
                <p className="mb-25">
                  {item?.para1 ? item?.para1 : item?.teaser}
                </p>

                <p className="mb-25">
                  {item?.para2
                    ? item?.para2
                    : "Our class is designed to help children explore their creativity and develop their skills in a fun and engaging environment."}
                </p>
                {/* <div className="bd-class-details-author-wrapper mt-35">
                                    <div className="bd-class-details-author">
                                        <div className="bd-class-details-author-thumb"><Image src={item?.authorImg ? item?.authorImg :  author_img} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                        </div>
                                        <div className="bd-class-details-author-name">
                                            <span>Class Teacher</span>
                                            <h5><Link href="/teachers">{item?.authorName ? item?.authorName :  'Alexia Honix'}</Link></h5>
                                        </div>
                                    </div>
                                    <div className="bd-class-details-cat">
                                        <span>Categories</span>
                                        <h5>Kindergarten</h5>
                                    </div>
                                    <div className="bd-class-details-cat">
                                        <span>Per/Month</span>
                                        <h5>${item?.price}</h5>
                                    </div>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClassCat />

      <ClassDetailsWidget item={item} />

      {/* <ClassTimeTable /> */}

      {/* <ClassDetailsWidgetTwo /> */}
    </>
  );
};

export default ClassDetailsArea;
