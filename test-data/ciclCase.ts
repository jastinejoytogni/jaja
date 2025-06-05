export type CICLCase = {
  name: string;
  age: number;
  offense: string;
  status: string;
  statusColor: string;
  officer: string;
};

export const ciclCases: CICLCase[] = [
  {
    name: "Amberly Garcia",
    age: 17,
    offense: "Theft",
    status: "Ongoing",
    statusColor: "#FFD600", // yellow
    officer: "Officer Smith",
  },
  {
    name: "Jastine Joy Togñi",
    age: 15,
    offense: "Vandalism",
    status: "Resolved",
    statusColor: "#43A047", // green
    officer: "Officer Johnson",
  },
  {
    name: "Chris Angelo Bozar" ,
    age: 16,
    offense: "Assualt",
    status: "Court Hearing",
    statusColor: "#FF5252", // red
    officer: "Officer Williams",
  },
];