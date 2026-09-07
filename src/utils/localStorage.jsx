const employees = [
  {
    id: 1,
    email: "ali@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Homepage",
        description:
          "Create the responsive homepage design for the company website.",
        date: "2026-09-07",
        category: "Design",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Review UI Components",
        description:
          "Review the existing UI components and suggest improvements.",
        date: "2026-09-08",
        category: "UI/UX",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Create Wireframes",
        description: "Create wireframes for the dashboard pages.",
        date: "2026-09-05",
        category: "Design",
      },
    ],
  },
  {
    id: 2,
    email: "ahmed@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Build Login API",
        description: "Develop the authentication API for employee login.",
        date: "2026-09-07",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Fix API Bugs",
        description: "Find and fix bugs reported in the user management API.",
        date: "2026-09-08",
        category: "Backend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Setup Database",
        description:
          "Configure the MongoDB database and create required collections.",
        date: "2026-09-04",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deploy Server",
        description: "Deploy the backend server to the production environment.",
        date: "2026-09-03",
        category: "DevOps",
      },
    ],
  },
  {
    id: 3,
    email: "hamza@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Write Test Cases",
        description: "Create test cases for the new authentication features.",
        date: "2026-09-07",
        category: "Testing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Test Registration",
        description:
          "Perform functional testing on the employee registration system.",
        date: "2026-09-08",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Test Dashboard",
        description: "Test dashboard functionality across different browsers.",
        date: "2026-09-06",
        category: "Testing",
      },
    ],
  },
  {
    id: 4,
    email: "usman@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Marketing Plan",
        description:
          "Prepare a marketing strategy for the upcoming product launch.",
        date: "2026-09-09",
        category: "Marketing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Social Media Campaign",
        description:
          "Prepare social media posts for the next product campaign.",
        date: "2026-09-10",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Competitor Research",
        description: "Research competitors and prepare a comparison report.",
        date: "2026-09-05",
        category: "Research",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Prepare Presentation",
        description:
          "Prepare the presentation for the weekly marketing meeting.",
        date: "2026-09-06",
        category: "Marketing",
      },
    ],
  },
  {
    id: 5,
    email: "zain@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update Documentation",
        description:
          "Update the project documentation with the latest API changes.",
        date: "2026-09-07",
        category: "Documentation",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Code Review",
        description:
          "Review the pull requests submitted by the development team.",
        date: "2026-09-08",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Team Meeting",
        description: "Attend the weekly development team meeting.",
        date: "2026-09-09",
        category: "Meeting",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Project Setup",
        description: "Complete the initial project setup and configuration.",
        date: "2026-09-04",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Client Report",
        description: "Prepare and submit the monthly client progress report.",
        date: "2026-09-02",
        category: "Reporting",
      },
    ],
  },
];

const admin = [{
    "id":1,
    "email":"admin@gmail.com",
    "password":"123"
}]

export const setLocalStorage = ()=>{
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"));
    return {employees, admin}
}