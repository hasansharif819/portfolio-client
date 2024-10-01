// import React, { useState } from "react";
// import { TECollapse } from "tw-elements-react";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaExternalLinkSquareAlt } from "react-icons/fa";




// const Experience = ( {experience} ) => {

//   const [activeElement, setActiveElement] = useState("");

//   const handleClick = (value) => {
//     if (value === activeElement) {
//       setActiveElement("");
//     } else {
//       setActiveElement(value);
//     }
//   };


//   return (
//     <>
//       <div className="bg-accent shadow-lg rounded-lg p-2 mb-4">
//         <div className="mb-0" id="headingOne">
//           <button
//             className={`${
//               activeElement === "element1" &&
//               `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
//             } group relative flex w-full items-center rounded-t-[15px] border-0 bg-accent px-5 py-4 text-left text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
//             type="button"
//             onClick={() => handleClick("element1")}
//             aria-expanded="true"
//             aria-controls="collapseOne"
//           >
//             <div className="flex justify-between items-center w-[100%]">
//               <h1 className="text-xl font-semibold">{experience?.title}  <span className="mx-2">@</span>  {experience?.companyName}</h1>
//               <h1 className="mr-10 text-xl font-semibold">{experience?.joining}  <span className="mx-2">-</span>  {experience?.ending}</h1>
//             </div>
//             <span
//               className={`${
//                 activeElement === "element1"
//                   ? `rotate-[-180deg] -mr-1`
//                   : `rotate-0 fill-[#212529]  dark:fill-white`
//               } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 className="h-6 w-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//                 />
//               </svg>
//             </span>
//           </button>
//         </div>
//         <TECollapse
//           show={activeElement === "element1"}
//           className="!mt-0 !rounded-b-none !shadow-none"
//         >
//           <div className="px-5 py-4 text-white">
//             <div className="flex justify-between w-[100%] mb-3 experience-link">
//               <span className="flex items-center"><FaLocationDot className="text-2xl mr-2"/>
//               {experience?.address}</span> 
//               <span className="flex items-center"><FaExternalLinkSquareAlt className="text-xl mr-2"/>
//               {experience?.website}</span>
//             </div>
//             <p>{experience?.description}</p>
//           </div>
//         </TECollapse>
//       </div>
//     </>
//   );
// }


// export default Experience;
