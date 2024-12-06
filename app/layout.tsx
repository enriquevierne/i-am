import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={nunito.className}>
            <body className="antialiased">{children}</body>
        </html>
    );
}