"use client"

import { Message } from "@/libs/components";
import { useMessageStore } from "@/libs/store";

const MessageProvider = () => {
    const useMessage = useMessageStore((i) => i.data)
    return (
        useMessage.show && <Message message={useMessage.message} type={useMessage.type} />
    )
}

export default MessageProvider;
