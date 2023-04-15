import { JetBrains_Mono } from "next/font/google";

import "./globals.css";

export const metadata = {
  title: "Password Generator App",
  description: "Frontend Mentor Challenge",
};

const jetBrainMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jetBrainMono.variable} font-jetbrains-mono`}>
        <main className="grid min-h-screen place-items-center bg-gray-darkest text-cream">
          {children}
        </main>
      </body>
    </html>
  );
}
