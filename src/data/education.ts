export interface Education {
  year: string;
  institution: string;
  major: string;
  gpa?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2024-Present",
    institution: "Hanoi-Amsterdam High School for the Gifted",
    major: "Physics",
    gpa: "10/10",
  },
  {
    year: "2022-2024",
    institution: "Archimedes Academy Secondary School",
    major: "Physics, English",
    gpa: "10/10",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
