import Header from "../View/Header";


interface HeaderPresenterProps {
    cartLength: number;
    setShowCart: (show: boolean) => void;
}

function HeaderPresenter(props: HeaderPresenterProps) {
  return <Header cartLength={props.cartLength} setShowCart={props.setShowCart} />
}

export default HeaderPresenter;