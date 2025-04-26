import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container p-5 mt-2">
      <div
        className="row"
        style={{ alignItems: "center", marginLeft: "100px" }}
      >
        <div className="col-6">
          <img src={imageUrl} alt="productkite" style={{ width: "100%" }} />
        </div>
        <div className="col-1"></div>

        <div className="col-4">
          <h1>{productName}</h1>
          <p className="mb-3 mt-5 text-muted">{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "None" }}>
              Try demo<i class="fa-solid fa-arrow-right"></i>
            </a>
            <a
              href={learnMore}
              style={{ textDecoration: "None", marginLeft: "60px" }}
            >
              Learn more<i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media/images/google-play-badge.svg" alt="googleplay" />
            </a>
            <a href={appStore} style={{ marginLeft: "20px" }}>
              <img src="media/images/appstore-badge.svg" alt="playstore" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
