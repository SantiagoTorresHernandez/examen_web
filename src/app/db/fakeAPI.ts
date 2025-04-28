// lib/fakeApi.ts

type Employee = {
    username: string;
    password: string;
    fullName: string;
    email: string;
  };
  
  const employeesDB: Employee[] = [
    { username: "jgomez", password: "password123", fullName: "Juan Gómez", email: "jgomez@skytech.com" },
    { username: "mlopez", password: "pass456", fullName: "María López", email: "mlopez@skytech.com" },
    { username: "cruiz", password: "sky789", fullName: "Carlos Ruiz", email: "cruiz@skytech.com" },
  ];
  
  // Función para verificar usuario y contraseña
  export const authenticateEmployee = (username: string, password: string) => {
    const employee = employeesDB.find(
      (emp) => emp.username === username && emp.password === password
    );
  
    if (!employee) {
      throw new Error("Nombre de usuario o contraseña incorrectos.");
    }
  
    return employee;
  };
  