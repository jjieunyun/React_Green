import { useState } from "react";
import { useDispatch } from "react-redux";

//slice에서 가져온 action
import { postAdded } from "./postsSlice";

import React from 'react';

const AddPostForm = () => {
    //⭐useState() : temporary state that controlled form Input(title,content etc) -> component내에서만 사용
    //redux에서 쓸 필요가없다. 이 컴포넌트 안에서만 쓰면된다.
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const dispatch = useDispatch();

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content)
            )
            //전송하고나면 local data는 reset해줌
            setTitle('')
            setContent('')
        }
    }

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    type="button"
                    onClick={onSavePostClicked}
                >Save Post</button>
            </form>
        </section>
    );
};

export default AddPostForm;