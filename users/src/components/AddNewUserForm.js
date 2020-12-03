import React from "react";
import { useForm } from "react-hook-form";

const AddNewUserForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div>
      <h1>Add New User</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="user name"
          name="user name"
          ref={register({ required: true, maxLength: 20 })}
        />
        <input
          type="text"
          placeholder="bio"
          name="bio"
          ref={register({ required: true, maxLength: 100 })}
        />
        <input
          type="text"
          placeholder="avatar url"
          name="avatar url"
          ref={register}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddNewUserForm;
