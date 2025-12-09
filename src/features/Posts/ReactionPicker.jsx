import React, {forwardRef, useRef} from 'react';
import { SlLike } from "react-icons/sl";
import reactionIcons from './ReactionIcons.jsx';

const ReactionPicker = forwardRef(({
  handleReactionPickerEnter,
  handleReactionPickerLeave, 
  onReactionClick, 
  currentReaction
}, reactionPickerRef) => {
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

  const handleClick = () => {
    // Toggle reaction if already reacted, otherwise default to 'like'
    onReactionClick(currentReaction ? null : 'like');
  };

    // if(post.id === 1) console.log(currentUserReaction);

  return (
    <button
      className='border-amber-300'
      ref={reactionPickerRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleClick}
    >
      {currentReaction ? reactionIcons[currentReaction] : <SlLike />}
    </button>
  );
});
export default ReactionPicker