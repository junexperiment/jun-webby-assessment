import { create } from 'zustand';

// This seciton is for task type definition
export type Task = {
  id: string;
  name: string;
  type: string;
  status: string;
};

// This section is for Store shape
type TaskStore = {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  deleteTask: (id: string) => void;
};

// this section is Zustand store implementation
export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],

  // this section is to Add a new task
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),

  // To Update an existing task by ID
  updateTask: (updatedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      ),
    })),

  // To Delete a task by ID
  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
}));