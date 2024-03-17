import { useMessageStore } from "@/libs/store";

const Message = () => {
    const M = useMessageStore((i) => i.setData)
    const MData = useMessageStore((i) => i.data)
    setTimeout(() => {
        M({ show: false, message: "", type: "info" });
    }, 3000)
    return (
        <div style={{ background: MData.type === "error" ? "#ef4444" : MData.type === "success" ? "#22c55e" : "#3b82f6" }} className="text-black w-full flex flex-col items-center justify-center h-[40px] text-center absolute top-0 z-20">
            {MData.message}
        </div>
    )
}

export default Message;
