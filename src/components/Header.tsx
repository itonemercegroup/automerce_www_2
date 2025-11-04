"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-purple-600" />
            <span className="text-xl font-bold tracking-tight">Automerce</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <Link
            href="#services"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Usługi
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            O nas
          </Link>
          <Link
            href="#technology"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Technologie
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Kontakt
          </Link>
        </div>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <Button
            size="lg"
            className="hidden rounded-full bg-foreground px-6 text-background transition-all hover:bg-foreground/90 md:inline-flex"
          >
            Rozpocznij projekt
          </Button>
        </div>
      </nav>
    </header>
  )
}
