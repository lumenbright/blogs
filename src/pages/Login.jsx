import React from "react";

const Login = () => {
    return (
        <div className="bg-light px-5 py-2 rounded rounded-3 col-3 m-auto"> 
            <div className="text-muted text-center h3 my-3">Login Form</div>
            <form action="" method="">
                <div className="form-group my-3">
                    <label htmlFor="username" className="form-label">Username </label>
                    <input type="text" name="username" id="username" className="form-control form-control-sm" placeholder="your username ..." required={true} />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="password" className="form-label">Password </label>
                    <input type="password" name="password" id="password" className="form-control form-control-sm" placeholder="your password ..." required={true} />
                </div>
                <div className="form-group d-grid my-4">
                    <input type="submit" value="Submit" name="submit" id="submit" className="btn btn-primary btn-sm fs-6 shadow shadow-3" />
                </div>
            </form>
        </div>
    )
}

export default Login;