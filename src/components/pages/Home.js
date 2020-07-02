import React, { useContext } from "react";

import UserContext from "../../context/UserContext";
import Menu from "../auth/Menu"
export default function Home() {
  const { userData } = useContext(UserContext);


  // console.log(window.localStorage.getItem("auth-token"));

  return (
    <div className="page">
      {userData.user ? (<>
        <Menu name={userData.user.displayName} />
        <h1>Welcome {userData.user.displayName}</h1>




      </>) : (
          <>
            <h2>You are not logged in</h2>

          </>
        )}
    </div>
  );
}

