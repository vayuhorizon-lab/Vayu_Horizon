export interface JourneyEvent {
  id: string;
  step: string;
  title: string;
  description: string;
}

export const journey: JourneyEvent[] = [
  {
    id: "step1",
    step: "01",
    title: "FIRST MEETING",
    description: "Where it all begins.",
  },
  {
    id: "step2",
    step: "02",
    title: "THE FIRST STEP",
    description: "A group becomes a team.",
  },
  {
    id: "step3",
    step: "03",
    title: "THE JOURNEY",
    description: "Memories begin to grow.",
  },
  {
    id: "step4",
    step: "04",
    title: "THE HORIZON",
    description: "The story continues...",
  },
];
