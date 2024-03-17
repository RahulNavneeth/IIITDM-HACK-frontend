"use client"

import { Message } from "@/libs/components";
import { useMessageStore } from "@/libs/store";

const MessageProvider = () => {
    const M = useMessageStore((i) => i.data)
    return (
        M.show && <Message message={M.message} type={M.type} />
    )
}

export default MessageProvider;
