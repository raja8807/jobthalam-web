import styles from "./header.module.scss";
import MainHeader from "./main_header/main_header";
import SubHeader from "./sub_header/sub_header";
import TopHeader from "./top_header/top_header";

const Header = ({  currentUser,supabase }) => {
  return (
    <header className={`${styles.header} `}>
      <TopHeader />
      <MainHeader currentUser={currentUser} supabase={supabase} />
      {/* <SubHeader /> */}
    </header>
  );
};

export default Header;
