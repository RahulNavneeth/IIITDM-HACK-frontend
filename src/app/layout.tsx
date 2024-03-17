"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import MessageProvider from "@/libs/providers/message";
import { usePathname } from "next/navigation"
import { useEffect } from "react";
import { API_URL } from "@/libs/constants";
import axios from "axios";
import { usePatientStore } from "@/libs/store";
import { Logout } from "@/libs/components";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname()
    const PData = usePatientStore((i) => i.setData);
    useEffect(() => {
        const GET = async () => {
            if ("p_token" in localStorage) {
                const { data } = await axios.post(API_URL + "/patient/get-patient", {
                    type: "P",
                    "p_token": localStorage.getItem("p_token")
                })
                PData(data);
                return;
            }
            if ("d_token" in localStorage) {
                if (pathname !== "/info") window.location.href = "/info";
                return;
            }
            if (pathname !== "/login" && pathname !== "/signup") {
                window.location.href = "/login";
            }
        }
        GET();
    }, []);
    return (
        <html lang="en">
            <head>
                <title>EHR (ELECTRONIC HEALTH RECORD)</title>
            </head>
            <body className={inter.className}>
                <div className="w-screen h-screen">
                    <MessageProvider />
                    <Logout />
                    {children}
                </div>
            </body>
        </html>
    );
}
