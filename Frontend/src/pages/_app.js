import { SessionProvider, useSession } from "next-auth/react";
import "../styles/globals.css";
import { UserContext, UserProvider } from "@/common/userContext";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </UserProvider>
  );
}

export default MyApp;
