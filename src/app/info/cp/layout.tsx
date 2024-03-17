"use client"
import { OTP } from "@/libs/components";
import { useOTPStore, usePatientStore } from "@/libs/store";
import { useEffect, useState } from "react";
import { Spinner } from "@material-tailwind/react";

const PatientLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    const isOTP = useOTPStore((i) => i.is);
    const isSETOTP = useOTPStore((i) => i.setIs);
    const PData = usePatientStore((i) => i.data);
    useEffect(() => {
        if (!("p_token" in localStorage)) {
            isSETOTP(true);
            return;
        }
    }, [])
    if (isOTP) {
        return (
            <OTP />
        )
    }
    if (!PData) {
        return (
            <div className="w-screen h-screen flex items-center justify-center">
                <div className="w-2/6 bg-white flex flex-col items-center justify-center p-4">
                    <Spinner className="animate-spin h-6 w-6 text-blue-400" color="white" />
                </div>
            </div>
        )
    }
    return (
        <div className="w-screen h-screen bg-gray-50">
            {children}
        </div>
    );
}

export default PatientLayout;
