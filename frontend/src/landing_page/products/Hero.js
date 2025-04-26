import React from 'react';

function Hero() {
    return ( 
        <div className='container text-center border-bottom p-5'>
            <h1 className='mt-5'>Technology</h1>
            <p className='mb-4 fs-5 text-muted'>Sleek, modern, and intuitive trading platforms</p>
            <p className='mb-5'>Check out our <a href='google.com' style={{textDecoration:'none'}}>investment offerings →</a></p>
        </div>
     );
}

export default Hero;