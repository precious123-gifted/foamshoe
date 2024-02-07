import React from 'react';
import { OrbitControls } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import { Suspense } from "react";
import {Model} from '../app/Shoe'

export default function ProductSection() {
  return (
    <div className='bg-[#996B4D] w-screen landscape:h-screen portrait:h-[100vw] portrait:sm:h-[90vw] flex flex-row justify-center'>
    <div className="content w-[95%] h-full flex flex-row ">

<div className="section1 w-[50%] h-full flex flex-col items-center">

    <div className="model w-full h-[80%]">
    <Canvas 

camera={{position:[9,7,30]}} className=' w-full overflow-visible'>
        <Suspense fallback={null}>
        <OrbitControls enableZoom={false}/>
<ambientLight intensity={0.5} />
<directionalLight position={[-2,5,2]} intensity={1.3} />
<pointLight position={[-5, 20, 10]} />
<Model/>
</Suspense>

      </Canvas>
    </div>
    <div className="buttons  flex flex-row w-[40%] justify-between">
<div className="b1 bg-[#0A4D4D] cursor-pointer h-[4vw] w-[4vw] rounded-[0.5vw]"></div>
<div className="b2 bg-[#183333] cursor-pointer h-[4vw] w-[4vw] rounded-[0.5vw]"></div>
<div className="b3 bg-[#E3FFFF] cursor-pointer h-[4vw] w-[4vw] rounded-[0.5vw]"></div>
    </div>

</div>

<div className="landscape:bg-[#EFD7C7] section2  w-[50%] h-full flex flex-row justify-center items-end text-[#084242]">
<div className="content  w-[90%] h-[85%]">
<div className="header text-[1.8vw] portrait:text-[6vw] portrait:sm:text-[4.5vw] mb-[4vw]">Foam Shoe1</div>
<div className="description text-[1.5vw] portrait:text-[3vw] portrait:sm:text-[3vw] mb-[4vw] ">Descrption goes here for now i dontknow what to say, so i will just leave it like this for now.</div>
<div className="prize text-[1.5vw] portrait:text-[4.5vw] portrait:sm:text-[4vw] mb-[4vw] ">$90.00</div>
<div className="button h-[4vw] w-[8vw]  grid place-content-center rounded-[0.7vw] bg-[#8C6247] cursor-pointer text-[1.5vw]">Add to Cart</div>
</div>
</div>

    </div>
    </div>
  );
}
