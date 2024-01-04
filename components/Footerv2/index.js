// index.tsx
import Link from "next/link";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="p-8 md:p-14 mx-auto flex flex-col justify-center items-center md:max-w-1100 dark:bg-black bg-white dark:text-white text-black relative z-40">
      {/* <RocketFooterSection /> */}
      <div>
        <div className="flex flex-col items-center justify-center">
          <h1
            className="dark:text-white text-black text-2xl font-bold  uppercase text-center justify-center items-center mb-2"
            style={{
              letterSpacing: "10px",
              fontFamily: "Times New Roman, Times, serif",
            }}
          >
            Osmanity
          </h1>
          <p className="dark:text-white text-black text-sm italic mb-6">
            | Leading the way in tech for humanity!
          </p>
          <div className="flex flex-row justify-center mb-8 mt-6">
            {/* Footer Links */}
            <div
              className="flex flex-wrap sm:flex-col space-x-10 justify-center"
              // style={{ paddingLeft: "90px" }}
            >
              <div
                className="dark:text-white text-black flex flex-col  items-center text-center  box-border"
                style={{
                  margin: "20px",
                  width: "160px",
                }}
              >
                <div className="  dark:text-white text-black">
                  <h1 className="font-bold mb-2">Info</h1>
                  <div>
                    Mail:
                    <span className="font-bold"> Ibrahim@osmanity.com</span>
                  </div>
                  <div>
                    Phone: <br />
                    <span className="font-bold">076-058-7355</span>
                  </div>
                </div>
              </div>
              <div
                className="dark:text-white text-black flex flex-col items-center text-left box-border "
                style={{
                  margin: "20px",
                  width: "160px",
                }}
              >
                <h1 className="font-bold mb-2">Service</h1>
                <Link href="/signin">Website/App building</Link>
                <Link href="/signin">MobileApp building</Link>
                <Link href="/signin">Pricing/Plans</Link>
                <Link href="/signin">Hire me!</Link>
              </div>
              <div
                className="dark:text-white text-black flex flex-col items-center text-left box-border"
                style={{
                  margin: "20px",
                  width: "160px",
                }}
              >
                <h1 className="font-bold mb-2">Policy</h1>
                <Link href="/signin">Terms and Conditions</Link>
                <Link href="/signin">Payment Methods</Link>
                <Link href="/signin">Privacy Policy</Link>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          {/* <h1 className="font-bold mb-2">Admin</h1>
          <Link href="/Dashboard">Dashboard</Link> */}
          {/* Social Media */}
          <div className="mt-6">
            <div
              className="flex space-x-2 mx-10 justify-between"
              style={{ marginLeft: "2.5rem", marginRight: "2.5rem" }}
            >
              <a
                href="https://github.com/Osmanity"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-white text-black hover:text-gray-300 text-2xl"
              >
                <BsGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ibrahim-osman-aa2294153/"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-white text-black hover:text-gray-300 text-2xl"
              >
                <GrLinkedinOption />
              </a>
              <a
                href="https://twitter.com/IbrahimOsmanity"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:text-white text-black hover:text-gray-300 text-2xl"
              >
                <BsTwitterX />
              </a>
            </div>
            <p className="dark:text-white text-black mt-4">
              © Osmanity {new Date().getFullYear()}. All Rights Reserved
            </p>
          </div>
          {/* Crafted With Love */}
          <div className="flex items-center space-x-1 mt-2">
            <p className="text-gray-600 text-xs opacity-50">
              {"</> & Crafted With"}
            </p>
            <p className="text-gray-600 text-xs opacity-25"> 🖤 </p>
            <p className="text-gray-600 text-xs opacity-50">By Osmanity</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
