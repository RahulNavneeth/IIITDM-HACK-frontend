"use client"

import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        if ("d_token" in localStorage) {
            window.location.href = "/info";
        } else if ("h_token" in localStorage) {
            window.location.href = "/hospital";
        } else if ("p_token" in localStorage) {
            window.location.href = "/info/cp";
        }
    }, [])
    return (
        <div className="w-full h-full flex flex-col items-center justify-center"> Loading... Please wait!!! </div>
    );
}
