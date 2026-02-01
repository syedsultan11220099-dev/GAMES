// import type { Metadata } from "next";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "2x App",
//   description: "Your betting app powered by Next.js",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="bg-gray-100">{children}</body>
//     </html>
//   );
// }
import "./globals.css";
import Navbar from "@/components/Navbar";
export const metadata = {
  title: "Earn rewards for playing your favorite games",
  description: "Authentication System",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
