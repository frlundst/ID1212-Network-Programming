import Login from "../View/Login";

interface LoginPresenterProps {
    showLogin: boolean;
    setShowLogin: () => void;
}

function LoginPresenter(props: LoginPresenterProps) {
    return <Login showLogin={props.showLogin} setShowLogin={props.setShowLogin} />
}

export default LoginPresenter;