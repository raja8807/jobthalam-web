import styles from "./header.module.scss";
import MainHeader from "./main_header/main_header";
import SubHeader from "./sub_header/sub_header";
import TopHeader from "./top_header/top_header";

const Header = ({user,setUser}) => {
  return (
    <header className={`${styles.header} `}>
      <TopHeader />
      <MainHeader user={user} setUser={setUser}/>
      {/* <SubHeader /> */}
    </header>
  );
};

export default Header;
