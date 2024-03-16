import { create } from 'zustand'

type OTPType = {
    is: boolean
    setIs: (r: boolean) => void
}

export const UseOTPStore = create<OTPType>((set) => ({
    is: false,
    setIs: (r) => set({ is: r }),
}))
