import Wrapper from "../Components/Wrapper";

interface HomeProps { }

function Home(props: HomeProps) {
    return <Wrapper>
        <h1>Home</h1>
        <h5 style={{ columnGap: "10px" }}>Welcome to localhost. Feel free to browse our categories!</h5>
    </Wrapper>
}

export default Home;