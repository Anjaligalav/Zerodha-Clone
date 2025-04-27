import React from 'react';
import { Link } from 'react-router-dom';

function Universe() {
    return (  
        <div className='container text-center' style={{padding:'5rem'}}>
            <div className='row p-5'>
                <p className='fs-5'>Want to know more about our technology stack? Check out the <a href='https://zerodha.tech/' style={{textDecoration:'none'}}>Zerodha.tech</a> blog.</p>
            </div>
            <h1 className='mt-45' style={{fontSize:'2.1rem'}}>The Zerodha Universe</h1>
            <p className='mt-4 fs-5 text-muted'>Extend your trading and investment experience even further with our partner platforms</p>
            
            <div className='row' style={{marginTop:'3rem'}}>
                <div className='col-4 pr-5 pl-5'>
                    <img className='product-universe' style={{width:'60%'}} src='media/images/smallcase-logo.png' alt='smallcasepng'/>
                    <p className='fs-6'>Thematic investment platform</p>
                </div>
                <div className='col-4 pr-5 pl-5'>
                    <img className='product-universe' style={{width:'50%'}} src='media/images/streak-logo.png' alt='streak'/>
                    <p className='fs-6'>Algo & strategy platform</p>
                </div>
                <div className='col-4 pr-5 pl-5'>
                    <img className='product-universe' style={{width:'50%'}} src='media/images/sensibull-logo.svg' alt='sensibull'/>
                    <p className='fs-6'>Options trading platform</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <img className='product-universe' style={{width:'50%'}} src='media/images/zerodhafundhouse.png' alt='zerodha'/>
                    <p className='fs-6'>Asset management</p>
                </div>
                <div className='col-4'>
                    <img className='product-universe' src='media/images/tijori.svg' alt='tijori'/>
                    <p className='fs-6'>Fundamental research platform</p>
                </div>
                <div className='col-4'>
                    <img className='product-universe' src='media/images/ditto-logo.png' alt='ditto'/>
                    <p className='fs-6'>Insurance</p>
                </div>
            </div>
            <Link 
                          to="/signup" 
                          className="btn btn-primary btn-lg mb-5"
                        >
                          Sign up
                        </Link>
        </div>
    );
}

export default Universe;