import "./Login.scss";
import { useForm } from "react-hook-form";
import room from "./newroom.jpg";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="container">
        <div className="login-left">
          <div className="login-header">
            <h1>Signin</h1>
            <p>Please Signin to continue</p>
          </div>
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="login-form-content">
              <div className="login-form-item">
                <label for="email">Enter Email</label>
                <input type="text" {...register("email")} />
              </div>
              <div className="login-form-item">
                <label for="password">Enter Password</label>
                <input type="password" {...register("password")} />
              </div>

              <button type="submit">Register</button>
            </div>
            <div className="form-footer">
              <a href="/home">
                <img
                  width="30"
                  src="https://www.kindpng.com/picc/m/402-4026343_google-to-invade-your-home-to-show-off.png"
                  alt="google-signin"
                />{" "}
                Google Signin
              </a>
              <a href="/home">
                <img
                  width="30"
                  src="https://www.kindpng.com/picc/m/402-4026343_google-to-invade-your-home-to-show-off.png"
                  alt="google-signin"
                />{" "}
                Google Signin
              </a>
            </div>
          </form>
        </div>
        <div className="login-right">
          <img src={room} alt="right-pic" />
        </div>
      </div>
    </div>
  );
};

export default Login;
