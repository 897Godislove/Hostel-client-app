import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Favourite } from "./components/Account/Favourite/Favourite";
import { Notification } from "./components/Account/Notification/Notification";
import { Profile } from "./components/Account/Profile/Profile";
import { HomePage } from "./components/Homepage/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="fav" element={<Favourite />} />
      <Route path="noti" element={<Notification />} />
      <Route path="profi" element={<Profile />} />
      {/* <Route path="reg" element={<Register />} /> */}
      {/* <Route path="log" element={<Login />} /> */}
    </Routes>
  );
}

export default App;
