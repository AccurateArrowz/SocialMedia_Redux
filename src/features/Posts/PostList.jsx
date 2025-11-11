import { useDispatch } from "react-redux"
import {deletePost, sortPostsAsc, increaseCount} from './PostsSlice'
import { getCounter, selectAllPosts, } from "./PostsSlice";
import { useSelector } from "react-redux"
import Post from './Post';

 export default function PostList(){
    const posts = useSelector(selectAllPosts)
    const counter = useSelector(getCounter);
    const dispatch = useDispatch();
    function handleDelete(postId){
        console.log('handleDelete called ')
        dispatch(deletePost(postId));
    }
    return <div>
        <h1>Posts </h1>
        <p>Counter: {counter}</p>
        <button onClick={()=> dispatch(increaseCount())}>+1 </button>
        <button onClick={()=> dispatch(sortPostsAsc())}>Oldest First</button>
    <ul>
            {posts.map(post => (
                       <Post key={post.id} post={post}></Post>
                   ))}
    </ul>
    </div>

}