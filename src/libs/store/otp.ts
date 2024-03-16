import { create } from 'zustand'

type OTPType = {
    is: boolean
    setIs: (r: boolean) => void
}

export const useOTPStore = create<OTPType>((set) => ({
    is: false,
    setIs: (r) => set({ is: r }),
}))
