import React from 'react';

function Pricing() {
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <diiv className="col-4">
                    <h1 className='mb-3'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='google.com' style={{textDecoration:'None'}}>See pricing<i class="fa-solid fa-arrow-right"></i></a>
                </diiv>

                <diiv className="col-2"></diiv>
                
                <diiv className="col-6">
                    <div className='row text-center'>
                        <div className='col p-5 border'>
                            <h1 className='mb-4'>₹0</h1>
                            <p>Free equity delivery and <br/> direct mutual funds</p>
                        </div>
                        <div className='col p-5 border'>
                        <h1 className='mb-4'>₹20</h1>
                        <p>Intraday and F&O</p>
                        </div>
                    </div>
                </diiv>
            </div>
        </div>
     );
}

export default Pricing;