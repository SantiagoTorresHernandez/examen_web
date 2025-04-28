'use client';

import { useUser } from "../context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function WelcomePage() {
  const { employee } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!employee) {
      router.push("/"); // Redirigir a la página de inicio de sesión si no hay empleado autenticado
    }
  }, [employee, router]);

  if (!employee) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">
          ¡Hola, {employee.fullName}! Bienvenido al portal de SkyTech.
        </h1>
        <p className="text-lg text-gray-700">Tu correo: {employee.email}</p>
      </div>
    </div>
  );
}
