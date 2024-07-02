import "@/styles/globals.css";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";

import styles from "../styles/Home.module.scss";
import fonts from "@/styles/fonts";
import Layout from "@/components/layout/layout";
// import { createClient } from "@/utils/supabase/auth";
import { getCurrentUserById } from "@/utils/supabase/queries/user";
import { createClient } from "../../utils/supabase/client";

// var x = new SupabaseAuthClient();

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: false,
    });
  }, []);

  useEffect(() => {
    Router.events.on("routeChangeStart", (...params) => {
      NProgress.start(params);
    });
    Router.events.on("routeChangeComplete", NProgress.done);
    Router.events.on("routeChangeError", NProgress.done);
    return () => {
      Router.events.off("routeChangeStart", NProgress.start);
      Router.events.off("routeChangeComplete", NProgress.done);
      Router.events.off("routeChangeError", NProgress.done);
    };
  }, []);

  const [session, setSession] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.onAuthStateChange(async (event, session) => {
      console.log(session);
      if (event === "SIGNED_OUT") {
        setSession(null);
        setCurrentUser(null);
      } else {
        const role = session?.user?.user_metadata?.role;
        if (role) {
          // supabase = createClient();

          const { data: userData, error: userError } = await supabase
            .from(role)
            .select(role === "Employers" ? `*,company:Companies(*)` : `*`)
            .eq("user_id", session?.user.id);

          setCurrentUser(userData?.[0]);

          if (userError) {
            console.log("User Error--->", userError);
          }
        }
        setSession(session);
      }
    });
  }, []);

  console.log(session);

  return (
    // <SessionProvider session={pageProps.session}>
    <>
      <main className={`${styles.main} ${fonts.MainFont}`}>
        <Layout currentUser={currentUser}>
          <Component
            {...pageProps}
            currentUser={currentUser}
            session={session}
            setCurrentUser={setCurrentUser}
            setSession={setSession}
          />
        </Layout>
      </main>
    </>
    // </SessionProvider>
  );
}
