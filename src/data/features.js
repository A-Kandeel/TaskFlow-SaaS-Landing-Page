import {WandSparkles, Target, FileText, Zap} from "lucide-react";

export const features = [
  {
    id: 1,
    icon: <WandSparkles />,
    tag: "AI Memory",
    title: "Think with context",
    description: "TaskFlow remembers the project, audience, goals, and tone so every output feels connected.",
  },
  {
    id: 2,
    icon: <Target />,
    tag: "Planning",
    title: "Turn briefs into plans",
    description: "Drop in a messy request and get a clear, prioritized action plan in seconds.",
  },
  {
    id: 3,
    icon: <FileText />,
    tag: "Creation",
    title: "Create ready-to-use work",
    description: "Generate briefs, emails, proposals, product copy, and summaries without starting from zero.",
  },
  {
    id: 4,
    icon: <Zap />,
    tag: "Workflow",
    title: "Move from idea to done",
    description: "Keep the work moving with reusable workflows your whole team can follow.",
  },
];
