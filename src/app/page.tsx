
'use client'

import Image from "next/image";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import { Suspense } from "react";
import {Model} from './Shoe'
import dynamic from "next/dynamic";
import HomePage from "@/HomePage/homePage";


// const DynamicShoeModel = dynamic(() => import('./Shoe'), { ssr: false });

export default function Home() {
  return (
    <main  className="flex flex-col items-center justify-between overflow-hidden">   
<HomePage/>
    </main>
  );
}
