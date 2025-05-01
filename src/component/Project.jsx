import React from 'react'
import Card from './ProjectCard'

const Project = () => {
  return (
    <div className='flex flex-wrap gap-6 justify-center cursor-pointer' id='projects'>
      
      <Card
        imageSrc="/crime-app.png"
        title="CrimeReport App"
        description="A user-friendly web app that allows citizens to report crimes online with structured forms. Built for accessibility and ease-of-use, it includes form validation, admin-side report tracking, and a clean, responsive UI."
        link="https://crime-app-vnfo.vercel.app/"
      />
       <Card
        imageSrc="/resumix.png"
        title="AI Resume Builder"
        description="A modern web-based resume builder built with Next.js, Typescript, MongoDB, and Clerk Auth. Features include real-time resume preview, PDF download, and resume management. Deployed on Vercel, optimized for performance and scalability."
        link="https://resumix-lake.vercel.app/"
      />

      <Card
        imageSrc="/ecommerce.png"
        title="Ecommerce Website"
        description="An intuitive e-commerce platform offering a wide range of products with secure payment options, detailed product pages, and a seamless shopping experience."
        link="https://forever-g3g9.vercel.app/"
      />
      <Card
        imageSrc="/ai.png"
        title="AI Smmarizer"
        description="A web app that leverages AI to generate concise summaries of articles from provided links, making it easy to digest long-form content quickly and efficiently."
        link="https://glowing-eclair-e883ed.netlify.app/"
      />
      <Card
        imageSrc="/chat.png"
        title="Chat App"
        description="A real-time messaging application allowing users to chat seamlessly, with features like instant message delivery, user authentication, and a smooth interface."
        link="https://chatapp-27oe.onrender.com/"
      />
      <Card
        imageSrc="/Imagegen.webp"
        title="AI ImageGenration"
        description="A web app that uses AI to generate custom images based on user prompts, offering a creative and interactive way to create visuals."
        link="https://github.com/Farhan9373/Imagegen.git"
      />
      <Card
        imageSrc="/crypto1.jpg"
        title="Crypto Tracker"
        description="A backend service for tracking cryptocurrency prices with automated hourly data fetching. It calculates price deviations, analyzes trends, and provides API endpoints for seamless integration with frontend applications."
        link="https://github.com/Farhan9373/CryptoTracker.git"
      />
      <Card
        imageSrc="/gpt3.png"
        title="Modern GPT3 UI"
        description="A sleek, user-friendly frontend for interacting with GPT-3. This project provides a seamless chat interface, enabling natural and engaging AI conversations with real-time responses."
        link="https://aesthetic-mousse-cea229.netlify.app/"
      />
    </div>
  )
}

export default Project;
