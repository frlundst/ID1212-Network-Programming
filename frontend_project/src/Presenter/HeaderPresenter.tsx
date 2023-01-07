import Header from "../View/Header";


interface HeaderPresenterProps {
    cartLength: number;
    setShowCart: (show: boolean) => void;
    setShowRegister: (show: boolean) => void;
}

function HeaderPresenter(props: HeaderPresenterProps) {
  return <Header cartLength={props.cartLength} setShowCart={props.setShowCart} setShowRegister={props.setShowRegister} />
}

export default HeaderPresenter;