import { create } from "zustand";

const steps = [
  {
    id: "first-step",
    content: "Click this button to see more options",
  },
  {
    id: "login",
    content: "Login to see your last food choices",
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
  isLast: () => get().index === steps.length - 1,
  prev: () =>
    set((state) => ({
      index: Math.max(0, state.index - 1),
    })),
  next: () =>
    set((state) => ({
      isShown: state.index < steps.length - 1,
      index: Math.min(state.index + 1, steps.length - 1),
    })),
  skip: () => set({ isShown: false }),
  getCurrent: () => steps[get().index],
  isStepActive: (stepId) => get().isShown && stepId === steps[get().index].id,
}));
