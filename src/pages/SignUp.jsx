import React from "react";

const SignUp = () => {
    return (
        <div className="bg-light px-5 py-2 rounded rounded-3 col-4 m-auto"> 
            <div className="text-muted text-center h3 my-3">Sign Up Form</div>
            <form action="" method="">
                <div className="form-group my-3">
                    <label htmlFor="email" className="form-label">Email </label>
                    <input type="email" name="email" id="email" className="form-control form-control-sm" placeholder="your email ..." required={true} />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="username" className="form-label">Username </label>
                    <input type="text" name="username" id="username" className="form-control form-control-sm" placeholder="your username ..." required={true} />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="password" className="form-label">Password </label>
                    <input type="password" name="password" id="password" className="form-control form-control-sm" placeholder="your password ..." required={true} />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="conpassword" className="form-label">Confirm Password </label>
                    <input type="password" name="conpassword" id="conpassword" className="form-control form-control-sm" placeholder="your confirm password ..." required={true} />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="birthdate" className="form-label">Birthdate</label>
                    <input type="date" name="birthdate" id="birthdate" className="form-control form-control-sm" />
                </div>
                <div className="form-group d-grid my-4">
                    <input type="submit" value="Submit" name="submit" id="submit" className="btn btn-primary btn-sm fs-5 shadow shadow-3" />
                </div>
            </form>
        </div>
    )
}

export default SignUp;