import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f9fafb]  py-12 shadow-[0_0_0_1px_rgba(0,0,0,.05),0_2px_4px_rgba(0,0,0,.03),0_12px_24px_rgba(0,0,0,.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="text-2xl  mb-4 block">logo</span>
            <p className="text-neutral-500 text-[13px]">
              Where Teachers and Students Connect
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-2 text-neutral-500">
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors text-[13px]"
                >
                  Find Teachers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors text-[13px]"
                >
                  Join Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors text-[13px]"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors text-[13px]"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 tracking-tight">
              Contact
            </h4>
            <ul className="space-y-2 text-neutral-500">
              <li className="flex items-center text-[13px] gap-x-[6px] transition-colors hover:text-primary cursor-pointer">
                <Mail size={13} />
                <span>contact@skoolyskool.ma</span>
              </li>
              <li className="flex items-center text-[13px] gap-x-[6px] transition-colors hover:text-primary cursor-pointer">
                <Phone size={13} />
                <span>+212 5XX-XXXXXX</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 tracking-tight">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <div className="size-10 bg-[#3956f51a] rounded-full grid place-items-center shrink-0 cursor-pointer border border-[#3955f51c]">
                <Facebook size={18} className="text-[#3956f5]" />
              </div>
              <div className="size-10 bg-[#3956f51a] rounded-full grid place-items-center shrink-0 cursor-pointer border border-[#3955f51c]">
                <Instagram size={18} className="text-[#3956f5]" />
              </div>
              <div className="size-10 bg-[#3956f51a] rounded-full grid place-items-center shrink-0 cursor-pointer border border-[#3955f51c]">
                <Linkedin size={18} className="text-[#3956f5]" />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-200 mt-12 pt-8 text-center text-neutral-500 text-[13px]">
          <p>
            &copy;{new Date().getFullYear()} Skooly Skool. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
