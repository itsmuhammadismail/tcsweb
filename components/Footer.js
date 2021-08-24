import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="lg:container mx-auto flex py-[7rem] px-6 gap-6">
        <div className="flex-1 flex ">
          <ul className="flex-1 text-sm flex flex-col gap-1 link">
            <li className="font-bold mb-4 text-lg">Company Information</li>
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
            <li>Leadership</li>
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
            <li className="font-bold mb-4 text-lg">Platform Solutions</li>
            <li>Domestic</li>
            <li>International</li>
            <li>Supply Chain Solutions</li>
            <li>Value Added Services</li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="font-bold mb-4 text-2xl">Sign up for updates</h2>
          <div className="flex  items-center">
            <input
              type="text"
              className="border focus:outline-none px-2 py-1 w-[20rem] h-[2.2rem]"
            />
            <button className="bg-[#ed1c24] p-2 w-[4rem] h-[2.2rem] flex justify-center items-center">
              <img src="/signup.png" alt="" className="w-[1.8rem] " />
            </button>
          </div>
          <h2 className="font-bold mb-4 text-lg mt-8">Follow us</h2>
          <div className="flex gap-4">
            <img src="/social/fb.svg" alt="" className="h-5 social" />
            <img src="/social/whatsapp.svg" alt="" className="h-5 social" />
            <img src="/social/instagram.svg" alt="" className="h-5 social" />
            <img src="/social/twitter.svg" alt="" className="h-5 social" />
            <img src="/social/youtube.svg" alt="" className="h-5 social" />
          </div>
        </div>
      </div>
      <div className="bg-[#f1f1f1]">
        <div className="lg:container mx-auto flex justify-between items-center p-6 text-sm text-[#606060] flex-col md:flex-row">
          <div>2021 &copy; TCS EXPRESS. All rights reserved</div>
          <ul className="flex gap-3 md:gap-6  text-xs md:text-sm link">
            <li>Terms of Use</li>
            <li>Fraud Prevention</li>
            <li>Privacy Policy</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
