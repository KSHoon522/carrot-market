import { useEffect } from "react";
import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  email: string;
  password: string;
  errors?: string;
}

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
    setValue,
    reset,
  } = useForm<LoginForm>({ mode: "onChange" });
  const onValid = (data: LoginForm) => {
    console.log("valid");
    setError("errors", { message: "backend is offline" });
    reset();
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  console.log(watch("email"));
  useEffect(() => {
    setValue("username", "hello");
  });
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)} className="flex flex-col">
      <input
        {...register("username", {
          required: "Username is required",
          minLength: { value: 5, message: "need more than 4 characters" },
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", {
          required: "Email is required",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") || "gmail is not allowed",
          },
        })}
        type="email"
        placeholder="Email"
      />
      <span className={`${errors.email?.message ? "text-red-500" : ""}`}>
        {errors.email?.message}
      </span>
      <input
        {...register("password", { required: true })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="create account" />
      {errors.errors?.message}
    </form>
  );
}
