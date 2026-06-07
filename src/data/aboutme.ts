export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Pham Tran Hoang Anh",
  title: "Student",
  institution: "Hanoi-Amsterdam High School for the Gifted",
  // Note that links work in the description
  description:
    "I am a final year student at Hanoi-Amsterdam High School for the Gifted, and I specialize in computer science and physics.",
  email: "pthoanganh2009@gmail.com",
  imageUrl:
    "",
  googleScholarUrl: "",
  githubUsername: "swiftberries",
  linkedinUsername: "",
  twitterUsername: "",
  blogUrl: "",
  cvUrl: "https://",
  institutionUrl: "https://hn-ams.edu.vn/",
  // altName: "",
  // secretDescription: "I like dogs.",
};
