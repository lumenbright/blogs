import React from "react";
import { AiFillEye, AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

// const BlogPost = () => {
//     return (
//         <div className="col-3 border border-light p-2 px-3 rounded rounded-3 bg-light">
//             <h4 className="text-dark text-center">{ state.posts[0].title }</h4>
//             <img src="https://th.bing.com/th/id/R.1cbd7567e4c06b1028453d56292e1954?rik=lAMcBElxk%2brBiQ&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fphotos%2f16300000%2fRandom-people-random-16382314-570-668.jpg&ehk=YZBajEpGS%2bMLDw5k0qU6Gb2IANv5qEh8DgIgC%2bp311Y%3d&risl=&pid=ImgRaw&r=0" alt="no image" className="img-thumbnail" />
//             <h6 className="d-flex justify-content-around my-2">
//                 <span className="badge bg-primary">{ state.posts[0].category }</span>
//                 <span className="text-dark">Uploaded By: { state.posts[0].username }</span>
//             </h6>
//         </div>
//     )
// }

const BlogFeed = () => {
    const state = {
        postCount: 5,
        sortedBy: "",
        posts: [
            {
                username: "Cat",
                title: "Election celebrated in USA held today",
                category: "Books",
                content: "someone bar nyar",
                image: "",
            }
        ]
    }
    return (
        <div className="container col-12 d-flex flex-column align-items-center">
            <div className="col-6 p-2 d-flex justify-content-end">
                <div className="bg-light text-dark p-2 px-3 rounded rounded-3 shadow shadow-lg">
                    <span className="ps-3">Sorted By</span> 
                    <select name="sort" id="sort" className="form-select">
                        <option value="new">Newest To Oldest</option>
                        <option value="old">Oldest to Newest</option>
                        <option value="title">Title Alphabetically</option>
                        <option value="user">Users</option>
                    </select>
                </div>
            </div>
            <div className="col-6 d-flex border border-light p-2 px-3 my-2 rounded rounded-3 bg-light shadow shadow-dark shadow-lg">
                <div className="col-8 d-flex flex-column justify-content-center align-items-start">
                    <h6 className="badge bg-primary">{ state.posts[0].category }</h6>
                    <h4 className="text-dark text-align-justify col-12 mb-2">
                        { state.posts[0].title }
                    </h4>
                    <h6 className="col-10 ps-2">
                        <div className="text-muted text-end">Uploaded By <span className="fw-bold text-secondary">{ state.posts[0].username }</span></div>
                        <div className="text-muted text-end">6 minutes ago</div>
                    </h6>
                    <button type="button" className="btn btn-primary text-light"><AiFillEye className="me-1" /> See Blog</button>
                </div>
                <div className="col-4">
                    <img src="https://th.bing.com/th/id/R.1cbd7567e4c06b1028453d56292e1954?rik=lAMcBElxk%2brBiQ&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fphotos%2f16300000%2fRandom-people-random-16382314-570-668.jpg&ehk=YZBajEpGS%2bMLDw5k0qU6Gb2IANv5qEh8DgIgC%2bp311Y%3d&risl=&pid=ImgRaw&r=0" alt="no image" className="img-thumbnail" />
                </div>
            </div>
            <div className="col-6 d-flex border border-light p-2 px-3 my-2 rounded rounded-3 bg-light shadow shadow-dark shadow-lg">
                <div className="col-8 d-flex flex-column justify-content-center align-items-start">
                    <h6 className="badge bg-primary">{ state.posts[0].category }</h6>
                    <h4 className="text-dark text-align-justify col-12 mb-2">
                        { state.posts[0].title }
                    </h4>
                    <h6 className="col-10 ps-2">
                        <div className="text-muted text-end">Uploaded By <span className="fw-bold text-secondary">{ state.posts[0].username }</span></div>
                        <div className="text-muted text-end">6 minutes ago</div>
                    </h6>
                    <button type="button" className="btn btn-primary text-light"><AiFillEye className="me-1" /> See Blog</button>
                </div>
                <div className="col-4">
                    <img src="https://th.bing.com/th/id/R.1cbd7567e4c06b1028453d56292e1954?rik=lAMcBElxk%2brBiQ&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fphotos%2f16300000%2fRandom-people-random-16382314-570-668.jpg&ehk=YZBajEpGS%2bMLDw5k0qU6Gb2IANv5qEh8DgIgC%2bp311Y%3d&risl=&pid=ImgRaw&r=0" alt="no image" className="img-thumbnail" />
                </div>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-start my-3">
                <button className="btn btn-primary text-light mx-2 py-1 px-2 shadow shadow-lg">
                    <AiFillCaretLeft />
                </button>
                <span className="bg-primary text-light p-1 px-3 fs-6 rounded rounded-3 shadow shadow-lg">Page <span>1</span></span>
                <button className="btn btn-primary text-light mx-2 py-1 px-2 shadow shadow-lg">
                    <AiFillCaretRight />
                </button>
            </div>
        </div>
    )
}

export default BlogFeed;