import React from "react";
import { AiOutlineForm } from "react-icons/ai";

const Profile = () => {
    const state = {
        username: "Min Thet Kyaw",
        email: "mtk5691@gmail.com",
        age: 16,
        password: ""
    }
    return (
        <div className="col-10">
            <div className="col-6 m-auto bg-primary p-3 d-flex justify-content-around align-items-center rounded rounded-4 shadow shadow-lg mb-5">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile image" className="col-4" />
                <div className="col-8 ps-5 text-light">
                    <h2 className="">{ state.username }</h2>
                    <h5 className="">{ state.email }</h5>
                    <h6 className="mb-2 pb-2">{ state.age } years old</h6>
                    <button className="btn btn-light text-primary d-block ms-auto"><AiOutlineForm /> Change Password</button>
                </div>
            </div>
            <div className="col-8 m-auto">
                <h2 className="text-primary my-3 ms-5 text-decoration-underline">My Blogs</h2>
                <table className="table bg-light text-muted fw-semibold table-bordered text-center col-12 shadow shadow-lg">
                    <thead className="text-light bg-primary">
                        <tr>
                            <th className="col-1">No. </th>
                            <th className="col-2">Category</th>
                            <th className="col-6">Title</th>
                            <th className="col-3">Controls</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <span className="badge badge-lg bg-primary">Food</span>
                            </td>
                            <td>New Menu and Recipe Leaked from Sharky's Kitchen</td>
                            <td className="">
                                <button type="button" className="col-5 btn btn-outline-primary py-1 px-3 m-1">Edit</button>
                                <button type="button" className="col-5 btn btn-outline-danger py-1 px-3 m-1">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                                <span className="badge badge-lg bg-primary">Food</span>
                            </td>
                            <td>New Menu and Recipe Leaked from Sharky's Kitchen</td>
                            <td className="">
                                <button type="button" className="col-5 btn btn-outline-primary py-1 px-3 m-1">Edit</button>
                                <button type="button" className="col-5 btn btn-outline-danger py-1 px-3 m-1">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>
                                <span className="badge badge-lg bg-primary">Food</span>
                            </td>
                            <td>New Menu and Recipe Leaked from Sharky's Kitchen</td>
                            <td className="">
                                <button type="button" className="col-5 btn btn-outline-primary py-1 px-3 m-1">Edit</button>
                                <button type="button" className="col-5 btn btn-outline-danger py-1 px-3 m-1">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Profile;