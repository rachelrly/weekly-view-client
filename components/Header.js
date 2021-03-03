import React from "react";
import Link from "next/link";
import TokenService from "../services/token-service";


// Had to swap this to an arrow to preserve this for token service
const Header = () => {
  
  const loggedIn = TokenService.hasAuthToken();


  const handleLogoutClick = () => {
    Context.processLogout();
  };

  // spot for hamburger menu / logout
  const logOutLink = (
    <Link href="/login" >
      <a onClick={handleLogoutClick} className="button">Log out</a>
    </Link>
  );

  // login Link
  const LogInLink = (
    <Link href="/login">
      <a className="button">Login</a>
    </Link>
  );


  return (
    <header>
      <Link href="/">
        <h1>Weekly View</h1>
      </Link>
      {loggedIn ? logOutLink : LogInLink}
    </header>
  );
};

export default Header;
