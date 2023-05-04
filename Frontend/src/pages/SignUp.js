import { useState, useRef, useEffect, useContext } from "react";
import axios from "axios";
import styles from "../styles/pages/sign.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/react";
import { UserContext } from "@/common/userContext";
import { BsFacebook, BsGoogle } from "react-icons/bs";
export default function SignUp() {
  const { data: session } = useSession();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [rescode, setRescode] = useState(null);
  const [err, setErr] = useState(null);
  const [stage, setStage] = useState(0);
  const [code, setCode] = useState(null);
  const { user, setuser } = useContext(UserContext);
  const ref = useRef(0);
  const router = useRouter();
  // const baseUrl = "https://amitanfy.onrender.com/";
  const baseUrl = "http://localhost:3030/";

  useEffect(() => {
    session ? router.push("/") : null;
  }, [session]);
  const verifyAccount = (val) => {
    axios
      .put(baseUrl + "verifyuser?code=" + val + "&user=" + username)
      .then((res) => {
        localStorage.setItem("user", res.data);
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClick = () => {
    if (username === "" || password == "" || email === "") {
      console.log("bad");
      return;
    }
    const body = {
      username: username,
      pass: password,
      email: email,
    };
    axios
      .post(baseUrl + "signup", body)
      .then((res) => {
        setErr("Verify your email");
        setRescode(200);
        setStage(1);
      })
      .catch((err) => {
        setRescode(err.response.status);
        setErr(err.response.data.messege);
      });
  };
  const handleSignin = (e) => {
    e.preventDefault();
    signIn("google");
  };
  const handleSignin2 = (e) => {
    e.preventDefault();
    signIn("facebook");
  };
  if (!stage)
    return (
      <div className={styles.frame}>
        <div className={styles.main}>
          <div className={styles.pic}></div>
          <div className={styles.inp}>
            <h1 className={styles.title}>Create your new account</h1>
            <div style={rescode ? {} : { display: "none" }}>{err}</div>
            <div className={styles.inputcontainer}>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                placeholder="Email"
                className={styles.inputfield}
                type="text"
              />
              <label for="inputfield" className={styles.inputlabel}>
                Enter email
              </label>
              <span className={styles.inputhighlight}></span>
            </div>

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
              <label for="inputfield" className={styles.inputlabel}>
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
                placeholder="Password"
                className={styles.inputfield}
                type="password"
              />
              <label for="inputfield" className={styles.inputlabel}>
                Enter password
              </label>
              <span className={styles.inputhighlight}></span>
            </div>
            <button className={styles.butt} onClick={handleClick}>
              <span>Sign Up!</span>
            </button>
            <p className={styles.text}>
              Already have an account? <br />
              <Link href="/SignIn">Sign In</Link>
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
  else {
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
