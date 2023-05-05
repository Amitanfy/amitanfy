import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {

  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,

    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,

    })
  ],
  session: {
    strategy: "jwt",
  },
    callbacks: {
      async session(session, token) {
        // Add the JWT token to the session
        session.jwt = token;
  
        return session;
      },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
