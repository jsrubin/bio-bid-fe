import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LoginCallback, useOktaAuth } from "@okta/okta-react";
import "./Login.css";

export default function AutoLogin() {
  // const token = props.location.hash.split("#id_token=")[1].split("&")[0];
  const { authService, authState } = useOktaAuth();
  let location = useLocation();

  useEffect(() => {
    authService.handleAuthentication();
    if (location.hash.includes("#id_token")) {
      authService.login("/service-providers");
      // redirect to '/service-providers' after login
    }
  });
  console.log("authservice and state:", authService, authState);
  authService.getUser().then(console.log);

  return (
    <div>
      <div style={{ display: "none" }}>
        <LoginCallback style={{ width: "1px" }} />
      </div>
    </div>
  );
}
