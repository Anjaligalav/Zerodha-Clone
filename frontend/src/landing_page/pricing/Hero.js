import React from 'react';

function Hero() {
    return ( 
        <div className='container text-center p-4'>
            <div className='row p-5'>
                <h1 className='text-muted' style={{fontSize:'3rem'}}>Pricing</h1>
                <p className='text-muted fs-4' style={{marginBottom:"5rem"}}>Free equity investments and flat ₹20 intraday and F&O trades</p>
            </div>
            <hr/>
            <div className='row p-5 mb-5 text-center'>
                <div className='col-4'>
                    <img src='media/images/pricing-Zero.svg' alt='Zeroimg'/>
                    <h3>Free equity delivery</h3>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4'>
                <img src='media/images/other-trades.svg' alt='twentyimg'/>
                <h3>Intraday and F&O trades</h3>
                <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4'>
                <img src='media/images/pricing-Zero.svg' alt='Zeroimg'/>
                <h3>Free direct MF</h3>
                <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
            <hr/>
        </div>
     );
}

export default Hero;