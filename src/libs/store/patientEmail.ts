import { create } from 'zustand'

type PatientEmailType = {
    email: string
    name: string
    uid: string
    setEmail: (r: { email: string, name: string, uid: string }) => void
}

export const UsePatientEmailStore = create<PatientEmailType>((set) => ({
    email: "",
    name: "",
    uid: "",
    setEmail: (r) => set({ email: r.email, name: r.name, uid: r.uid }),
}))
