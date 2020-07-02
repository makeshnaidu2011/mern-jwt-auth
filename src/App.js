import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Axios from "axios";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserContext from "./context/UserContext";
import { About, ContactUs, Services, Products, AdminPanel, UserConfig } from "./components/Routes/routes"
import Menu from "./components/auth/Menu"

import "./style.css";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);


  return (
    <>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Header />
        <div className="container">
          {userData.user && <Menu />}

          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {userData.user && <><Route path="/About" component={About} />
            <Route path="/ContactUs" component={ContactUs} />
            <Route path="/Products" component={Products} />
            <Route path="/Services" component={Services} />
            {userData.user.displayName === "Admin" && <>
              <Route path="/AdminPanel" component={AdminPanel} />
              <Route path="/UserConfig" component={UserConfig} />

            </>}



          </>}




        </div>
      </UserContext.Provider>

    </>
  );
}


