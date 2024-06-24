import CustomContainer from "@/components/ui/custom_container/custom_container";
import React from "react";
import styles from "./main_header.module.scss";
import CustomButton from "@/components/ui/custom_button/custom_button";
import User from "./user/user";

const MainHeader = ({user,setUser}) => {

  // user = null;

  return (
    <header className={styles.MainHeader}>
      <CustomContainer>
        <div className={styles.wrap}>
          <div className={styles.left}>
            <div href="/" className={styles.logo}>
              {/* <Image src="/logo/logo_f_v.png" height={50} alt="logo" /> */}
            </div>
          </div>
          <div className={styles.right}>
            {user ? (
              <User setUser={setUser}/>
            ) : (
              <>
                <CustomButton variant={2}>Sign In</CustomButton>
                <CustomButton>Post a Job</CustomButton>
              </>
            )}
          </div>
        </div>
      </CustomContainer>
    </header>
  );
};

export default MainHeader;
