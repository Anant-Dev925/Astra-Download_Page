'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Smartphone, Video, Zap, Users, Lock, Sparkles, Mail, ChevronDown, Images } from "lucide-react"

export function AstraDarkSpace() {
  const [activeTab, setActiveTab] = useState("'home'")
  const [activeFaq, setActiveFaq] = useState<string | null>(null)

  useEffect(() => {
    const stars = Array.from({ length: 100 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.7 + 0.3,
    }))

    const starsContainer = document.querySelector('.stars-container')
    if (starsContainer) {
      stars.forEach((star) => {
        const starElement = document.createElement('div')
        starElement.className = 'absolute rounded-full bg-white'
        starElement.style.left = `${star.x}%`
        starElement.style.top = `${star.y}%`
        starElement.style.width = `${star.size}px`
        starElement.style.height = `${star.size}px`
        starElement.style.opacity = star.opacity.toString()
        starsContainer.appendChild(starElement)
      })
    }
  }, [])

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setActiveTab(sectionId)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const sections = ['home', 'features', 'screenshots', 'faq']
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveTab(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const features = [
    { icon: Video, title: "AI-Generated Videos", description: "View and Post unique videos powered by artificial intelligence" },
    { icon: Smartphone, title: "Mobile Optimized", description: "Enjoy a seamless experience on your Android device" },
    { icon: Zap, title: "Fast Processing", description: "Watch videos quickly with our optimized algorithms" },
    { icon: Users, title: "Community", description: "Join a vibrant community of creators and AI enthusiasts" },
    { icon: Lock, title: "Secure Platform", description: "Your data and creations are protected with top-notch security" },
    { icon: Sparkles, title: "Creative Tools", description: "Access a wide range of videos to enhance your creativity" },
  ]

  const faqItems = [
    { question: "What is Astra?", answer: "Astra is an innovative Android application made just for all the AI enthusiasts. It provides a platform for users create, view, and engage with AI-generated video content." },
    { question: "How do I watch videos with Astra?", answer: "Astra offers an intuitive interface for video watching. Specially powered by React-Native Expo the streaming of videos is exceptionally easy" },
    { question: "Is Astra free to use?", answer: "Astra is compleely free to use. Just by logging into the app with email, the user can experience all the features of Astra" },
    { question: "What are the system requirements for Astra?", answer: "Astra is designed for Android devices running 6.0 (Marshmallow) or later. For optimal performance, we recommend using a device with at least 3GB of RAM and 100MB free storage space." },
  ]

  return (
    
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white font-sans overflow-hidden">
      <div className="stars-container fixed inset-0 z-0"></div>
      <div className="relative z-10">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-30 bg-black backdrop-blur-md">
          <ul className="flex justify-center py-4 space-x-8">
            {["home", "features", "screenshots", "faq"].map((tab) => (
              <li key={tab}>
                <button
                  onClick={() => scrollToSection(tab)}
                  className={`text-lg font-medium transition-colors ${
                    activeTab === tab
                      ? "text-cyan-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <header
          id="home"
          className="pt-24 pb-16 text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <img
              src="/logo.png"
              alt="Astra Logo"
              width={400}
              height={120}
              className="mx-auto mb-8 animate-pulse"
            />

            <h1 className="text-5xl font-bold mb-4 mx-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Explore the Universe of AI-Generated Videos
            </h1>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Embark on a cosmic journey of creativity with Astra, where
              cutting-edge AI technology meets your imagination
            </p>
            <a href="/assets/Astra.apk" download>
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-8 px-12 rounded-full text-lg shadow-lg transition-all hover:scale-105">
                <Download className="mr-2 h-5 w-5" />
                Download Astra APK
              </Button>
            </a>
          </div>
        </header>

        <main className="container mx-auto px-4 py-16">
          <section id="features" className="my-20 transform -skew-y-6">
            <h2 className="text-4xl font-bold mb-12 text-center skew-y-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Stellar Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-opacity-10 bg-white backdrop-blur-md rounded-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl skew-y-6"
                >
                  <CardHeader>
                    <feature.icon className="h-12 w-12 text-cyan-400 mb-4" />
                    <CardTitle className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="screenshots" className="my-20">
            <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Galactic Glimpses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative aspect-[9/16] bg-black rounded-lg overflow-hidden">
                  <img
                    src="/home.jpg"
                    alt="App Screenshot"
                    width={360}
                    height={640}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative aspect-[9/16] bg-black rounded-lg overflow-hidden">
                  <img
                    src="/sign.jpg"
                    alt="App Screenshot"
                    width={360}
                    height={640}
                    className="object-contain w-full"
                  />
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative aspect-[9/16] bg-black rounded-lg overflow-hidden">
                  <img
                    src="/main.jpg"
                    alt="App Screenshot"
                    width={360}
                    height={640}
                    className="object-cover w-full h-100"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="my-20">
            <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Cosmic Queries
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-700 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full p-4 text-left flex justify-between items-center text-lg font-medium hover:bg-opacity-10 hover:bg-white"
                    onClick={() =>
                      setActiveFaq(
                        activeFaq === item.question ? null : item.question
                      )
                    }
                  >
                    {item.question}
                    <ChevronDown
                      className={`transition-transform ${
                        activeFaq === item.question ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeFaq === item.question && (
                    <div className="p-4 bg-opacity-5 bg-white">
                      <p className="text-gray-300">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="bg-opacity-30 bg-black backdrop-blur-md py-8 text-center">
          <p className="mb-4">&copy; 2024 Astra App. All rights reserved.</p>
          <div className="flex justify-center items-center">
            <Mail className="h-5 w-5 mr-2 text-cyan-400" />
            <a
              href="mailto:anant.mishra2580@gmail.com"
              className="hover:text-cyan-400 transition-colors"
            >
              Contact: anant.mishra2580@gmail.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}