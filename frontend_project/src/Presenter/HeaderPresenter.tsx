import { ProfileType } from "../Types";
import Header from "../View/Header";


interface HeaderPresenterProps {
    cartLength: number;
    setShowCart: (show: boolean) => void;
    setShowRegister: (show: boolean) => void;
    setShowLogin: (show: boolean) => void;
    profile: ProfileType | null;
    logoutFun: () => void;
}

function HeaderPresenter(props: HeaderPresenterProps) {
  return <Header logoutFun={props.logoutFun} profile={props.profile} cartLength={props.cartLength} setShowCart={props.setShowCart} setShowRegister={props.setShowRegister} setShowLogin={props.setShowLogin} />
}

export default HeaderPresenter;