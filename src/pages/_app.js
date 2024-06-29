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
import supabase from "@/utils/supabase/auth";
import { getCurrentUserById } from "@/utils/supabase/queries/user";

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
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_OUT") {
        setCurrentUser(null);
      } else if (event === "SIGNED_IN" || event === "INITIAL_SESSION") {
        // console.log(session?.user?.user_metadata?.role);

        const { data, error } = await getCurrentUserById(session?.user?.id);

        if (data) {
          setCurrentUser(data[0]);
        }
      }

      setSession(session);
    });
  }, []);

  console.log(currentUser);

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
          />
        </Layout>
      </main>
    </>
    // </SessionProvider>
  );
}
