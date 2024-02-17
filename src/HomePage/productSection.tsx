import React, { ReactHTML, ReactHTMLElement, useRef } from 'react';
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import { Suspense } from "react";
import {Model} from '../app/Shoe'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
 gsap.registerPlugin(ScrollTrigger)


export default function ProductSection() {

  const productSectionDiv  = useRef<HTMLDivElement>(null)

 useGSAP(()=>{
  gsap.from(productSectionDiv.current, {
    scrollTrigger: {
      trigger: productSectionDiv.current,
      start: 'top top',
      scrub: true,
      pin:true,
      pinSpacing:false,
      snap:1,
    },
  });
}, []);



//  ScrollTrigger.create({
//   trigger: productSectionDiv.current,
//   start: "top center",
//   toggleActions: "restart none none none",
// });






 

  return (
    <div ref={productSectionDiv} className='bg-[#996B4D]  w-screen landscape:h-[48vw] portrait:h-[130vw] portrait:sm:h-[125vw] flex flex-row justify-center portrait:pb-[10vw]'>
    <div className="content w-[95%] h-full flex landscape:flex-row portrait:flex-col-reverse ">

<div className="section1 landscape:w-[50%] portrait:w-full h-full portrait:h-[70%] flex flex-col items-center">

    <div className="model w-full h-[80%] ">
    <Canvas 

camera={{position:[9,7,30]}} className=' w-full overflow-visible'>
        <Suspense fallback={null}>
        <OrbitControls enableZoom={false}/>
<ambientLight intensity={0.5} />
<directionalLight position={[-2,5,2]} intensity={1.3} />
<pointLight position={[-5, 20, 10]} />
<Model/>
{/* <Environment preset='city'/>  */}
</Suspense>

      </Canvas>
    </div>
    <div className="buttons  flex flex-row w-[40%] justify-between mb-[7vw]">
<div className="b1 bg-[#0A4D4D] cursor-pointer h-[4vw] w-[4vw] portrait:h-[9vw] portrait:w-[9vw] portrait:rounded-[0.8vw] rounded-[0.5vw]"></div>
<div className="b2 bg-[#183333] cursor-pointer h-[4vw] w-[4vw] portrait:h-[9vw] portrait:w-[9vw] portrait:rounded-[0.8vw] rounded-[0.5vw]"></div>
<div className="b3 bg-[#DCFFFE] cursor-pointer h-[4vw] w-[4vw] portrait:h-[9vw] portrait:w-[9vw] portrait:rounded-[0.8vw] rounded-[0.5vw]"></div>
    </div>

    <div className="landscape:hidden button cursor-pointer  h-[9vw] portrait:w-[35vw] portrait:sm:w-[30vw] text-[5vw]  rounded-[1.7vw] bg-[#262422] text-[#EBCCB8] portrait:sm:text-[4.2vw] grid place-content-center">Add to Cart</div>

</div>

<div className="landscape:bg-[#EFD7C7] section2  landscape:w-[50%] portrait:w-full portrait:text-center h-full portrait:h-[20%] flex flex-row justify-center items-end landscape:text-[#084242] portrait:text-[#262422]">
<div className="content  w-[90%] h-[85%]">
<div className="header text-[1.8vw] portrait:text-[6vw] portrait:sm:text-[4.5vw] mb-[4vw]">Foam Shoe1</div>
<div className="description text-[1.5vw] portrait:text-[3.7vw] portrait:sm:text-[3.5vw] mb-[4vw] ">Descrption goes here for now i dontknow what to say, so i will just leave it like this for now.</div>
<div className="prize text-[1.5vw] portrait:text-[4.5vw] portrait:sm:text-[4vw] mb-[4vw] ">$90.00</div>
<div className="portrait:hidden button h-[4vw] w-[12vw]  grid place-content-center rounded-[0.7vw] bg-[#8C6247] cursor-pointer text-[1.5vw]">Add to Cart</div>
</div>
</div>

    </div>
    </div>
  );
}
