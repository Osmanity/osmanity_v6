"use client";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import RepeatIcon from "@mui/icons-material/Repeat";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiCodeAlt } from "react-icons/bi";
import { BsFillCpuFill } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";
import { ImLab } from "react-icons/im";

// import { BiCodeAlt } from "react-icons/bi";

// import { delay } from "@/lib/delay";
// import MountiansParallax from "@/components/MountiansParallax/MountiansParallax";

const TAGS_Frontend = [
  "HTML",
  "JavaScript",
  "Typescript",
  "Tailwind",
  "React",
  "CSS",
  "Emotion",
  "StyledComponent",
  "Express",
  "NodeJS",
  "ReduxToolkit",
  "VisualStudio",
  "SCSS/SASS",
  "Kotlin",
  "Java",
  "Flutter",
  "JavaScript",
  "Typescript",
  "Tailwind",
  "SVG",
  "Animate.CSS",
  "ReactNative",
  "VisualStudio",
  "Expo",
  "RevenueCat",
];
const TAGS_Backend = [
  "JavaScript",
  "Typescript",
  "Express",
  "NodeJS",
  "VisualStudio",
  "Sanity",
  "MongoDB",
  "MYSQL",
  "Docker",
];
const TAGS_Graphic = ["Figma", "XD", "Canva", "PhotoShop", "Illustrator"];
const TAGS_Ecommerce = [
  "Shopify",
  "Facebook-Ads",
  "Google-Ads",
  "Tiktok-Ads",
  "Fortnox",
  "Canva",
];

interface InfiniteLoopSliderProps {
  children: React.ReactNode; // This type is appropriate for anything that can be rendered: numbers, strings, elements, or an array containing these types.
  duration: number;
  reverse?: boolean; // Optional prop
}

interface TagProps {
  text: string;
}

const DURATION = 15000;
const ROWS = 1;
const TAGS_PER_ROW = 7;

// const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());
const shuffle = (arr: string[]) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({
  children,
  duration,
  reverse = false,
}: InfiniteLoopSliderProps) => {
  return (
    <div
      className="loop-slider"
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text }: TagProps) => (
  <div className="tag2">
    <span>#</span> {text}
  </div>
);

function page() {
  const [frontendTags, setFrontendTags] = useState<string[]>([]);
  const [backendTags, setBackendTags] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initialize dynamic content for frontend and backend
    setFrontendTags(shuffle(TAGS_Frontend).slice(0, TAGS_PER_ROW));
    setBackendTags(shuffle(TAGS_Backend).slice(0, TAGS_PER_ROW));
  }, []);

  return (
    <section className="sm:pt-20 ">
      <div className="text-center space-y-2 pt-10 pb-6 relative z-10">
        <h1 className="text-6xl font-bold ">
          <span className="fancy-text ">Skills</span>
        </h1>
        <div className="-space-y-1">
          <h2 className="text-xl sm:text-3xl font-bold -mb-1">
            Software Engineer Timeline{" "}
          </h2>

          <p className="text-xl font-bold dark:text-white/70 text-black/70">
            Fullstack Developer Journey
          </p>
        </div>
      </div>
      <div className="pt-20 pb-20  h-full w-full  mx-0 md:mx-auto px-4 relative z-40">
        <ul className="timeline text-white timeline-snap-icon max-md:timeline-compact timeline-vertical ">
          <li>
            <div className="timeline-middle">
              {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg> */}
              <div className="flex justify-center items-center dark:bg-white bg-black rounded-full mb-1 mr-2 sm:mx-2">
                <BsFillCpuFill
                  size={"40px"}
                  className="dark:text-black/90 text-white "
                  style={{
                    padding: "6px",
                  }}
                />
              </div>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2018 - Aug</time>
              <div className="text-lg font-black">C /C++/ VHDL/ Verilog</div>
              <p>Built Safety critcal & Embedded Systems</p>
              <div className="gradientBgVideo mb-10">
                <div className="p-2">
                  <Image
                    src="/img/bluangel_webbplatsen.png"
                    alt="C"
                    width={1200}
                    height={1200}
                    className=" rounded-xl "
                  />
                </div>
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <div className="flex justify-center items-center dark:bg-white bg-black rounded-full mb-1 mt-1 mr-2 sm:mx-2">
                <ImLab
                  size={"40px"}
                  className="dark:text-black/90 text-white "
                  style={{
                    padding: "6px",
                    paddingBottom: "8px",
                  }}
                />
              </div>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2019 - Sep</time>
              <div className="text-lg font-black">
                Labview/NI-elvis/Multisim
              </div>
              <p>Built Measurement systems</p>
              <div className="gradientBgVideo mb-10">
                <div className="p-2">
                  <Image
                    src="/img/bluangel_webbplatsen.png"
                    alt="C"
                    width={1200}
                    height={1200}
                    className=" rounded-xl "
                  />
                </div>
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <div className="flex justify-center items-center dark:bg-white bg-black rounded-full mb-1 mt-1 mr-2 sm:mx-2">
                <FaRobot
                  size={"40px"}
                  className="dark:text-black/90 text-white "
                  style={{
                    padding: "6px",
                    paddingBottom: "8px",
                  }}
                />
              </div>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2020 - Sep </time>
              <div className="text-lg font-black">Python/OpenCV/Flask</div>
              <p>Built Autonomous System</p>
              <div className="gradientBgVideo mb-10">
                <div className="p-2">
                  <Image
                    src="/img/bluangel_webbplatsen.png"
                    alt="C"
                    width={1200}
                    height={1200}
                    className=" rounded-xl "
                  />
                </div>
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <div className="flex justify-center items-center dark:bg-white bg-black rounded-full mb-1 mt-1 mr-2 sm:mx-2">
                <AppShortcutIcon
                  sx={{ fontSize: 40 }}
                  className="dark:text-black/90 text-white "
                  style={{
                    padding: "6px",
                    paddingBottom: "6px",
                  }}
                />
              </div>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2021 - July</time>
              <div className="text-lg font-black">Java/Flutter</div>
              <p>I started my first Built mobil-app</p>
              <div className="gradientBgVideo mb-10">
                <div className="p-2">
                  <Image
                    src="/img/bluangel_webbplatsen.png"
                    alt="C"
                    width={1200}
                    height={1200}
                    className=" rounded-xl "
                  />
                </div>
              </div>
            </div>
            <hr />
          </li>
          <div className="-mb-2" />
          <li>
            <div className="timeline-middle">
              <div className="flex justify-center items-center dark:bg-white bg-black rounded-full mb-1 mt-1 mr-2 sm:mx-2">
                <LaptopMacIcon
                  sx={{ fontSize: 40 }}
                  className="dark:text-black/90 text-white "
                  style={{
                    padding: "6px",
                    paddingBottom: "6px",
                  }}
                />
              </div>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2021 - Dec</time>
              <div className="text-lg font-black">JS/HTML/CSS</div>
              <p>Built online present, client websites</p>
              <div className="gradientBgVideo mb-10">
                <div className="p-2">
                  <Image
                    src="/img/bluangel_webbplatsen.png"
                    alt="C"
                    width={1200}
                    height={1200}
                    className=" rounded-xl "
                  />
                </div>
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <div className="flex justify-center items-center dark:bg-white bg-black rounded-full mb-1 mt-1 mr-2 sm:mx-2">
                <BiCodeAlt
                  size={"40px"}
                  className="dark:text-black/90 text-white "
                  style={{
                    padding: "6px",
                    paddingBottom: "8px",
                  }}
                />
              </div>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2022 - Dec</time>
              <div className="text-lg font-black">
                NextJs/Vite/ReactJs/React-Native
              </div>
              <p>Built advance Mobile- & Webb- Apps</p>
              <div className="gradientBgVideo mb-10">
                <div className="p-2">
                  <Image
                    src="/img/bluangel_webbplatsen.png"
                    alt="C"
                    width={1200}
                    height={1200}
                    className=" rounded-xl "
                  />
                </div>
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <div className="flex justify-center items-center dark:bg-white bg-black rounded-full mb-1 mt-1 mr-2 sm:mx-2">
                <RepeatIcon
                  sx={{ fontSize: 40 }}
                  className="dark:text-black/90 text-white "
                  style={{
                    padding: "6px",
                    paddingBottom: "6px",
                  }}
                />
              </div>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">2024 - Now</time>
              <div className="text-lg font-black">Still NextJs</div>
              Because I love it!
            </div>
            <hr />
          </li>
          {/* <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic">2007</time>
                <div className="text-lg font-black">iPhone</div>
                iPhone is a line of smartphones produced by Apple Inc. that use
                Apple's own iOS mobile operating system. The first-generation
                iPhone was announced by then-Apple CEO Steve Jobs on January 9,
                2007. Since then, Apple has annually released new iPhone models
                and iOS updates. As of November 1, 2018, more than 2.2 billion
                iPhones had been sold. As of 2022, the iPhone accounts for 15.6%
                of global smartphone market share
              </div>
              <hr />
            </li>
            <div className="-mb-2" />
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic">1984</time>
                <div className="text-lg font-black">
                  First Macintosh computer
                </div>
                The Apple Macintosh—later rebranded as the Macintosh 128K—is the
                original Apple Macintosh personal computer. It played a pivotal
                role in establishing desktop publishing as a general office
                function. The motherboard, a 9 in (23 cm) CRT monitor, and a
                floppy drive were housed in a beige case with integrated
                carrying handle; it came with a keyboard and single-button
                mouse.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic">1998</time>
                <div className="text-lg font-black">iMac</div>
                iMac is a family of all-in-one Mac desktop computers designed
                and built by Apple Inc. It has been the primary part of Apple's
                consumer desktop offerings since its debut in August 1998, and
                has evolved through seven distinct forms
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic">2001</time>
                <div className="text-lg font-black">iPod</div>
                The iPod is a discontinued series of portable media players and
                multi-purpose mobile devices designed and marketed by Apple Inc.
                The first version was released on October 23, 2001, about 8+1⁄2
                months after the Macintosh version of iTunes was released. Apple
                sold an estimated 450 million iPod products as of 2022. Apple
                discontinued the iPod product line on May 10, 2022. At over 20
                years, the iPod brand is the oldest to be discontinued by Apple
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic">2007</time>
                <div className="text-lg font-black">iPhone</div>
                iPhone is a line of smartphones produced by Apple Inc. that use
                Apple's own iOS mobile operating system. The first-generation
                iPhone was announced by then-Apple CEO Steve Jobs on January 9,
                2007. Since then, Apple has annually released new iPhone models
                and iOS updates. As of November 1, 2018, more than 2.2 billion
                iPhones had been sold. As of 2022, the iPhone accounts for 15.6%
                of global smartphone market share
              </div>
              <hr />
            </li> */}
        </ul>

        {/* <div
            style={{
              justifyContent: "center",
              textAlign: "center",
              color: "#B8B8B8",
              fontSize: "18px",
              letterSpacing: "0.8px",
              lineHeight: "1.5em",
            }}
          >
            <div
              className="Tech_container"
              style={{ marginTop: "24px", borderRadius: "30px" }}
            >
              <div
                className="tag-list"
                style={{
                  borderRadius: "30px",
                  backgroundColor: "#151515",
                  padding: "24px",
                  display: "flex",
                  alignContent: "center",
                  textAlign: "center",
                }}
              >
                <h2 className="text-xl sm:text-5xl font-bold mb-6">
                  Technologies
                </h2>
                <div className="mb-10">
                  <p className="mb-4">
                    FrontEnd-Development Experience: <br /> (Web & Mobile)
                  </p>
                  {[...new Array(ROWS)].map((_, i) => (
                    <InfiniteLoopSlider
                      key={`frontend-${i}`}
                      duration={DURATION}
                      reverse={true}
                    >
                      {frontendTags.map((tag) => (
                        <Tag text={tag} key={tag} />
                      ))}
                    </InfiniteLoopSlider>
                  ))}
                </div>

                <div className="mb-10">
                  <p className="mb-4">BackEnd-Development Experience:</p>
                  {[...new Array(ROWS)].map((_, i) => (
                    <InfiniteLoopSlider
                      key={`backend-${i}`}
                      duration={DURATION}
                      reverse={!true}
                    >
                      {backendTags.map((tag) => (
                        <Tag text={tag} key={tag} />
                      ))}
                    </InfiniteLoopSlider>
                  ))}
                </div>
                <div className="fade2" style={{ borderRadius: "30px" }} />
              </div>
            </div>
          </div> */}

        <div
          style={{
            justifyContent: "center",
            textAlign: "center",
            color: "#B8B8B8",
            fontSize: "18px",
            letterSpacing: "0.8px",
            lineHeight: "1.5em",
          }}
        >
          <div
            className="Tech_container "
            style={{ marginTop: "24px", borderRadius: "30px" }}
          >
            <div className="gradientBgVideo mb-10">
              <div className="p-2">
                <div
                  className="tag-list"
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "#151515",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <p>
                    FrontEnd-Development Experience: <br /> (Web & Mobile)
                  </p>
                  {[...new Array(ROWS)].map((_, i) => (
                    <InfiniteLoopSlider
                      key={`frontend-${i}`}
                      duration={DURATION}
                      reverse={true}
                    >
                      {frontendTags.map((tag) => (
                        <Tag text={tag} key={`frontend-tag-${tag}-${i}`} />
                      ))}
                    </InfiniteLoopSlider>
                  ))}
                  <div className="fade2" style={{ borderRadius: "30px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            justifyContent: "center",
            textAlign: "center",
            color: "#B8B8B8",
            fontSize: "18px",
            letterSpacing: "0.8px",
            lineHeight: "1.5em",
            marginTop: "20px",
          }}
        >
          <div
            className="Tech_container "
            style={{ marginTop: "24px", borderRadius: "30px" }}
          >
            <div className="gradientBgVideo mb-10">
              <div className="p-2">
                <div
                  className="tag-list"
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "#151515",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <p className="mb-4 ">BackEnd-Development Experience:</p>
                  {[...new Array(ROWS)].map((_, i) => (
                    <InfiniteLoopSlider
                      key={`backend-${i}`}
                      duration={DURATION}
                      reverse={!true}
                    >
                      {backendTags.map((tag) => (
                        <Tag text={tag} key={`backend-tag-${tag}-${i}`} />
                      ))}
                    </InfiniteLoopSlider>
                  ))}
                  <div className="fade2" style={{ borderRadius: "30px" }} />
                </div>
              </div>
            </div>
            <h1 className="text-2xl sm:text-5xl font-bold  mt-10 mb-6">
              This is just the tip of the iceberg.
              <br /> I have a lot more experience <br />
              <p className="text-center text-sm sm:text-xl  font-bold   mb-6">
                Feel free to contact me for more details.
              </p>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
