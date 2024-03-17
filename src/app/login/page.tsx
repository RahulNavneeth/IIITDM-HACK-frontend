"use client"

import { API_URL } from "@/libs/constants";
import { useMessageStore, usePatientStore } from "@/libs/store";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation"
import { Spinner } from "@material-tailwind/react";

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [pass, setPass] = useState<string>("");
    const [type, setType] = useState<"H" | "D" | "P">("H");
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const MData = useMessageStore((i) => i.setData);
    const PData = usePatientStore((i) => i.setData);

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const { data } = await axios.post(API_URL + "/auth/get-token", {
                type,
                uid: email,
                pass
            }, {
                withCredentials: true
            })
            if (type === "H") localStorage.setItem(Object.entries(data)[1][0], Object.entries(data)[1][1] as string);
            else localStorage.setItem(Object.entries(data)[0][0], Object.entries(data)[0][1] as string)
            MData({ type: "success", message: "Logged in successfully", show: true });
            if (type === "P") {
                const { data } = await axios.post(API_URL + "/patient/get-patient", {
                    type: "P",
                    "p_token": localStorage.getItem("p_token")
                })
                PData(data);
                router.push("/info/cp");
                return;
            }
            if (type === "H") {
                localStorage.setItem("h_uid", email)
                router.push("/hospital");
                return;
            }
            if (type === "D") {
                localStorage.setItem("d_uid", email);
                localStorage.setItem("d_id", data["doctor_id"]);
                router.push("/info");
                return;
            }

        } catch (e) {
            MData({ type: "error", message: "Invalid credentials", show: true });
        } finally {
            setLoading(false);
        }
    }
    return (
        <div>
            <div className="w-full h-screen flex flex-col items-center justify-center">
                <div className="w-[90%] md:w-2/6 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center p-4">
                    <h1 className="text-2xl font-bold mb-8">Login</h1>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="uid" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                    <input onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                    <select onChange={(e) => setType(e.target.value as "H" | "D" | "P")} className="outline-none w-full p-4 border-2 mb-4 rounded-lg border-gray-200 shadow bg-white">
                        <option value="H">Hospital</option>
                        <option value="D">Doctor</option>
                        <option value="P">Patient</option>
                    </select>
                    <button onClick={handleSubmit} className="px-8 flex flex-col items-center mx-2 py-4 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold w-full">{loading ? <Spinner className="animate-spin h-6 w-6 text-blue-400" color="white" /> : "Submit"}</button>
                </div>
                <a href="/signup" className="text-sm mt-10 text-blue-700">Don&apos;t have an account? Signup as a Patient</a>
            </div>
        </div>
    )
}

export default Login;
