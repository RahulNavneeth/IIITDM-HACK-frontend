"use client"

import { useMessageStore } from "@/libs/store";
import { usePathname, useRouter } from "next/navigation"

const Logout = () => {
    const useMessageData = useMessageStore((i) => i.setData);
    const pathname = usePathname();
    const router = useRouter();
    const handleLogout = () => {
        localStorage.clear();
        useMessageData({ type: "success", message: "Logged out successfully", show: true });
        router.push("/login");
    }
    if (pathname === "/login" || pathname === "/signup") return null;
    return (
        <button onClick={handleLogout} className="px-4 z-10 shadow-md rounded-md py-2 bg-red-400 absolute m-2 right-0 font-bold">
            logout?
        </button>
    )
}

export default Logout;
