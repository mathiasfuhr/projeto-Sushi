import { create } from "zustand";

type States = {
  name: string;
  address: {
    street: string;
    number: string;
    complement?: string | undefined;
    district: string;
    city: string;
  };
};

type Actions = {
  setName: (name: States["name"]) => void;
  setAddress: (address: States["address"]) => void;
};

const initalState: States = {
  name: "",
  address: {
    street: "",
    number: "",
    complement: "",
    district: "",
    city: "",
  },
};

export const useCheckoutStore = create<States & Actions>()((set) => ({
  ...initalState,
  setName: (name) => set((state) => ({ ...state, name })),
  setAddress: (address) => set((state) => ({ ...state, address })),
}));
