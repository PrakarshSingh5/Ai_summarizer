import {logo} from '../assets';
import React from 'react'

const Hero = () => {
  return (
  <header className='w-full flex 
  justify-center items-center flex-col'>
<nav className='flex justify-between
items-center w-full mb-10 pt-3 '>
    <img src={logo} alt="Ai | Summary" 
    className='w-28 object-contain'/>
    <button type='button' onClick={()=>window.open('https://leetcode.com/problemset/')} className='black_btn'>Leetcode</button>
</nav>
<h1 className='head_text'>
    Summarize Articles with <br className='max-md:hidden'/>
    <span
    className='orange_gradient'>OpneAI GPT-4.0</span>
</h1>
<h2 className='desc'>
This helps you summarize any piece of text into concise, easy to digest content so you can free yourself from information overload.
</h2>
  </header>
  )
}

export default Hero
