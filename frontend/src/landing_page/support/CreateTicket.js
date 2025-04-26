import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container'>
            <div className='row'>
                <p style={{marginBottom:'1rem',marginLeft:'1.5rem',fontSize:'2rem'}}>To create a ticket, select a relevant topic</p>
                <div className='col-4 p-5'>
                    <h4 style={{fontWeight:'normal'}}><i class="fa-solid fa-circle-plus"></i>&nbsp;&nbsp;Account Opening</h4>
                    <a className="support-ticket-a" href="">Getting started</a>
                    <br />
                    <a className="support-ticket-a" href="">Online</a>
                    <br />
                    <a className="support-ticket-a" href="">Offline</a>
                    <br />
                    <a className="support-ticket-a" href="">Charges</a>
                    <br />
                    <a className="support-ticket-a" href="">Company, Partnership and HUF </a>
                    <br />
                    <a className="support-ticket-a" href="">Non Resident Indian (NRI)</a>
                    <br />
                </div>

                <div className='col-4 p-5'>
                <h4 style={{fontWeight:'normal'}}> <i class="fa-regular fa-user"></i>&nbsp;&nbsp;Your Zerodha Account</h4>
                <a className="support-ticket-a" href="">Login credentials</a>
                <br />
                <a className="support-ticket-a" href="">Your Profile</a>
                <br />
                <a className="support-ticket-a" href="">Account modification and segment addition</a>
                <br />
                <a className="support-ticket-a" href="">CMR & DP ID</a>
                <br />
                <a className="support-ticket-a" href="">Nomination </a>
                <br />
                <a className="support-ticket-a" href="">Transfer and conversion of shares</a>
                <br />
                </div>

                <div className='col-4 p-5'>
                <h4 style={{fontWeight:'normal'}}><i class="fa-solid fa-money-bill-trend-up"></i>&nbsp;&nbsp;Trading and Markets</h4>
                <a className="support-ticket-a" href="">Trading FAQs</a>
                <br />
                <a className="support-ticket-a" href="">Kite</a>
                <br />
                <a className="support-ticket-a" href="">Margins</a>
                <br />
                <a className="support-ticket-a" href="">Product and order types</a>
                <br />
                <a className="support-ticket-a" href="">Corporate actions </a>
                <br />
                <a className="support-ticket-a" href="">Kite features</a>
                <br />
                </div>
            </div>

            <div className='row mb-5'>
                <div className='col-4 p-5'>
                    <h4 style={{fontWeight:'normal'}}><i class="fa-solid fa-box"></i>&nbsp;&nbsp;Funds</h4>
                    <a className="support-ticket-a" href="">Fund withdrawal</a>
                    <br />
                    <a className="support-ticket-a" href="">Adding funds</a>
                    <br />
                    <a className="support-ticket-a" href="">Adding bank accounts</a>
                    <br />
                    <a className="support-ticket-a" href="">eMandates</a>
                    <br />
                </div>

                <div className='col-4 p-5'>
                <h4 style={{fontWeight:'normal'}}> <i class="fa-solid fa-record-vinyl"></i>&nbsp;&nbsp;Console</h4>
                <a className="support-ticket-a" href="">IPO</a>
                <br />
                <a className="support-ticket-a" href="">Portfolio</a>
                <br />
                <a className="support-ticket-a" href="">Funds statement</a>
                <br />
                <a className="support-ticket-a" href="">Profile</a>
                <br />
                <a className="support-ticket-a" href="">Reports </a>
                <br />
                <a className="support-ticket-a" href="">Referral program</a>
                <br />
                </div>

                <div className='col-4 p-5'>
                <h4 style={{fontWeight:'normal'}}><i class="fa-solid fa-coins"></i>&nbsp;&nbsp;Coin</h4>
                <a className="support-ticket-a" href="">Understanding mutual funds and Coin</a>
                <br />
                <a className="support-ticket-a" href="">Coin app</a>
                <br />
                <a className="support-ticket-a" href="">Coin web</a>
                <br />
                <a className="support-ticket-a" href="">Transactions and reports</a>
                <br />
                <a className="support-ticket-a" href="">National Pension Scheme (NPS) </a>
                <br />
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;