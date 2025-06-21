import React from 'react'
import Hero from "@/app/Component/Hero";
import Video from './Component/Video';
import Menu from '@/app/Component/Menu';
import Quality from './Component/Quality';
import Feedback from "./Component/Feedback";
import Support from "./Component/Support";


export default function Home () {
  return (
    <div>
      <Hero/>
      <Video/>
      <Menu/>
      <Quality/>
      <Feedback/>
      <Support/>
    </div>
  )
}
