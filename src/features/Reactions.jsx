import { useDispatch } from 'react-redux'
import './Posts/PostStyles.css'
import {updatePostReaction} from "./Posts/PostsSlice"

const reactions ={
    'wow': '😮',
    'heart': '❤️',
    'likes': '👍'
}   
export default function Reactions({reactionValues, postId}){
    const dispatch = useDispatch()
    
    return <div style={{gap: '15px', display: 'flex'}}>
        {
            reactionValues && 
                Object.entries(reactionValues).map(([reactionName, reactedBy])=> (
                    <div >
                    <button onClick={()=> 
                                dispatch(updatePostReaction({postId, newReaction: reactionName}))}> 
                        {reactions[reactionName]} 
                    </button>
                    <span> {reactedBy.length}</span>
                     </div>
                ))
            }
        
     
    </div>
}