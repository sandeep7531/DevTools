"use client";

import Link from "next/link";
import { Moon, Sun, Code2 } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <Code2 className="w-6 h-6 text-blue-500" />
          <span className="font-bold text-xl dark:text-white">DevToolbox</span>
        </Link>

        <nav className="flex items-center space-x-6">
          <Link 
            href="/#tools" 
            className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            Tools
          </Link>
          <Link 
            href="/blog" 
            className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            Blog
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
