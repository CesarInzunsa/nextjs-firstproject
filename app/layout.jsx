import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container mx-auto h-[calc(150vh-7rem)] flex justify-center items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
