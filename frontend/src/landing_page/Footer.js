import React from "react";

function Footer() {
  return (
    <div className="container border-top p-5 bg-light">
      <div className="row">
        <div className="col-3">
          <img
            src="media/images/logo.svg"
            alt="logo"
            style={{ width: "50%" }}
          />
          <p className="mt-3 text-muted">
            © 2010 - 2024, Zerodha Broking Ltd.
            <br />
            All rights reserved
          </p>
          <div className="mt-3">
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin-in"></i>
          </div>
          <hr />
          <span>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-whatsapp"></i>
            <i class="fa-brands fa-telegram"></i>
          </span>
        </div>
        <div className="col-3">
          <p>Company</p>
          <a className="footer-a" href="">About</a>
          <br />
          <a className="footer-a" href="">Products</a>
          <br />
          <a className="footer-a" href="">Pricing</a>
          <br />
          <a className="footer-a" href="">Referral programme</a>
          <br />
          <a className="footer-a" href="">Careers</a>
          <br />
          <a className="footer-a" href="">Zerodha.tech</a>
          <br />
          <a className="footer-a" href="">Press & media</a>
          <br />
          <a className="footer-a" href="">Press & media</a>
          <br />
        </div>
        <div className="col-3">
          <p>Support</p>
          <a className="footer-a" href="">Contact us</a>
          <br />
          <a className="footer-a" href="">Support portal</a>
          <br />
          <a className="footer-a" href="">Z-Connect blog</a>
          <br />
          <a className="footer-a" href="">List of charges</a>
          <br />
          <a className="footer-a" href="">Downloads & resources </a>
          <br />
          <a className="footer-a" href="">Videos</a>
          <br />
          <a className="footer-a" href="">Market overview</a>
          <br />
          <a className="footer-a" href="">How to file a complaint?</a>
          <br />
          <a className="footer-a" href="">Status of your complaints</a>
          <br />
        </div>
        <div className="col-3">
          <p>Account</p>
          <a className="footer-a" href="">Open an account</a>
          <br />
          <a className="footer-a" href="">Fund transfer</a>
          <br />
        </div>
      </div>
      <div className="text-muted mt-5" style={{fontSize:'12px'}}>
      <p>
        Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
        no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking
        Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through
        Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration
        no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154,
        4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
        Phase, Bengaluru - 560078, Karnataka, India. For any complaints
        pertaining to securities broking please write to complaints@zerodha.com,
        for DP related to dp@zerodha.com. Please ensure you carefully read the
        Risk Disclosure Document as prescribed by SEBI | ICF
      </p>

      <p>
        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
        Mandatory details for filing complaints on SCORES: Name, PAN, Address,
        Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy
        redressal of the grievances
      </p>

      <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

      <p>
        Investments in securities market are subject to market risks; read all
        the related documents carefully before investing.
      </p>

      <p>
        Attention investors: 1) Stock brokers can accept securities as margins
        from clients only by way of pledge in the depository system w.e.f
        September 01, 2020. 2) Update your e-mail and phone number with your
        stock broker / depository participant and receive OTP directly from
        depository on your e-mail and/or mobile number to create pledge. 3)
        Check your securities / MF / bonds in the consolidated account statement
        issued by NSDL/CDSL every month.
      </p>

      <p>
        "Prevent unauthorised transactions in your account. Update your mobile
        numbers/email IDs with your stock brokers. Receive information of your
        transactions directly from Exchange on your mobile/email at the end of
        the day. Issued in the interest of investors. KYC is one time exercise
        while dealing in securities markets - once KYC is done through a SEBI
        registered intermediary (broker, DP, Mutual Fund etc.), you need not
        undergo the same process again when you approach another intermediary."
        Dear Investor, if you are subscribing to an IPO, there is no need to
        issue a cheque. Please write the Bank account number and sign the IPO
        application form to authorize your bank to make payment in case of
        allotment. In case of non allotment the funds will remain in your bank
        account. As a business we don't give stock tips, and have not authorized
        anyone to trade on behalf of others. If you find anyone claiming to be
        part of Zerodha and offering such services, please create a ticket here.
      </p>
      </div>
    </div>
  );
}

export default Footer;
