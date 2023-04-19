import { SessionProvider, useSession } from "next-auth/react"
import '../styles/globals.css'
import { UserContext } from "@/common/userContext"
import { useEffect, useState } from "react"

function MyApp({ Component, pageProps }) {
  const [user,setuser]=useState();
  useEffect(()=>{
    const item = localStorage.getItem('user')
    setuser(item)
  },[])
  return (
    <UserContext.Provider value={{user,setuser}}>
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
    </UserContext.Provider>
  )
}

export default MyApp