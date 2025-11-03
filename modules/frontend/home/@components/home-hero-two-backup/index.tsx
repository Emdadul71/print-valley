// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import CountUp from "react-countup";
// import VisibilitySensor from "react-visibility-sensor";

// const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

// const HomeHeroTwo = () => {
//   const [focus, setFocus] = React.useState(false);

//   return (
//     <section className="h-[calc(100vh-75px)] pt-5 lg:pt-[80px]  lg:mb-0 relative">
//       <div
//         className="absolute w-[40vw] h-3/4 left-0 top-[50px] bg-primary opacity-[.07] blur-[158px] z-0"
//         style={{ filter: "blur(158px)" }}
//       ></div>
//       <div
//         className="absolute w-[40vw] h-3/4 right-0 top-[50px] bg-secondary opacity-[.1] blur-[158px] z-0"
//         style={{ filter: "blur(158px)" }}
//       ></div>
//       <div className="container flex justify-center items-center  h-full ">
//         <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-4 lg:gap-[136px]  items-center justify-center ">
//           <div className="order-2 lg:order-1 z-20">
//             <p className="mb-2 text-sm">GLOBAL EXPERIENCE</p>
//             <h1 className="text-secondary heading-two mb-2">
//               AL AMIN FOUNDATION
//             </h1>
//             <p>
//               We merge imagination and technology to help thousands of brands
//               grow in an age of digital transformation.
//             </p>
//             <Link
//               href="/donation"
//               className="btn btn-secondary hover:bg-[#e15d18] hover:border-[#e15d18] shadow-[0_10px_40px_0px_rgba(238,58,35,0.25)]"
//             >
//               DONATE
//             </Link>
//             {/* <div className="max-w-[428px] border-t border-[#DADADA] mt-[20px]">
//               <div className="flex gap-11 mt-5">
//                 <div>
//                   <span className="text-secondary heading-three">
//                     <CountUp
//                       start={focus ? 0 : undefined}
//                       end={8}
//                       duration={2}
//                       redraw={true}
//                     >
//                       {({ countUpRef }) => (
//                         <div>
//                           <span ref={countUpRef} />
//                           <VisibilitySensor
//                             onChange={(isVisible: any) => {
//                               if (isVisible) {
//                                 setFocus(true);
//                               }
//                             }}
//                           >
//                             <span>+</span>
//                           </VisibilitySensor>
//                         </div>
//                       )}
//                     </CountUp>
//                   </span>
//                   <p className="text-sm text-xl">Programs</p>
//                 </div>
//                 <div>
//                   <span className="text-secondary heading-three">
//                     <CountUp
//                       start={focus ? 0 : undefined}
//                       end={5000}
//                       duration={2}
//                       redraw={true}
//                     >
//                       {({ countUpRef }) => (
//                         <div>
//                           <span ref={countUpRef} />
//                           <VisibilitySensor
//                             onChange={(isVisible: any) => {
//                               if (isVisible) {
//                                 setFocus(true);
//                               }
//                             }}
//                           >
//                             <span>+</span>
//                           </VisibilitySensor>
//                         </div>
//                       )}
//                     </CountUp>
//                   </span>
//                   <p className="text-sm text-xl">Beneficiary</p>
//                 </div>
//               </div>
//             </div> */}
//           </div>
//           <div className="order-1 lg:order-2 h-full  lg:ml-auto z-20">
//             <Image
//               src="/misc/hero-right.png"
//               alt="hero"
//               width={960}
//               height={540}
//               className={`w-full h-full object-cover `}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeHeroTwo;
