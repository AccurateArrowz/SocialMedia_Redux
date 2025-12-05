import { useRef, useState } from "react";
import ReactionOptions from "./ReactionOptions";
import { Link } from "react-router-dom";
import ReactionPicker from "./ReactionPicker";
import { updatePostReaction } from "./PostsSlice";
import { useDispatch } from "react-redux";

export default function Post({ post }) {
  const [showReactionOptions, setShowReactionOptions] = useState(false);
  const reactionPickerRef = useRef(null);
  const reactionOptionsRef = useRef(null);

  const dispatch = useDispatch();

  function handleReactionPickerEnter() {
    setTimeout(()=> {
      console.log('ran after 1sec ')
      setShowReactionOptions(true);
    }, 50)
  }

  function handleReactionPickerLeave(e) {
    const { top, bottom, left, right } =
      reactionPickerRef.current.getBoundingClientRect();
    const {
      top: topB,
      bottom: bottomB,
      left: leftB,
      right: rightB,
    } = reactionOptionsRef.current?.getBoundingClientRect() || {};
    // console.log("top: ", top);
    // console.log("topB: ", topB);

    const isOutsideReactionPicker =
      e.clientX < left ||
      e.clientX > right ||
      e.clientY < topB ||
      e.clientY > bottom; //use topB to check if the event is also outside the reactionOptions when the pointer is outside the picker

    const isOutsideReactionOptions =
      e.clientX < leftB ||
      e.clientX > rightB ||
      e.clientY < topB ||
      e.clientY > bottomB; //use 'bottom' to check if the event is also below the reactionOptions

    if (isOutsideReactionPicker && isOutsideReactionOptions) {
      setShowReactionOptions(false);
    }
  }

  function handleReactionClick(reactionName) {
    console.log('and')
    dispatch(updatePostReaction({newReaction: reactionName, postId: post.id}));
    setShowReactionOptions(false);

    
  }

  return (
    <section className="border py-4 px-4">
      <h2>{post.title}</h2>
      <p>{post.date}</p>
      <Link to={`/users/${post.userId}`}>{post.userName}</Link>
      <p>{post.content}</p>

      <ReactionPicker
        ref={reactionPickerRef}
        handleReactionPickerEnter={handleReactionPickerEnter}
        handleReactionPickerLeave={handleReactionPickerLeave}
        onReactionClick={handleReactionClick}
      ></ReactionPicker>

      {showReactionOptions && (
        <ReactionOptions
          ref={reactionOptionsRef}
          reactionPickerTop={
            reactionPickerRef.current.getBoundingClientRect().top
          }
          postId={post.id}
          onReactionOptionsLeave={handleReactionPickerLeave} //same hanlder for reactoinPIcker 'button' leave and reaction options leave
          onReactionClick={handleReactionClick}
        ></ReactionOptions>
      )}
    </section>
  );
}
