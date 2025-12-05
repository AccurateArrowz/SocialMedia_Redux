import React, {forwardRef, useRef} from 'react'
import { SlLike } from "react-icons/sl";

const ReactionPicker = forwardRef(({handleReactionPickerEnter,
       handleReactionPickerLeave, onReactionClick}, reactionPickerRef)=>{
   const timeoutIdRef = useRef(null);

  const onMouseEnter = () => {
    handleReactionPickerEnter();
    timeoutIdRef.current = setTimeout(() => {
      console.log("Hovered long enough!");
      // handleReactionPickerEnter();
    }, 500); // delay in ms
  };

  const onMouseLeave = (e) => {
    clearTimeout(timeoutIdRef.current); // cancel the callback if user leaves early
    handleReactionPickerLeave(e); //call the handler in the parent
  };


  return (
    <button
    className = 'border-amber-300 '
    ref= {reactionPickerRef}
    onMouseEnter={onMouseEnter} 
      onMouseLeave={onMouseLeave}
      onClick={()=> onReactionClick('like')}><SlLike></SlLike></button>
  )
})

export default ReactionPicker