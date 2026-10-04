import React from "react";

const CopyrightTwo = () => {
  return (
    <div className="bd-footer-copyright pb-5 pt-25">
      <div className="bd-footer-copyright-wrap d-flex justify-content-center">
        <div className="bd-footer-copyright-text is-white pb-20">
          <p>
            Developed by -{" "}
            <a href="https://viztechsolutions.com.np/" rel="nofollow">
              VizTech Solutions
            </a>{" "}
            &copy;{new Date().getFullYear()}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CopyrightTwo;
