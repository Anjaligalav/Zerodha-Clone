import React from 'react';

function Awards() {
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/largest-broker.svg' alt='award' style={{width:'90%'}}/>
                </div>
                <div className='col-6'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5 mt-5 text-muted'>1.5+ Crore Zerodha clients contribute to over 15% of 
                        all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className='col-6 mb-3'>
                            <ul>
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                        <img src='media/images/press-logos.png' alt='press-logos'/>
                    </div>
                    
                </div>
            </div>

        </div>
     );
}

export default Awards;