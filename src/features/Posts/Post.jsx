import { useRef, useState } from 'react';
import ReactionOptions from '../ReactionOptions';
import { Link } from 'react-router-dom'
import ReactionPicker from './ReactionPicker'

export default function Post({post}){
    const [showReactionOptions, setShowReactionOptions ] = useState(false);
    const reactionPickerRef = useRef(null);
    const reactionOptionsRef = useRef(null);
    function handleReactionPickerEnter(){
        setShowReactionOptions(true);
    }
    function handleReactionPickerLeave(e){
        console.log('reaction picker left ')
        const {top, bottom, left, right} = reactionPickerRef.current.getBoundingClientRect();
        const {topB, bottomB, leftB, rightB} = reactionOptionsRef.current?.getBoundingClientRect() || { };
        console.log('top: ', top);
        console.log('topB: ', topB)

        const isOutsideReactionPicker =  e.clientX < left || e.clientX > right ||
                         e.clientY < topB || e.clientY > bottom ;         //use topB to check if the event is also outside the reactionOptions when the pointer is outside the picker

        const isOutsideReactionOptions= e.clientX < leftB || e.clientX > rightB ||
             e.clientY < topB || e.clientY > bottom ;             //use 'bottom' to check if the event is also below the reactionOptions

        
        if(isOutsideReactionPicker && isOutsideReactionOptions){
            setShowReactionOptions(false)
        }
    }
    return <section className='border py-4 px-4'>
        <h2>{post.title}</h2>
        <p>{post.date}</p>
    <Link to={`/users/${post.userId}`}>{post.userName}</Link>
        <p>{post.content}</p>

        <ReactionPicker 
            ref = {reactionPickerRef}
        handleReactionPickerEnter= {handleReactionPickerEnter}
             handleReactionPickerLeave= {handleReactionPickerLeave}
        ></ReactionPicker>
        {showReactionOptions && <ReactionOptions postId={post.id}
                ref ={reactionOptionsRef}></ReactionOptions>}
    </section>
}