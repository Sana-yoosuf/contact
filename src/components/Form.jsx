import { useForm } from "react-hook-form";

const Form = ({formSub}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onFormSub = (data) => {
    data.id=Date.now();
    data.fav=false;
    formSub(data)
    // console.log(data);
    reset()
  };
  return (
    <div className="col-sm-4 shadow rounded g-5 ">
      <h1 className="text-center pt-3 text-secondary h2">Add Contact</h1>
      <form onSubmit={handleSubmit(onFormSub)}>
        <div className="form-group ">
          <label className="col-form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <small className="text-danger">{errors.name.message}</small>
          )}
        </div>

        <div className="form-group ">
          <label className="col-form-label">Email:</label>
          <input
            type="text"
            className="form-control"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[.a-zA-Z0-9-]+)*$/,
                message: "Invalid Email Address",
              },
            })}
          />
          {errors.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
        </div>

        <div className="form-group ">
          <label className="col-form-label">Phone:</label>
          <input
            type="text"
            className="form-control"
            {...register("phone", {
              required: "Phone is required",
              pattern: {
                value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                message: "Invalid phone number",
              },
            })}
          />
          {errors.phone && (
            <small className="text-danger">{errors.phone.message}</small>
          )}
        </div>
        <input
          type="submit"
          className="btn btn-primary my-3"
          value="Add Contact"
        />
      </form>
    </div>
  );
};

export default Form;
