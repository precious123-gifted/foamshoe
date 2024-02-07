import React from 'react';
import Navigation from './navigation';
import Header from './header';
import About from './about';
import ProductSection from './productSection';


export default function HomePage() {
  return (
    <div className='bg-[#0A4D4D]'>
    <Navigation/>
    <Header/>
    <About/>
    <ProductSection/>
    </div>
  );
}
