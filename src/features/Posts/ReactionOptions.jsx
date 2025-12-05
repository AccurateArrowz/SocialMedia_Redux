import { useDispatch } from 'react-redux'
import {updatePostReaction} from "./PostsSlice"
import { AiTwotoneHeart,AiOutlineLike } from "react-icons/ai";
import { forwardRef, useEffect, useState } from 'react';
import { ImShocked } from "react-icons/im";


const reactions ={
    'wow': <ImShocked color='yellow'/>,
    'heart': <AiTwotoneHeart color='red'/>,
    'likes': <AiOutlineLike color='blue'/>
}   
const ReactionOptions = forwardRef(({reactionPickerTop, postId, onReactionOptionsLeave, onReactionClick}, ref)=>{
    const dispatch = useDispatch()
    // console.log('ReactionPickerTop ' , reactionPickerTop)
    const [height, setHeight] = useState(0);

    useEffect(()=>{
        const { height} = ref.current.getBoundingClientRect();
        console.log('Height of Reaction Options ', height);
        setHeight(height)
    }, [])
    
    return <div ref= {ref}
        onMouseLeave={onReactionOptionsLeave}
    className= {` flex gap-0.5 border w-fit opacity-100 transition-opacity duration-400`}
        style={{ position: 'absolute', top: reactionPickerTop - height }}
    >
      {Object.entries(reactions).map(([reactionName, icon]) => 
        <button 
        className='border'
        onClick={()=>onReactionClick(reactionName)}>{icon}</button>)}
     
    </div>
})
export default ReactionOptions;