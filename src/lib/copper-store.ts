import { create } from "zustand";

type CopperNexusState = {
  selectedValueStages: string[];
  toggleValueStage: (id: string) => void;
  roadmapScenario: string;
  setRoadmapScenario: (scenario: string) => void;
};

export const useCopperNexusStore = create<CopperNexusState>((set) => ({
  selectedValueStages: ["mine", "milling", "flotation", "smelting", "anode", "cathode"],
  toggleValueStage: (id) =>
    set((state) => ({
      selectedValueStages: state.selectedValueStages.includes(id)
        ? state.selectedValueStages.filter((stageId) => stageId !== id)
        : [...state.selectedValueStages, id]
    })),
  roadmapScenario: "Full Copper Ecosystem",
  setRoadmapScenario: (scenario) => set({ roadmapScenario: scenario })
}));
