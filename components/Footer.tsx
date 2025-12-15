import Link from "next/link";
import { Github, Twitter, Heart } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/Images/logo.png"
              alt="DevToolbox Logo"
              width={360}
              height={150}
            // className="w-8 h-8"
            />
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Free, fast, and privacy-focused developer tools. All processing happens in your browser.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold mb-4 dark:text-white">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tools/json-formatter" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  JSON Formatter
                </Link>
              </li>
              <li>
                <Link href="/tools/regex-tester" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  Regex Tester
                </Link>
              </li>
              <li>
                <Link href="/tools/base64-encoder" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  Base64 Encoder
                </Link>
              </li>
              <li>
                <Link href="/tools/jwt-decoder" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  JWT Decoder
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          {/* <div>
            <h3 className="font-semibold mb-4 dark:text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div> */}
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {currentYear} DevToolbox. All rights reserved.</p>
          <p className="flex items-center mt-4 md:mt-0">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> for developers
          </p>
        </div>
      </div>
    </footer>
  );
}
