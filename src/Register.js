
function Register() {
    return (
        <div className="App">
            <form action="/" method="post">
                <label>
                    name:
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    password:
                    <input type="text" name="password" />
                </label>
                <br />
                <label>
                    fullname:
                    <input type="text" name="fullname" />
                </label>
                <br />
                <button> click </button>
            </form >
        </div>
    );
}

export default Register;
