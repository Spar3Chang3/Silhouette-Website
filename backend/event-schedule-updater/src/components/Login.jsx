import "./Login.css"

export default function Login() {

    return (
        <>
            <div className={"loginContainer"}>
                <div className={"loginCard"}>
                    <div className={"loginHeader"}>
                        <h2>Login to Update Schedule</h2>
                    </div>
                    <div className={"usernameBlock"}>
                        <span>Username:</span>
                        <br/>
                        <input/>
                    </div>
                    <br/>
                    <div className={"passwordBlock"}>
                        <span>Password:</span>
                        <br/>
                        <input/>
                    </div>
                    <br/>
                    <div className={"loginButtonContainer"}>
                        <button className={"loginButton"}>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}