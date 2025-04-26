import React from "react";

function RightSection({imageUrl, productName, productDescription, learnMore}) {
  return (
    <div className="container p-5 mt-2">
      <div
        className="row"
        style={{ alignItems: "center", marginLeft: "100px" }}
      >
        <div className="col-4">
          <h1>{productName}</h1>
          <p className="mb-3 mt-5 text-muted">{productDescription}</p>
          <div>
            <a
              href={learnMore}
              style={{ textDecoration: "None", marginLeft: "60px" }}
            >
              Learn more<i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <img src={imageUrl} alt="productkite" style={{ width: "100%" }} />
        </div>
        
      </div>
    </div>
  );
}

export default RightSection;
