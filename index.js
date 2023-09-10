// Basic CV Template in JavaScript

// Personal Information
const fullName = "John Doe";
const email = "john.doe@email.com";
const phone = "123-456-7890";
const address = "123 Main Street, City, Country";

// Career Objective
const careerObjective = "Experienced software developer seeking new opportunities.";

// Education
const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of XYZ",
    year: "2015 - 2019",
  },
  {
    degree: "High School Diploma",
    school: "ABC High School",
    year: "2011 - 2015",
  },
];

// Work Experience
const workExperience = [
  {
    position: "Software Engineer",
    company: "Tech Solutions Inc.",
    year: "2019 - Present",
    responsibilities: [
      "Developing web applications using JavaScript, HTML, and CSS.",
      "Collaborating with cross-functional teams to deliver projects on time.",
      "Troubleshooting and debugging software issues.",
    ],
  },
  {
    position: "Intern",
    company: "Software Co.",
    year: "Summer 2018",
    responsibilities: [
      "Assisted senior developers in coding and testing.",
      "Learned about software development best practices.",
    ],
  },
];

// Skills
const skills = [
  "JavaScript",
  "HTML/CSS",
  "React",
  "Node.js",
  "SQL",
  "Git",
];

// Print CV
console.log("Curriculum Vitae");
console.log("=================");
console.log("Full Name: " + fullName);
console.log("Email: " + email);
console.log("Phone: " + phone);
console.log("Address: " + address);
console.log("\nCareer Objective:");
console.log(careerObjective);
console.log("\nEducation:");
education.forEach((edu) => {
  console.log("- " + edu.degree + " at " + edu.school + " (" + edu.year + ")");
});
console.log("\nWork Experience:");
workExperience.forEach((exp) => {
  console.log("- " + exp.position + " at " + exp.company + " (" + exp.year + ")");
  console.log("  Responsibilities:");
  exp.responsibilities.forEach((resp) => {
    console.log("  - " + resp);
  });
});
console.log("\nSkills:");
skills.forEach((skill) => {
  console.log("- " + skill);
});
