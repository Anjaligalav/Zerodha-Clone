import React from "react";

function Hero() {
  return (
    <section className="container-fluid p-5" id="supportHero">
      <div id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>

      <div className="row mx-5">
        <div className="col-6 p-5">
          <h4 className="mb-5">Search for an answer or browse help topics to create a ticket</h4>
          <input
            placeholder="Eg:how do i activate F&O,why is my order getting rejected..."
            style={{
              border: "none",
              borderRadius: "0.1rem",
              padding: "1.2rem",
              width: "35rem",
            }}
          /><br/>
          <a href="">Track account opening</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="">Track segment activation</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="">Intraday margins </a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-6 p-5">
          <h4 className="mt-5">Featured</h4>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - June 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages and Square-off timings</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
