import { useState } from "react";
import {useDispatch} from 'react-redux'
import {addPost} from './PostSlice.jsx'

function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // basic validation
    if (!title.trim() || !content.trim()) {
      alert("Please fill out both title and content");
      return;
    }
    dispatch(addPost({title,content}))

    // clear fields
    setTitle("");
    setContent("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-md rounded-2xl p-6 space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-800">Create a New Post</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Content
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your post content here..."
          className="w-full border rounded-lg px-3 py-2 h-32 resize-none focus:outline-none focus:ring focus:ring-blue-200"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Submit Post
      </button>
    </form>
  );
}

export default PostForm;

