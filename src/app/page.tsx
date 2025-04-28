'use client';

import { useState } from "react";
import { authenticateEmployee } from "./db/fakeAPI";
import { useRouter } from "next/navigation";
import { useUser } from "./context/UserContext";

export default function LoginPage() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();
  const { setEmployee } = useUser();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const authenticatedEmployee = authenticateEmployee(formData.username, formData.password);
      setEmployee({
        username: authenticatedEmployee.username,
        fullName: authenticatedEmployee.fullName,
        email: authenticatedEmployee.email,
      });
      router.push("/welcome");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Iniciar Sesión en SkyTech</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Nombre de usuario</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-700">Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
