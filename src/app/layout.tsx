import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MessageProvider from "@/libs/providers/message";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "EHR (Electronic Health Record)",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="w-screen h-screen">
                    <MessageProvider />
                    {children}
                </div>
            </body>
        </html>
    );
}
