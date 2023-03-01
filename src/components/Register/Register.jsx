import "./Register.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import room from "./newroom.jpg";
import { schema } from "../../schema/validator";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
  // console.log(isSubmitting)
  const onSubmit = (data) => {
    console.log(data);
  };


  return (
    <div>
      <div className="container">
        <div className="register-left">
          <div className="register-header">
            <h1>Welcome to Our Application</h1>
            <p>Please Register to use the platform</p>
          </div>
          <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="register-form-content">
              <div className="register-form-item">
                <label for="email">Enter Email</label>
                <input type="text" {...register("email")} />
                <p className="form-error">{errors.email?.message}</p>
              </div>
              <div className="register-form-item">
                <label for="name">Enter Full Name</label>
                <input type="text" {...register("fullName")} />
                <p className="form-error">{errors.name?.message}</p>
              </div>
              <div className="register-form-item">
                <label for="password">Enter Password</label>
                <input type="password" {...register("password")} />
                <p className="form-error">{errors.password?.message}</p>
              </div>
              <div className="register-form-item">
                <label for="phone">Enter Phone Number</label>
                <input type="tel" {...register("phoneNumber")} />
                <p className="form-error">{errors.phoneNumber?.message}</p>
              </div>
              <div className="register-form-item">
                <select
                  id="role"
                  {...register("role")}
                  style={{ width: "200px" }}
                >
                  <option value="role">--Select a role--</option>
                  <option value="user">User</option>
                  <option value="vendor">Vendor</option>
                </select>
              </div>
              <button type="submit">Register</button>
            </div>
            <div className="form-footer">
              <a href="/home">
                <img
                  width="30"
                  src="https://www.kindpng.com/picc/m/402-4026343_google-to-invade-your-home-to-show-off.png"
                  alt="google-signup"
                />{" "}
                Google Signup
              </a>
              <a href="/home">
                <img
                  width="30"
                  src="https://www.kindpng.com/picc/m/402-4026343_google-to-invade-your-home-to-show-off.png"
                  alt="google-signup"
                />{" "}
                Google Signup
              </a>
            </div>
          </form>
        </div>
        <div className="register-right">
          <img src={room} alt="right-pic" />
        </div>
      </div>
    </div>
  );
};

export default Register;
