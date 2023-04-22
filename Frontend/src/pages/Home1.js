import { Inter } from "next/font/google";
import { useSession, signIn, signOut } from "next-auth/react";
import { useContext } from "react";
import { UserContext } from "@/common/userContext";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  const { user, decoded } = useContext(UserContext);
  console.log(decoded);
  const handleSignout = (e) => {
    e.preventDefault();
    session ? signOut() : localStorage.removeItem("user");
  };
  return (
    <div className="header">
      <a href="#" onClick={handleSignout} className="btn-signin">
        <button>Sign out</button>
      </a>
      {session ? <img src={session.user.image}></img> : null}
      <Link href="/PostPet">Upload</Link>
    </div>
  );
}
