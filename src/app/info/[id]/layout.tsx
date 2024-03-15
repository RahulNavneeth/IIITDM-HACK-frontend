import { OTP } from "@/libs/components";
import { cookies } from "next/headers"
const PatientLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    const useCookies = cookies();
    const p_token = useCookies.get("p_token");
    if (!p_token) {
        return <OTP />
    }
    return (
        <div className="w-full h-full">
            {children}
        </div>
    );
}

export default PatientLayout;
