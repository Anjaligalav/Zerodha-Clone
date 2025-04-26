import React from "react";

function Team() {
  return (
    <div className="container p-0">
      <div className="row"><h1 className="text-center fs-2 mb-0">People</h1></div>
      <div className="row text-muted" style={{padding:'5rem',margin:'0 3 0 3'}}>
        <div className="col-6 text-center ">
          <img
            src="media/images/nithin-kamath.jpg"
            alt="peopleimg"
            style={{ borderRadius: "50%",width:'50%'}}
          />
          <h5 className="mt-3">Nithin Kamath</h5>
          <p>Founder CEO</p>
        </div>
        <div className="col-6">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
