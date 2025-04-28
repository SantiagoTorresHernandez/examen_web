'use client';

import { createContext, useContext, useState, ReactNode } from "react";

type Employee = {
  username: string;
  fullName: string;
  email: string;
};

type UserContextType = {
  employee: Employee | null;
  setEmployee: (employee: Employee) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [employee, setEmployee] = useState<Employee | null>(null);

  return (
    <UserContext.Provider value={{ employee, setEmployee }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser debe usarse dentro de un UserProvider");
  }
  return context;
}
