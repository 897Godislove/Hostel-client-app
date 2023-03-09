import "./Login.scss";
// import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import { useForm } from "react-hook-form";
import room from "./pow.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material";

const Login = () => {
  const [profile, setProfile] = useState([]);

  const onSuccess = (res) => {
    setProfile(res.profileObj);
    // console.log(res);
  };
  const onFailure = (err) => {
    console.log("failed", err)
  };

  const clientId =
    "96539628632-rjkoq6dcbit2pdpld3ceucpakpt0aavv.apps.googleusercontent.com";

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const Linklist = styled(Link)({
    color: 'white'
  })

  return (
    <div>
      <div className="container">
        <div className="login-left">
          <div className="login-header">
            <h1>Signin</h1>
            <p>Please Signin to continue </p>
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

              <Linklist to="/homepage"><button type="submit" className="login-button">
                Sign in
              </button></Linklist>
            </div>
            <div className="form-footer">
              {/* <GoogleLogin
                className="google"
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              /> */}
              {/* <a href="/home">
                <img
                  width="30"
                  src="https://www.kindpng.com/picc/m/402-4026343_google-to-invade-your-home-to-show-off.png"
                  alt="google-signin"
                />{" "}
                Google Signin
              </a> */}
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
