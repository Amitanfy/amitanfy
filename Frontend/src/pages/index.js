import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useSession, signIn, signOut } from "next-auth/react";
import { useContext } from "react";
import { UserContext } from "@/common/userContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  const { user, setuser } = useContext(UserContext);
  console.log(session);
  const handleSignout = (e) => {
    e.preventDefault();
    signOut();
  };
  return (
    <div className="header">
      <a href="#" onClick={handleSignout} className="btn-signin">
        <button>Sign out</button>
      </a>
      {session ? <img src={session.user.image}></img> : null}
    </div>
  );
}
