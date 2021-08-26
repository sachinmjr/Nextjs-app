import { useEffect, useState } from "react";

const PostsList = () => {
    const [list, updateList] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => {
                updateList([...data]);
            });
    }, []);


    return (
        (list.length > 0) && list.map((post) => {
            return (
                <div>
                    <div>{post.id}</div>
                    <div>{post.title}</div>
                    <div>{post.body}</div>
                </div>
            )
        })
    )
}

export default PostsList;
