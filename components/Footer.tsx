import Link from "next/link";
import { Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <h4 className="text-lg font-semibold text-white">Aidela Africa</h4>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">
              Connecting companies with vetted African tech talent ready to work globally.
            </p>

            {/* Socials */}
            <div className="flex gap-3 mt-4">
              <Link
                href="#"
                className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-neutral-300" />
              </Link>
              <Link
                href="#"
                className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition"
                aria-label="Twitter"
              >
                <Twitter size={18} className="text-neutral-300" />
              </Link>
              <Link
                href="mailto:hello@aidela.africa"
                className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition"
                aria-label="Email"
              >
                <Mail size={18} className="text-neutral-300" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-12">
            <div>
              <h5 className="text-sm font-semibold text-white uppercase tracking-wide">
                Company
              </h5>
              <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                <li>
                  <Link href="/about" className="hover:text-white transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-white uppercase tracking-wide">
                For
              </h5>
              <ul className="mt-3 space-y-2 text-sm text-neutral-400">
                <li>
                  <Link href="/for-employers" className="hover:text-white transition">
                    Employers
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-neutral-800 mt-10 pt-6 text-sm text-neutral-500 flex flex-col sm:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Aidela Africa — All rights reserved.</p>
          <p className="mt-2 sm:mt-0 text-neutral-400">
            Built with ❤️ in Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
