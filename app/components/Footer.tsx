'use client';

import { SiBluesky } from 'react-icons/si'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "Instagram (Physioshark)",
      url: "https://www.instagram.com/physioshark/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "Instagram (Rummer Lab)",
      url: "https://www.instagram.com/rummerlab/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@physioshark",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/physioshark",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "Bluesky",
      url: "https://bsky.app/profile/physiologyfish.bsky.social",
      icon: <SiBluesky className="w-5 h-5" aria-hidden="true" />,
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">About Physioshark</h3>
            <p className="text-gray-400 max-w-lg">
              The Physioshark project investigates how climate change impacts the physiology 
              of newborn and juvenile reef sharks. Understanding how human and environmental 
              impacts affect these sharks is crucial knowledge for developing effective shark 
              conservation strategies.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-right">
            <a href="#contact">
              <h3 className="text-xl font-bold mb-4 text-white hover:text-gray-200 transition-colors">Contact</h3>
            </a>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href="https://www.jcu.edu.au" 
                  target="_blank" 
                  rel="noopener"
                  className="hover:text-white transition-colors"
                >
                  James Cook University
                </a>
              </li>
              <li>Townsville, QLD</li>
              <li>Australia</li>
              <li className="pt-2">
                <a href="mailto:hello@physioshark.org" className="hover:text-white transition-colors">
                  hello@physioshark.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label={`Follow us on ${social.name}`}
              title={`Visit our ${social.name} profile`}
            >
              {social.icon}
            </a>
          ))}
          <a
            href="https://jodierummer.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:opacity-80"
            aria-label="Jodie Rummer's Website"
            title="Visit Jodie Rummer's website"
          >
            <div className="relative w-5 h-5">
              <Image
                src="https://jodierummer.com/favicon.png"
                alt="Jodie Rummer Logo"
                fill
                className="object-contain"
                sizes="20px"
                unoptimized
              />
            </div>
          </a>
          <a
            href="https://rummerlab.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 group transition-colors duration-200"
            aria-label="Rummer Lab"
            title="Visit Rummer Lab website"
          >
            <div className="w-5 h-5">
              <img
                src="https://rummerlab.com/RummerLab_icon.svg"
                alt="Rummer Lab Logo"
                className="w-full h-full [filter:brightness(0)_saturate(100%)_invert(70%)] group-hover:[filter:brightness(0)_saturate(100%)_invert(100%)] transition-[filter] duration-200"
              />
            </div>
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} Physioshark Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 