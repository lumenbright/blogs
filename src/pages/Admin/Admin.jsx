import React from "react";

const Admin = () => {
    return (
        <div className="col-12">
            <h1 className="text-dark text-center mb-5">Admin</h1>
            <div className="container col-12 d-flex justify-content-evenly flex-wrap">
                <div className="col-5 p-2 py-2 border rounded rounded-3 shadow shadow-md">
                    <h3 className="text-center my-3">User Approval</h3>

                    <table className="table table-bordered text-center">
                        <thead className="bg-dark text-light text-center">
                            <tr>
                                <td className="col-1">No.</td>
                                <td className="col-7">User Data</td>
                                <td className="col-4">Control</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td className="text-start">
                                    <p className="m-0">Min Thet Kyaw (<span>minthetkyaw2804@gmail.com</span>)</p>
                                </td>
                                <td>
                                    <button className="btn btn-sm btn-outline-dark mx-1 px-1">Accept</button>
                                    <button className="btn btn-sm btn-outline-danger mx-1 px-1">Remove</button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td className="text-start">
                                    <p className="m-0">Min Hein Kyaw (<span>minheinkyaw2804@gmail.com</span>)</p>
                                </td>
                                <td>
                                    <button className="btn btn-sm btn-outline-dark mx-1 px-1">Accept</button>
                                    <button className="btn btn-sm btn-outline-danger mx-1 px-1">Remove</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-5 p-2 py-2 border rounded rounded-3 shadow shadow-md">
                    <h3 className="text-center my-3">Blog Approval</h3>

                    <table className="table table-bordered text-center">
                        <thead className="bg-dark text-light text-center">
                            <tr>
                                <td className="col-1">No.</td>
                                <td className="col-7">Blog Data</td>
                                <td className="col-4">Control</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td className="text-start">
                                    <p className="m-0"><span>Spanish class being turned out occassion in New York  </span> <span className="badge bg-dark ms-1">Education</span></p>
                                </td>
                                <td>
                                    <button className="btn btn-outline-dark btn-sm mx-1 px-1">Upload</button>
                                    <button className="btn btn-outline-danger btn-sm mx-1 px-1">Remove</button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td className="text-start">
                                    <p className="m-0"><span>Spanish class being turned out occassion in New York  </span> <span className="badge bg-dark ms-1">Education</span></p>
                                </td>
                                <td>
                                    <button className="btn btn-outline-dark btn-sm mx-1 px-1">Upload</button>
                                    <button className="btn btn-outline-danger btn-sm mx-1 px-1">Remove</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Admin;