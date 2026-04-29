// hooks/useProjects.ts
import { projects } from "@/utils/constants/projects";

export const useProjects = () => {
  return {
    // Get all projects
    getAllProjects: () => projects,

    // Get one project by ID
    getProjectById: (id: string) => projects.find((p) => p.id === id),

    // Get all projects except one (by ID)
    getAllProjectsExcept: (id: string) => projects.filter((p) => p.id !== id),

    // Additional utility functions
    getProjectByNum: (num: string) => projects.find((p) => p.num === num),
    getTotalProjects: () => projects.length,
  };
};
