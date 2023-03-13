import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Favourite } from "./components/Account/Favourite/Favourite";
import { Notification } from "./components/Account/Notification/Notification";
import { Profile } from "./components/Account/Profile/Profile";
import { HomePage } from "./components/Homepage/HomePage";
import  Register  from "./components/Register/Register";
import  Login  from "./components/Login/Login";
import HelpCenter from "./components/Help-center/Help-center";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="homepage" element={<HomePage />} />
      <Route path="favourite" element={<Favourite />} />
      <Route path="notification" element={<Notification />} />
      <Route path="profile" element={<Profile />} />
      <Route path="login" element={<Login />} />
      <Route path="helpcenter" element={<HelpCenter />} />
    </Routes>
  );
}

export default App;
