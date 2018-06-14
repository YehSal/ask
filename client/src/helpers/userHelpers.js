export const isStudent = (user) => user && user.role === 2 ? true : false;
export const isProfessor = (user) => user && user.role === 1 ? true: false;
export const isUnregistered = (user) => user && user.role == 0 ? true: false;
