export type PendingTask = {
  title: string;
  due: string;
  tagColor: string;
};

export const pendingTasks: PendingTask[] = [
  {
    title: "Follow-up: Jane Doe (CAR)",
    due: "Tomorrow",
    tagColor: "#FFD600", // yellow
  },
  {
    title: "Case Review: John Smith (CICL)",
    due: "Overdue",
    tagColor: "#FF5252", // red
  },
  {
    title: "Monthly Report Submission",
    due: "3-days",
    tagColor: "#40C4FF", // light blue
  },
];
