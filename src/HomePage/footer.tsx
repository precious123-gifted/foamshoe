import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
 gsap.registerPlugin(ScrollTrigger)

export default function Footer() {


  const footerDiv  = useRef<HTMLDivElement>(null)
  useGSAP(()=>{
   gsap.from(footerDiv.current, {
     scrollTrigger: {
       trigger: footerDiv.current,
       start: 'bottom top',
       scrub: true,
       pin:true,
       pinSpacing:false,
       
       snap:1,
     },
   });
 }, []);
 



  return (
    <div ref={footerDiv} className='footer   bg-[#262422] w-screen landscape:h-[15vw] portrait:h-[55vw] portrait:sm:h-[40vw] flex flex-row items-end text-[1.5vw] portrait:text-[4.5vw] portrait:sm:text-[4vw]'>
      <div className="content w-full h-[90%] flex flex-col items-center justify-between">
<div className="section1 w-full h-[85%] flex flex-col items-center  text-[#EFD7C7] ">
<div className="top  w-full  flex flex-col items-center mb-[2vw] portrait:mb-[5vw] text-center">
  <span>Do You Want to reach out to Us for more Inquires?</span><span>We are eager to hear from You</span>
  </div>
<div className="bottom flex portrait:flex-col portrait:w-[95%]">
<span>Email Us : email</span>
<span>Message or Call Us : phone number</span>

</div>
</div>

<div className="section2 bg-[#EFD7C7] w-full h-[15%] pl-5 flex flex-row items-center">
    <span>FOAM@2023</span>
</div>


      </div>
    </div>
  )
}
