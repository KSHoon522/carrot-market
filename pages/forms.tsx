import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  email: string;
  password: string;
}

export default function Forms() {
  const { register, watch, handleSubmit } = useForm<LoginForm>();
  const onValid = (data: LoginForm) => {
    console.log("valid");
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  console.log(watch());
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register("username", {
          required: "Username is required",
          minLength: { value: 5, message: "need more than 4 characters" },
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", { required: true })}
        type="email"
        placeholder="Email"
      />
      <input
        {...register("password", { required: true })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="create account" />
    </form>
  );
}
