// localStorage.clear();
export const employees = [
  {
    id: 1,
    name: "Ramu",
    email: "j@j.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Complete Monthly Report",
        taskDescription: "Complete the monthly report.",
        taskDate: "2025-04-05",
        category: "Report",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Attend team meeting",
        taskDescription: "Attend team meeting.",
        taskDate: "2025-04-02",
        category: "Meeting",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Submit quarterly budget.",
        taskDescription: "Submit quarterly budget.",
        taskDate: "2025-03-28",
        category: "Finance",
      },
    ],
  },
  {
    id: 2,
    name: "Devu",
    email: "employee2@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare training materials.",
        taskDescription: "Prepare training materials.",
        taskDate: "2025-04-07",
        category: "Training",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Review project proposal.",
        taskDescription: "Review project proposal.",
        taskDate: "2025-04-01",
        category: "Review",
      },
    ],
  },
  {
    id: 3,
    name: "Jainil",
    email: "employee3@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Finalize marketing plan.",
        taskDescription: "Finalize marketing plan.",
        taskDate: "2025-04-03",
        category: "Marketing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Update website content.",
        taskDescription: "Update website content.",
        taskDate: "2025-03-30",
        category: "Content",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Organize team-building event.",
        taskDescription: "Organize team-building event.",
        taskDate: "2025-03-25",
        category: "Teamwork",
      },
    ],
  },
  {
    id: 4,
    name: "Meena",
    email: "employee4@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update client database.",
        taskDescription: "Update client database.",
        taskDate: "2025-04-06",
        category: "Database",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Write blog post on new features.",
        taskDescription: "Write blog post on new features.",
        taskDate: "2025-03-29",
        category: "Content",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Customer feedback analysis.",
        taskDescription: "Customer feedback analysis.",
        taskDate: "2025-03-22",
        category: "Customer Support",
      },
    ],
  },
  {
    id: 5,
    name: "Chintu",
    email: "employee5@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Task 1 for Chintu",
        taskDescription: "Research industry trends.",
        taskDate: "2025-04-09",
        category: "Research",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Task 2 for Chintu",
        taskDescription: "Prepare financial forecast.",
        taskDate: "2025-04-04",
        category: "Finance",
      },
    ],
  },
];

const admin = [
  {
    id: 0,
    name: "Admin leader jainil",
    email: "admin@example.com",
    password: "123",
    role: "admin",
  },
];

// Save data to localStorage
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const admin = JSON.parse(localStorage.getItem("admin")) || [];
  return { employees, admin };
};
