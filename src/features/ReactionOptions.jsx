import { useDispatch } from 'react-redux'
import {updatePostReaction} from "./Posts/PostsSlice"
import { AiTwotoneHeart,AiOutlineLike } from "react-icons/ai";
import { forwardRef } from 'react';
import { ImShocked } from "react-icons/im";


const reactions ={
    'wow': <ImShocked color='yellow'/>,
    'heart': <AiTwotoneHeart color='red'/>,
    'likes': <AiOutlineLike color='blue'/>
}   
const ReactionOptions = forwardRef(({postId}, ref)=>{
    const dispatch = useDispatch()
    
    return <div ref= {ref}
    className= ' flex gap-2 border w-fit opacity-100 transition-opacity duration-400 '>
       {Object.entries(reactions).map(([reactionName, icon]) => 
        <button onClick={()=>
             dispatch(updatePostReaction(
                        {postId, newReaction: reactionName})
                    )}>{icon}</button>)}
     
    </div>
})
export default ReactionOptions;