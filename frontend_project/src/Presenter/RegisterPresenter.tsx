import Register from "../View/Register";

interface RegisterPresenterProps {
    showRegister: boolean;
    setShowRegister: () => void;
}

function RegisterPresenter(props: RegisterPresenterProps) {
    return <Register showRegister={props.showRegister} setShowRegister={props.setShowRegister} />
}

export default RegisterPresenter;