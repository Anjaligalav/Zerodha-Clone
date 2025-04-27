import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
    return ( 
        <div className='container text-center' style={{marginTop:'1rem'}}>
            <h1 className='mt-5'>Open a Zerodha account</h1>
            <p className='mb-5 fs-5 text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <Link 
  to="/signup" 
  className="btn btn-primary btn-lg mb-5"
>
  Sign up
</Link>
        </div>
     );
}

export default OpenAccount;