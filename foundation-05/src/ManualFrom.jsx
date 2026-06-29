import React, { useState } from "react";

const ROLES = ["frontend", "backend", "Ai engineer"];

const ManualFrom = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    role: "frontend",
    experience: "",
    cover: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function set(field) {
    return (e) => setValues((val) => ({ ...val, [field]: e.target.value }));
  }

  function validate(val) {
    const err = {};
    if (!val.name.trim()) err.name = "name is required";
    if (!val.email.trim()) err.email = "email is required";
    // if (!val.role.trim()) err.role = "role is required";
    // if (!val.experience.trim()) err.experience = "experience is required";

    return err;
  }

  function submit(event) {
    event.preventDefault();
    const errRes = validate(values);
    if (errRes) setErrors(errRes);

    if (Object.keys(errRes).length === 0) setSubmitted(true);
  }

  if (submitted) {
    return (
      <>
        <div className="mx-auto flex min-h-screen max-w-md items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
          <div className="w-full rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-8 text-center shadow-md sm:px-8">
            <h1 className="text-lg font-semibold text-emerald-700 sm:text-xl">
              Form submitted successfully {values.name}
            </h1>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex justify-center px-4 py-8 sm:px-6 lg:px-8">
        <form
          onSubmit={submit}
          noValidate
          className="mx-auto flex max-w-md flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg sm:p-6 md:p-8"
        >
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Full Name
            <input
              value={values.name}
              onChange={set("name")}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            {errors.name && (
              <span className="text-sm text-red-500">{errors.name}</span>
            )}
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Email
            <input
              value={values.email}
              onChange={set("email")}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            {errors.email && (
              <span className="text-sm text-red-500">{errors.email}</span>
            )}
          </label>
          <button
            type="submit"
            className="mt-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 sm:px-5"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ManualFrom;
