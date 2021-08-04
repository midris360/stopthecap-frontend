import React from "react"
import { Link } from "react-router-dom"
import { useAppState } from "../AppState.jsx"

const Nav = (props) => {
    const { state, dispatch } = useAppState();

    return (
        <header>
            <h1>STOP The Cap | Vinyls Collection App</h1>
            <nav>
                <div class="nav-wrapper">
                    {/* <a href="#" class="brand=logo">Logo</a> */}
                    {/* <ul id="nav-mobile" class="right hide-on-med-and-down"> */}
                {!state.token ? (
                    <> 
                        <Link to="/">
                            <div>Home</div>
                        </Link>
                        <Link to="/auth/signup">
                            <div>Signup</div>
                        </Link>
                        <Link to="/auth/login">
                            <div>Login</div>
                        </Link>
                    </>) : null}
                {state.token ? (
                    <div 
                        onClick={() => {
                            dispatch({ type: "logout" });
                            props.history.push("/");
                        }}
                    >
                        Logout
            </div>
        ) : null}
                {/* </ul> */}
            </div>
        </nav>
    </header>
    );
};

export default Nav;