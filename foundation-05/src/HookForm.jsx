import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ROLES = ["frontend", "backend", "Ai engineer"];

const HookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    getValues,
  } = useForm({
    defaultValues: {
      name: "Aman",
    },
    mode: "onTouched",
  });

  function submit(data) {
    return new Promise((res) => console.log("submitted", data));
  }

  if (isSubmitSuccessful) {
    return (
      <div>
        <h1>Submitted successfully</h1>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          Full Name
          <input {...register("name", { required: "name is required" })} />
          {errors.name && <span>{errors.name.message}</span>}
        </label>
        <label>
          Email
          <input {...register("email", { required: "email is required" })} />
        </label>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "submitting..." : "submit"}
        </button>
      </form>
    </div>
  );
};

export default HookForm;
