"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import MessageProvider from "@/libs/providers/message";
import { usePathname } from "next/navigation"
import { useCookies } from 'next-client-cookies';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookies = useCookies()
    const pathname = usePathname()
    if (!cookies.get("p_token") && !cookies.get("d_tokken") && !cookies.get("h_token") && pathname !== "/login" && pathname !== "/register" && pathname !== "/doctor/register" && pathname !== "/doctor/login" && pathname !== "/hospital/register" && pathname !== "/hospital/login" && pathname !== "/admin/login" && pathname !== "/signup") {
        window.location.href = "/login"
    }
    return (
        <html lang="en">
            <head>
                <title>EHR (ELECTRONIC HEALTH RECORD)</title>
            </head>
            <body className={inter.className}>
                <div className="w-screen h-screen">
                    <MessageProvider />
                    {children}
                </div>
            </body>
        </html>
    );
}
