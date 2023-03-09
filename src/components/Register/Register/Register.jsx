import "./Register.scss";
// import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import room from "./pow.jpg";
import { schema } from "../../../schema/validator";
import { Link } from "react-router-dom";
import { styled } from "@mui/material";

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

  const Linklist = styled(Link)({
    color: 'white'
  })

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
              <Linklist to={'/login'}><button type="submit" className="register-button">
                Register
              </button></Linklist>
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
