import React from 'react';
import Hero from './Hero';
import Awards from "./Awards"
import States from "./States";
import Education from "./Education";
import Pricing from './Pricing';
import OpenAccount from '../OpenAccount';


function HomePage() {
    return ( 
        <>
            
            <Hero />
            <Awards/>
            <States/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
            
        </>
        
    );
}

export default HomePage;