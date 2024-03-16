import { create } from 'zustand'

type PatientEmailType = {
    email: string
    setEmail: (r: string) => void
}

export const usePatientEmailStore = create<PatientEmailType>((set) => ({
    email: "",
    setEmail: (r) => set({ email: r }),
}))
