export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "2025 - 2026",
    title: "Programmer & Logistics Coordinator",
    company: "VEX V5 Robotics, Overwatch 28176N",
    description:
      "Programmed autonomous control routines and driver-assist algorithms using C++, contributing to a 30-point increase in average skills scores. Co-authored a 200+ page comprehensive engineering development notebook documenting iterative design processes, securing Tournament Champion at the National level. Coordinated team logistics, parts procurement, and workflow schedules for 8 team members across a 3-month competitive season.",
    advisor: "",
    companyUrl: "",
  },
  {
    date: "2024 - 2027",
    title: "Principal Investigator",
    company: "Independent Machine Learning Research",
    description:
      "Engineered predictive time-series models utilizing iterative Linear Quadratic Regulators and LSTM neural networks. Analyzed datasets to forecast financial equities and sports match outcomes, achieving a prediction accuracy above 90%. Drafted a 26-page technical research paper detailing algorithmic efficiency comparisons.",
    manager: "",
    companyUrl: "",
  },
  {
    date: "2025 - 2027",
    title: "Teaching Assistant",
    company: "SAT Felis",
    description:
      "Audited and rigorously fact-checked over 200 SAT practice exams and 1000+ questions, ensuring complete technical accuracy for the center’s database. Collaborated with a team of 8 teaching assistants to streamline grading and tutoring operations, reducing material review time.",
    manager: "Nghiem Duc An",
    companyUrl: "https://satfelis.izteach.vn/"
  },
  {
    date: "Summer 2025",
    title: "Participant",
    company: "War Veteran Relief Fundraising",
    description: "Allocated 100% of generated funds to provide direct financial and medical relief to 50+ war veterans residing in Ninh Binh Province.",
  },
  {
    date: "Summer 2025",
    title: "Logistics Facilitator",
    company: "Youth Union",
    description: "Facilitated national examination logistics for 1000+ students, coordinating check-in protocols and ensuring strict testing compliance. Managed crowd control and student support stations alongside 30 Youth Union members, reducing test-day processing delays.",

  },
  {
    date: "Fall 2024",
    title: "Prop-maker",
    company: "Ngay Hoi Anh Tai (schoolwide competition)",
    description: "Outperformed 60+ competing classes to secure 1st prize overall, evaluated on criteria of design, teamwork, and presentation."
  }
];
