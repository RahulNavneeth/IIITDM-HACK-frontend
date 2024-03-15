import { useMessageStore } from "@/libs/store";

const Message = () => {
    const useMessage = useMessageStore((i) => i.setData)
    const useMessageData = useMessageStore((i) => i.data)
    setTimeout(() => {
        useMessage({ show: false, message: "", type: "info" });
    }, 3000)
    return (
        <div style={{ background: useMessageData.type === "error" ? "#ef4444" : useMessageData.type === "success" ? "#22c55e" : "#3b82f6" }} className="text-black w-full flex flex-col items-center justify-center h-[40px] text-center absolute top-0">
            {useMessageData.message}
        </div>
    )
}

export default Message;
