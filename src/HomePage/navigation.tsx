import React from 'react';
import Image from 'next/image';
import { Kufam } from "next/font/google";
import foamLogo from '../assets/foam-logo.png'
import cartIcon from '../assets/cart-icon.png'
import menuIcon from '../assets/menu-icon.png'


const kufam = Kufam({subsets: ["latin"]})
export default function Navigation() {
  return (
    <div  style={kufam.style} className='flex landscape:h-[5vw] portrait:h-[15vw] flex-row items-center justify-center  w-screen text-[#EEFBFB]  '>
    <div className="flex content w-[95%] text-[1.3vw] portrait:text-[4.3vw]  h-full flex-row items-center justify-between">
<div className="logoDIv w-[20%] portrait:w-[40%] "><Image src={foamLogo} alt='' className='logo cursor-pointer w-[80%] object-contain aspect-[4/3]'/></div>

<div className="portrait:hidden flex listDiv w-[50%] flex-row items-center justify-between ">
  
<div className='cursor-pointer'>ABOUT</div>
<div className='cursor-pointer'>PRODUCT</div>
<div className='cursor-pointer'>CONTACT</div>
<div className='cursor-pointer'><Image src={cartIcon} alt='' className='logo cursor-pointer w-[80%] object-contain aspect-[4/3]'/></div>

</div>

<div className="landscape:hidden burgerIcon cursor-pointer grid w-[10%]">
  <svg className='logo cursor-pointer w-[100%] sm:w-[100%] object-contain aspect-[4/3]' viewBox="0 0 192 162" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M192.006 80.0063C192.006 82.128 191.163 84.1629 189.663 85.6632C188.163 87.1635 186.128 88.0063 184.006 88.0063H88.0063V152.006C88.0075 153.589 87.539 155.137 86.6601 156.454C85.7811 157.771 84.5312 158.797 83.0686 159.403C81.606 160.009 79.9965 160.168 78.4438 159.859C76.8912 159.549 75.4651 158.786 74.3463 157.666L2.34629 85.6663C1.60248 84.9233 1.01241 84.041 0.609816 83.0698C0.207221 82.0986 0 81.0576 0 80.0063C0 78.955 0.207221 77.914 0.609816 76.9428C1.01241 75.9716 1.60248 75.0893 2.34629 74.3463L74.3463 2.3463C75.4651 1.22621 76.8912 0.463269 78.4438 0.154066C79.9965 -0.155137 81.606 0.00329995 83.0686 0.60932C84.5312 1.21534 85.7811 2.24169 86.6601 3.55844C87.539 4.87519 88.0075 6.42313 88.0063 8.0063V72.0063H184.006C186.128 72.0063 188.163 72.8492 189.663 74.3494C191.163 75.8497 192.006 77.8846 192.006 80.0063Z" fill="#EEFBFB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M83 0C85.3869 0 87.6761 0.948211 89.364 2.63604C91.0518 4.32387 92 6.61305 92 9V153C92 155.387 91.0518 157.676 89.364 159.364C87.6761 161.052 85.3869 162 83 162C80.6131 162 78.3239 161.052 76.636 159.364C74.9482 157.676 74 155.387 74 153V9C74 6.61305 74.9482 4.32387 76.636 2.63604C78.3239 0.948211 80.6131 0 83 0Z" fill="#EEFBFB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M133 0C135.387 0 137.676 0.948211 139.364 2.63604C141.052 4.32387 142 6.61305 142 9V153C142 155.387 141.052 157.676 139.364 159.364C137.676 161.052 135.387 162 133 162C130.613 162 128.324 161.052 126.636 159.364C124.948 157.676 124 155.387 124 153V9C124 6.61305 124.948 4.32387 126.636 2.63604C128.324 0.948211 130.613 0 133 0Z" fill="#EEFBFB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M183 0C185.387 0 187.676 0.948211 189.364 2.63604C191.052 4.32387 192 6.61305 192 9V153C192 155.387 191.052 157.676 189.364 159.364C187.676 161.052 185.387 162 183 162C180.613 162 178.324 161.052 176.636 159.364C174.948 157.676 174 155.387 174 153V9C174 6.61305 174.948 4.32387 176.636 2.63604C178.324 0.948211 180.613 0 183 0Z" fill="#EEFBFB"/>
</svg>
</div>




    </div>
    </div>
  );
}
