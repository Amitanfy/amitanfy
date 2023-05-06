import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import styles from "../styles/pages/sign.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { UserContext } from "@/common/userContext";
import { useSession, signIn } from "next-auth/react";
import { BsFacebook } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import { headers } from "next/dist/client/components/headers";
export default function SignIn() {
  const { data: session } = useSession();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rescode, setRescode] = useState(null);
  const [err, setErr] = useState(null);
  const [stage, setStage] = useState(0);
  const [code, setCode] = useState(null);
  const { user, decoded } = useContext(UserContext);
  const ref = useRef(0);
  const router = useRouter();
  // const baseUrl = "https://amitanfy.onrender.com/";
  const baseUrl = "http://localhost:3030/";

    useEffect(() => {
      session? axios.post(baseUrl + "platformsignin",{token : session.jwt},{headers:{ authorization: session.jwt}}).then((res)=>{localStorage.setItem("user", res.data);router.push("/");}) : null
    }, [session]);
  

  const verifyAccount = (val) => {
    axios
      .put(baseUrl + "verifyuser?code=" + val + "&user=" + username)
      .then((res) => {
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = () => {
    const body = {
      username: username,
      pass: password,
    };
    axios
      .post(baseUrl + "signin", body)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("user", res.data);
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
        setRescode(err.response.status);
        setErr(err.response.data.messege);
        if (err.response.data.messege === "verify your email") {
          setStage(1);
        }
      });
  };
  const handleSignin = (e) => {
    e.preventDefault();
    signIn("google")
  };
  const handleSignin2 = (e) => {
    e.preventDefault();
    signIn("facebook");
  };
  if (!stage) {
    return (
      <div className={styles.frame}>
        <div className={styles.main}>
          <div className={styles.pic}></div>
          <div className={styles.inp}>
            <h1>Welcome back</h1>
            <div style={rescode ? {} : { display: "none" }}>{err}</div>
            <div className={styles.inputcontainer}>
              <input
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={username}
                placeholder="Username"
                className={styles.inputfield}
                type="text"
              />
              <label htmlFor="inputfield" className={styles.inputlabel}>
                Enter username
              </label>
              <span className={styles.inputhighlight}></span>
            </div>

            <div className={styles.inputcontainer}>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                type="password"
                placeholder="Password"
                className={styles.inputfield}
              />
              <label htmlFor="inputfield" className={styles.inputlabel}>
                Enter password
              </label>
              <span className={styles.inputhighlight}></span>
            </div>
            <button className={styles.butt} onClick={handleClick}>
              <span>Sign In</span>
            </button>
            <p className={styles.text}>
              Don't have an account yet? <br />
              <Link href="/SignUp">Sign Up </Link>
            </p>
            <div>
              <BsGoogle
                style={{ cursor: "pointer" }}
                onClick={handleSignin}
                size="1.5rem"
              />
              <BsFacebook
                style={{ cursor: "pointer" }}
                onClick={handleSignin2}
                size="1.5rem"
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.frame}>
        <div className={styles.main}>
          <div className={styles.pic}></div>
          <div className={styles.codeinp}>
            <input
              onChange={(e) => {
                setCode(e.target.value);
                e.target.value / 1000 >= 1
                  ? verifyAccount(e.target.value)
                  : null;
              }}
              value={code}
              ref={ref}
              className={styles.realinput}
            ></input>
            <input
              value={
                code >= 1
                  ? code / 10 >= 1
                    ? code / 100 >= 1
                      ? code / 1000 >= 1
                        ? Math.floor(code / 1000) % 10
                        : Math.floor(code / 100) % 10
                      : Math.floor(code / 10) % 10
                    : code
                  : null
              }
              onClick={() => {
                ref.current.focus();
              }}
              className={styles.codeinput}
            ></input>
            <input
              value={
                code / 10 >= 1
                  ? code / 100 >= 1
                    ? code / 1000 >= 1
                      ? Math.floor(code / 100) % 10
                      : Math.floor(code / 10) % 10
                    : code % 10
                  : null
              }
              onClick={() => {
                ref.current.focus();
              }}
              className={styles.codeinput}
            ></input>
            <input
              value={
                code / 100 >= 1
                  ? code / 1000 >= 1
                    ? Math.floor(code / 10) % 10
                    : code % 10
                  : null
              }
              onClick={() => {
                ref.current.focus();
              }}
              className={styles.codeinput}
            ></input>
            <input
              value={code / 1000 >= 1 ? code % 10 : null}
              onClick={() => {
                ref.current.focus();
              }}
              className={styles.codeinput}
            ></input>
          </div>
        </div>
      </div>
    );
  }
}
