import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button, Input } from "../components/ui";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().email("Please enter correct email"),
  password: z.string().min(3),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { token, setToken } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post("http://localhost:5000/login", data);
      if (response?.data?.success) {
        setToken(response.data.success);
        navigate("/favourite");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container flex flex-col h-screen items-center justify-center py-4 ">
      <h1 className="font-semibold py-4">Please Sign in...</h1>
      <form className="flex flex-col gap-4 ">
        <Input placeholder="email" {...register("email")} />
        {errors["email"] && <p>{errors["email"].message}</p>}
        <Input placeholder="password" {...register("password")} />
        {errors["password"] && <p>{errors["password"].message}</p>}
        <Button onClick={handleSubmit(onSubmit)}>Login</Button>
      </form>
    </div>
  );
};

export default LoginPage;
