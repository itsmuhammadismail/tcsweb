import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";

const Footer = () => {
  const [show, setShow] = useState(false);
  return (
    <footer className="border-t">
      <div className="max-w-[70rem] mx-auto flex flex-col md:flex-row py-[7rem] px-6 gap-6">
        <div className="flex-1 flex ">
          <ul className="flex-1 text-sm flex flex-col gap-1 link">
            <li className="font-bold mb-4 text-lg link-title">
              Company Information
            </li>
            <Link href="/about">
              <a>
                <li>About TCS</li>
              </a>
            </Link>
            <Link href="/mission">
              <a>
                <li>Mission & Core Values</li>
              </a>
            </Link>
            <Link href="/leadership">
              <a>
                <li>Leadership</li>
              </a>
            </Link>
            <Link href="/day-in-the-life-of-tcs">
              <a>
                <li>Day in the life of TCS</li>
              </a>
            </Link>
            <Link href="/careers">
              <a>
                <li>Careers</li>
              </a>
            </Link>
            <Link href="/csr-tcs-foundation">
              <a>
                <li>CSR / TCS Foundation</li>
              </a>
            </Link>
          </ul>
        </div>
        <div className="flex-1 flex ">
          <ul className="flex-1 text-sm flex flex-col gap-1 link">
            <li className="font-bold mb-4 text-lg link-title">
              Platform Solutions
            </li>
            <Link href="/platform-solutions/domestic">
              <a>
                <li>Domestic</li>
              </a>
            </Link>
            <Link href="/platform-solutions/international">
              <a>
                <li>International</li>
              </a>
            </Link>
            <Link href="/platform-solutions/supply">
              <a>
                <li>Supply Chain Solutions</li>
              </a>
            </Link>
            <Link href="/platform-solutions/value">
              <a>
                <li>Value Added Services</li>
              </a>
            </Link>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="font-bold mb-4 text-lg">Sign up for updates</h2>
          <div className="flex  items-center">
            <input
              type="text"
              className="border focus:outline-none px-2 py-1 w-[20rem] h-[2.2rem]"
            />
            <button
              onClick={() => setShow(true)}
              className="bg-[#ed1c24] p-2 w-[4rem] h-[2.2rem] flex justify-center items-center"
            >
              <img src="/signup.png" alt="" className="w-[1.8rem] " />
            </button>
          </div>
          <h2 className="font-bold mb-4 text-lg mt-8">Follow us</h2>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/tcscouriers/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/social/fb.svg" alt="" className="h-5 social" />
            </a>
            <a
              href="https://wa.me/923161123456"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/social/whatsapp.svg" alt="" className="h-5 social" />
            </a>
            <a
              href="https://www.instagram.com/tcs_couriers/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/social/instagram.svg" alt="" className="h-5 social" />
            </a>
            <a
              href="https://twitter.com/tcs_couriers"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/social/twitter.svg" alt="" className="h-5 social" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCrniUiy5dGDEZ1f4jieAS3Q"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/social/youtube.svg" alt="" className="h-5 social" />
            </a>
            <a
              href="https://www.linkedin.com/company/tcs-private-limited/"
              rel="noreferrer"
              target="_blank"
            >
              <img src="/social/linkedin.svg" alt="" className="h-5 social" />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#f1f1f1]">
        <div className="max-w-[70rem] mx-auto flex justify-between items-center p-6 text-sm text-[#606060] flex-col md:flex-row">
          <div>2021 &copy; TCS EXPRESS. All rights reserved</div>
          <ul className="flex gap-3 md:gap-6  text-xs md:text-sm link">
            <Link href="/terms-of-use">
              <a>
                <li>Terms of Use</li>
              </a>
            </Link>
            <Link href="/fraud-prevention">
              <a>
                <li>Fraud Prevention</li>
              </a>
            </Link>
            <Link href="/privacy-policy">
              <a>
                <li>Privacy Policy</li>
              </a>
            </Link>
            <Link href="/faqs">
              <a>
                <li>FAQs</li>
              </a>
            </Link>
          </ul>
        </div>
      </div>
      <Modal show={show} onClose={() => setShow(false)} />
    </footer>
  );
};

export default Footer;
