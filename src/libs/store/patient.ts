import { create } from 'zustand'

type PatientType = {
    data: any | null
    setData: (r: any) => void
}

export const UsePatientStore = create<PatientType>((set) => ({
    data: null,
    setData: (r) => set({ data: r }),
}))
