import React from "react";

const UpdateBlog = () => {
    const state = {
        username: "", 
        title: "mtk",
        categories: [],
        category: "",
        content: "hiihi",
        image: ""
    }
    return (
        <div className="bg-light px-5 py-2 rounded rounded-3 col-5 m-auto"> 
            <div className="text-muted text-center h3 my-3">Update Blog</div>
            <form action="" method="">
                <div className="form-group my-3 d-none">
                    <input type="hidden" name="username" id="username" value={state.username} className="form-control form-control-sm" placeholder="your username ..." />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="title" className="form-label">Topic  </label>
                    <input type="title" name="title" id="title" value={state.title} className="form-control form-control-sm" placeholder="your title ..." />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="category" className="form-label">Category </label>
                    <select name="category" id="category" className="form-select" defaultValue={state.category}>
                        <option value="no-value" disabled>Select a category</option>
                        {
                            state.categories.map((category, index) => {
                                return <option value={category[0]} key="index" className="form-option">{category[1]}</option>
                            })
                        }
                    </select>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="content" className="form-label">Content </label>
                    <textarea name="content" id="content" value={state.content} className="form-control form-control-sm" placeholder="your content ..." cols="30" rows="5"></textarea>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="image" className="form-label">Image </label>
                    <input type="file" id="image" name="image" value={state.image} className="form-control form-control-sm" />
                </div>
                <div className="form-group d-grid my-4">
                    <input type="submit" value="Update" name="submit" id="submit" className="btn btn-primary btn-sm fs-5 shadow shadow-3" />
                </div>
            </form>
        </div>
    )
}

export default UpdateBlog;