import { create } from "zustand";

interface Problem {
  Title: string;
  Statement: string;
  Level: string;
  Input: string;
  Output: string;
  Contraints: string;
}

interface ProblemState {
  problems: Problem;
  updateProblem: <K extends keyof Problem>(key: K, value: Problem[K]) => void;
}

const useProblemStore = create<ProblemState>((set) => ({
  problems: {
    Title: "",
    Statement: "",
    Level: "",
    Input: "",
    Output: "",
    Contraints: "",
  },
  updateProblem: (key, value) =>
    set((state) => ({
      problems: { ...state.problems, [key]: value },
    })),
}));

export default useProblemStore;
