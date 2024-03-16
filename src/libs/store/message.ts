import { create } from 'zustand'

type MessageType = {
    data: { message: string, type: "error" | "success" | "info", show: boolean }
    setData: (r: { message: string, type: "error" | "success" | "info", show: boolean }) => void
}

export const UseMessageStore = create<MessageType>((set) => ({
    data: { message: '', type: 'info', show: false },
    setData: (r) => set({ data: r }),
}))
