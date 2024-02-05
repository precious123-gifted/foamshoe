'use client'
import React from 'react';
import { Kalam } from 'next/font/google';
import { Kufam } from 'next/font/google';
import { OrbitControls } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import { Suspense } from "react";
import {Model} from '../app/Shoe'
import { CameraHelperProps } from '@react-three/fiber';

const kufam = Kufam({subsets: ["latin"]})
export default function Header() {
  return (
    <div  style={kufam.style} className='w-screen overflow-visible landscape:mt-[2vw] landscape:h-[39.3vw] portrait:h-[125vw] portrait:sm:h-[75vw] text-[#031F1F]  flex flex-row items-center justify-center'>
    <div className="content w-[95%] h-full   flex flex-col justify-between">
<div className="section1 flex flex-row justify-between w-full landscape:h-[70%] portrait:h-[60%] portrait:sm:h-[65%]   text-[1.3vw]">
<div className='portrait:hidden div1 flex flex-col justify-between   w-[45%]'>
<div className="box1   h-[45%] flex flex-row items-center justify-center bg-[#DAE5E5] rounded-[0.4vw]"><div className="writeup   h-full w-[97%] grid place-content-center">
Unleash Your Ultimate Stride with Our
Cutting-Edge Shoes! Elevate Your Performance,
Embrace Comfort, and Conquer Every Run.
Engineered for Precision and Style,</div></div>
<div className="box2   h-[45%] flex flex-row justify-between items-end"><div className="writeup rounded-[0.4vw] bg-[#C7EAEA]  h-full w-[75%] flex flex-row items-center justify-center"><div className="text w-[97%] h-full grid place-content-center">
  
Our Shoes Redefine Jogging
Excellence. Step Into the Future of
Fitness. Order Yours Now and
Experience the Power of Purpose
Built Footwear
  
  </div></div><div className="button h-[4vw] w-[8vw]  grid place-content-center rounded-[0.7vw] bg-[#8C6247] cursor-pointer text-[1.5vw]">BUY</div></div>

</div>
<div className='div2 landscape:w-[45%] h-full portrait:w-full  '>
<div className="image  h-full w-full ">
<Canvas style={{overflow:'visible',margin:0}}

camera={{position:[9,7,30]}} className='h-full w-full overflow-visible'>
        <Suspense fallback={null}>
        <OrbitControls enableZoom={false}/>
<ambientLight intensity={0.5} />
<directionalLight position={[-2,5,2]} intensity={1.3} />
<pointLight position={[-5, 20, 10]} />
<Model/>
</Suspense>

      </Canvas>

</div>

</div>

</div>
<div className="section2 landscape:h-[20%]   portrait:h-[37%] mb-[0.5vw] w-full  flex flex-col items-center justify-between">
<div className="writeup grid place-content-center w-full bg-[#DAE5E5] rounded-[0.4vw] landscape:h-full portrait:h-[70%] portrait:sm:h-[55%] landscape:text-[1.7vw] portrait:text-[6vw] portrait:sm:text-[4vw] portrait:text-center">

Feel Like a God on the Run:
Elevate Your Stride with Our Supreme Jugging Shoes

</div>

<div className="landscape:hidden button cursor-pointer  h-[9vw] w-[25vw] text-[5.4vw] 
rounded-[0.7vw] bg-[#8C6247]  portrait:sm:text-[3.4vw] grid place-content-center">
BUY
</div>


</div>



    </div>


    </div>
  );
}
