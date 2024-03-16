"use client"
import { useState } from "react";
import { useParams } from "next/navigation"
import { Spinner } from "@material-tailwind/react";
import { useMessageStore, usePatientEmailStore } from "@/libs/store";

const OTP = () => {
    const [sndReq, setSndReq] = useState(false);
    const [reqLoading, setReqLoading] = useState(false);
    const [OTP, setOTP] = useState("");
    const [OTPInput, setOTPInput] = useState("");
    const [email, setEmail] = useState("");

    const useMessage = useMessageStore((i) => i.setData);
    const usePatientEmail = usePatientEmailStore((i) => i.email);

    const params = useParams();

    const handleSubmit = async () => {
        if (OTP === OTPInput) {
            // SET COOKIE
            useMessage({ show: true, message: "Validated succesfully", type: "success" });
            return;
        }
        useMessage({ show: true, message: "Invalid OTP", type: "error" });
    }

    const handleRequest = async () => {
        setReqLoading(true);
        try {
            // TODO ASSWATH API
            const OTP_DATA = Math.random().toString().slice(2, 8);
            setOTP(OTP_DATA);
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
                    <div className="font-bold text-3xl text-gray-800 mb-8">Send request to &quot;{params["id"]}&quot; for gaining access</div>
                    <div className="w-2/6 flex flex-col gap-4">
                        <input onChange={(e) => setEmail(e.target.value)} type="text" value={usePatientEmail} placeholder="Email" className="outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
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
                    <button onClick={() => handleSubmit()} className="px-4 py-4 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default OTP;
