"use client"
import { useState } from "react";
import { Spinner } from "@material-tailwind/react";
import { useMessageStore, useOTPStore, usePatientEmailStore } from "@/libs/store";
import axios from "axios";
import { API_URL } from "@/libs/constants";
import { useRouter } from "next/navigation";

const OTP = () => {
    const [sndReq, setSndReq] = useState(false);
    const [reqLoading, setReqLoading] = useState(false);
    const [otpLoading, setOTPLoading] = useState(false);
    const [OTP, setOTP] = useState("");
    const [OTPInput, setOTPInput] = useState("");

    const router = useRouter();

    const M = useMessageStore((i) => i.setData);
    const PEmail = usePatientEmailStore((i) => i.email);
    const PName = usePatientEmailStore((i) => i.name);

    const isSETOTP = useOTPStore((i) => i.setIs);

    const handleSubmit = async () => {
        if (OTP === OTPInput) {
            setOTPLoading(true);
            try {
                const { data } = await axios.post(API_URL + "/auth/get-token", {
                    uid: localStorage.getItem("d_uid"),
                    email: PEmail,
                    d_token: localStorage.getItem("d_token")
                }, {
                    withCredentials: true
                })
                M({ show: true, message: "Validated succesfully", type: "success" });
                localStorage.setItem("p_token", data["p_token"]);
                isSETOTP(false);
                router.push("/info/cp");
            } catch (e) {
                //
            } finally {
                setOTPLoading(false);
            }
            return;
        }
        M({ show: true, message: "Invalid OTP", type: "error" });
    }

    const handleRequest = async () => {
        setReqLoading(true);
        try {
            const OTP_DATA = Math.random().toString().slice(2, 8);
            setOTP(OTP_DATA);
            await axios.post(API_URL + "/doctor/send-mail", {
                otp: OTP_DATA,
                d_token: localStorage.getItem("d_token"),
                uid: localStorage.getItem("d_uid"),
                type: "D",
                email: PEmail
            })
            M({ show: true, message: "OTP sent to patient", type: "success" });
            setSndReq(true);
        } catch (e) {
            // 
        } finally {
            setReqLoading(false);
        }
    }

    if (!sndReq) {
        return (
            <div className="w-full h-full">
                <div className="w-full h-full p-10 flex flex-col items-center justify-center bg-gray-50">
                    <div className="font-bold text-3xl text-gray-800 mb-8">Send request to &quot;{PName}&quot; for gaining access</div>
                    <div className="w-2/6 flex flex-col gap-4">
                        <button onClick={() => handleRequest()} className="flex flex-col items-center justify-center px-4 py-4 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold">{!reqLoading ? "Request" : <Spinner className="animate-spin h-6 w-6 text-blue-400" color="white" />}</button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="w-full h-full">
            <div className="w-full h-full p-10 flex flex-col items-center justify-center bg-gray-50">
                <div className="font-bold text-3xl text-gray-800 mb-8">Enter OTP</div>
                <div className="w-2/6 flex flex-col gap-4">
                    <input onChange={(e) => setOTPInput(e.target.value)} type="number" placeholder="Enter OTP" className="outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                    <button onClick={() => handleSubmit()} className="px-4 py-4 rounded flex flex-col items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold">{otpLoading ? <Spinner className="animate-spin h-6 w-6 text-blue-400" color="white" /> : "Submit"}</button>
                </div>
            </div>
        </div>
    )
}

export default OTP;
