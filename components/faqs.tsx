// "use client";

// type FAQItem = {
//   question: string;
//   answer: string;
// };

// type FAQProps = {
//   faqs: FAQItem[];
// };

// export default function FAQ({ faqs }: FAQProps) {
//   return (
//     <section className="py-16 px-6 max-w-4xl mx-auto">
//       <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-green-300 to-emerald-500 text-transparent bg-clip-text drop-shadow-lg">
//         Frequently Asked Questions
//       </h2>

//       <div className="space-y-4">
//         {faqs.map((faq, i) => (
//           <details
//             key={i}
//             className="group bg-emerald-900/70 backdrop-blur-md border border-emerald-700 rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
//           >
//             <summary className="font-semibold text-lg flex justify-between items-center list-none group-open:text-green-400">
//               {faq.question}
//               <span className="ml-2 text-green-400 group-open:rotate-45 transition-transform">
//                 +
//               </span>
//             </summary>
//             <p className="mt-3 text-gray-200 leading-relaxed text-sm">
//               {faq.answer}
//             </p>
//           </details>
//         ))}
//       </div>
//     </section>
//   );
// }
