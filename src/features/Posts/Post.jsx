import Reactions from '../Reactions';
import { Link } from 'react-router-dom'

export default function Post({post}){

    return <section className='border py-4 px-4'>
        <h2>{post.title}</h2>
        <p>{post.date}</p>
    <Link to={`/users/${post.userId}`}>{post.userName}</Link>
        <p>{post.content}</p>
        <Reactions reactionValues={post.reactions} postId={post.id}></Reactions>
    </section>
}