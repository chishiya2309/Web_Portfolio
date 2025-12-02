"use client"

import { useEffect, useState } from "react"

export function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile on client side only
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("resize", checkMobile)
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  if (isMobile) {
    return null
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 hidden transition-opacity duration-300 md:block"
      style={{
        opacity: isVisible ? 1 : 0,
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(100, 255, 218, 0.06), transparent 40%)`,
      }}
    />
  )
}
