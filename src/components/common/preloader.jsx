import { CldImage } from "next-cloudinary";

const Preloader = () => {
  return (
    <div id="loading">
      <div id="preloader">
        <div className="preloader-thumb-wrap">
          <div className="preloader-thumb">
            <div className="preloader-border"></div>
            <CldImage
              src="logo-removebg_1_vbmtmz"
              width={250}
              height={100}
              alt="Melon Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
