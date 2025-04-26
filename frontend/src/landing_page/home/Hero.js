import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 text-center'>
            <div className='row'>
                <img src='media/images/homeHero.png' alt='HeroImage' className='mb-5'/>
            </div>
            <h1 className='mt-5'>Invest in everything</h1>
            <p className='mb-5 fs-5 text-muted'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
            <button className='btn btn-primary btn-lg mb-4'>Sign up now</button>
        </div>
     );
}

export default Hero;