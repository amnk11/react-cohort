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
    if (!val.role.trim()) err.role = "role is required";
    if (!val.experience.trim()) err.experience = "experience is required";

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
        <div>
          <h1>Form submitted successfully</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <form onSubmit={submit} noValidate>
          <label>
            Full Name
            <input value={values.name} onChange={set('name')} />
          </label>
        </form>
      </div>
    </>
  );
};

export default ManualFrom;
