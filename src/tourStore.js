import { create } from "zustand";

const stops = [
  {
    id: "side-menu",
    content: "Click this button to see other food categories",
  },
  {
    id: "login",
    content: "Click here to login and see your preferences",
  },
  {
    id: "protein",
    content: "Here you can see the amount of protein in each food",
  },
];

export const useTourStore = create((set, get) => ({
  isShown: true,
  index: 0,
  isFirst: () => get().index === 0,
  isLast: () => get().index === stops.length - 1,
  prev: () =>
    set((state) => ({
      index: Math.max(0, state.index - 1),
    })),
  next: () =>
    set((state) => ({
      isShown: state.index < stops.length - 1,
      index: Math.min(state.index + 1, stops.length - 1),
    })),
  skip: () => set({ isShown: false }),
  getCurrent: () => stops[get().index],
  isStepActive: (stepId) => get().isShown && stepId === stops[get().index].id,
}));
