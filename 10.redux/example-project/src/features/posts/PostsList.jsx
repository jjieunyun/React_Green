import { useSelector } from "react-redux";
import { selectAllPosts } from './postsSlice';

import React from 'react';

const PostsList = () => {
    //🌳postsSlice에 작성해둔 posts state를 가져온다.
    const posts = useSelector(selectAllPosts)


    //🌳postsSlice에서 작성했던 data를 map을 통해 iterator
    //⭐substring은 mdm에서 찾아보기 -> 길이가 긴 문자열을 100개까지만 preview함
    //윗쪽에 이렇게 정의해주고 사용하면 return되는 jsx가 clean해짐

    //⭐Slice에서 seletor를만들고 보내는 것이 나은이유❓ data가 변경되면 
    /*
    컴포넌트에 변경된 data를 알려주어야 하는데 
    Slice에서 만들어 놓으면 자동으로 변경되서 전달되기 때문이다.
    */
    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
        </article>
    ))

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
};

export default PostsList;