import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { useContext } from "react";
import { current } from 'immer'


const posts = [
  {
    id: 1,
    userId: 1,
    userName: "Sujay",
    title: "My First Post",
    content:
      "This is my first post using React! I'm excited to learn more about components and state.",
    date: "2025-10-14",
    reactions: {
      likes: [],
      heart: [],
      wow: []
    }
  },
  {
    id: 2,
    userId: 2,
    userName: "Anjali",
    title: "Understanding Props and State",
    content:
      "Props help us pass data between components, while state lets a component keep track of its own changing data.",
    date: "2025-10-13",
    reactions: {
      likes: [],
      heart: [],
      wow: []
    }
  },
  {
    id: 3,
    userId: 3,
    userName: "Ravi",
    title: "Hooks Make Life Easier",
    content:
      "I recently learned about useState and useEffect — and wow, they make functional components super powerful!",
    date: "2025-10-12",
    reactions: {
      likes: [],
      heart: [],
      wow: []
    }
  },
  {
    id: 4,
    userId: 4,
    userName: "Maya",
    title: "Styling Components in React",
    content:
      "CSS Modules and styled-components make it easier to write maintainable, scoped styles in React projects.",
    date: "2025-10-11",
    reactions: {
      likes: [],
      heart: [],
      wow: []
    }
  },
  {
    id: 5,
    userId: 5,
    userName: "Arjun",
    title: "Why I Switched to Vite",
    content:
      "Vite is blazing fast compared to Create React App. Hot reloads happen instantly, and builds are much quicker.",
    date: "2025-10-10",
    reactions: {
      likes: [],
      heart: [],
      wow: []
    }
  },
  {
    id: 6,
    userId: 1,
    userName: "Sujay",
    title: "The Magic of React Router",
    content:
      "React Router makes navigation feel seamless. I finally understood how nested routes work today!",
    date: "2025-10-09",
    reactions: {
      likes: [],
      heart: [],
      wow: []
    }
  },
  {
    id: 7,
    userId: 2,
    userName: "Anjali",
    title: "Reusable Components for the Win",
    content:
      "Building reusable UI components saves so much time — like buttons, modals, and inputs with shared styles.",
    date: "2025-10-08",
    reactions: {
      likes: [],
      heart: [],
      wow: []
    }
  },
  {
    id: 8,
    userId: 3,
    userName: "Ravi",
    title: "React Performance Optimization Tips",
    content:
      "Use memoization wisely and avoid unnecessary re-renders. React DevTools Profiler helps a lot in finding bottlenecks.",
    date: "2025-10-07",
    reactions: {
      likes: [],
      heart: [],
      wow: []
    }
  },
  {
    id: 9,
    userId: 4,
    userName: "Maya",
    title: "Dark Mode with Context API",
    content:
      "Implementing dark mode using Context and custom hooks is easier than I expected. It’s fun to toggle themes!",
    date: "2025-10-06",
    reactions: {
      likes: [],
      heart: [],
      wow: []
    }
  },
  {
    id: 10,
    userId: 5,
    userName: "Arjun",
    title: "From JavaScript to TypeScript",
    content:
      "Migrating my project to TypeScript made my codebase more predictable and reduced runtime errors.",
    date: "2025-10-05",
    reactions: {
      likes: [],
      heart: [],
      wow: []
    }
  },
  {
    id: 11,
    userId: 6,
    userName: "Priya",
    title: "Understanding useReducer",
    content:
      "useReducer is great for managing complex state logic, especially when you have multiple actions and transitions.",
    date: "2025-10-04",
    reactions: {
      likes: [],
      heart: [],
      wow: []
    }
  },
  {
    id: 12,
    userId: 7,
    userName: "Rahul",
    title: "Building a To-Do App",
    content:
      "I built a small to-do app using React. It helped me understand controlled components and event handling.",
    date: "2025-10-03",
    reactions: {
      likes: [],
      heart: [],
      wow: []
    }
  },
  {
    id: 13,
    userId: 8,
    userName: "Sneha",
    title: "Using Custom Hooks",
    content:
      "Creating my first custom hook was satisfying. I made one for managing form inputs cleanly.",
    date: "2025-10-02",
    reactions: {
      likes: [],
      heart: [],
      wow: []
    }
  },
  {
    id: 14,
    userId: 9,
    userName: "Karan",
    title: "React and Firebase Integration",
    content:
      "Setting up Firebase Authentication with React was surprisingly smooth. I can now store user data easily!",
    date: "2025-10-01",
    reactions: {
      likes: [],
      heart: [],
      wow: []
    }
  },
  {
    id: 15,
    userId: 10,
    userName: "Neha",
    title: "Forms in React Made Simple",
    content:
      "Handling form state can get tricky, but using libraries like React Hook Form simplifies validation a lot.",
    date: "2025-09-30",
    reactions: {
      likes: [],
      heart: [],
      wow: []
    }
  },
  {
    id: 16,
    userId: 3,
    userName: "Ravi",
    title: "Deploying My React App",
    content:
      "I just deployed my first React app using Netlify. It’s amazing to see it live on the web!",
    date: "2025-09-29",
    reactions: {
      likes: [],
      heart: [],
      wow: []
    }
  },
  {
    id: 17,
    userId: 1,
    userName: "Sujay",
    title: "Improving Readability with ESLint",
    content:
      "ESLint helps catch small mistakes early and keeps my code consistent across the project.",
    date: "2025-09-28",
    reactions: {
      likes: [],
      heart: [],
      wow: []
    }
  },
  {
    id: 18,
    userId: 5,
    userName: "Arjun",
    title: "Exploring Next.js",
    content:
      "Next.js provides server-side rendering out of the box. The image optimization and routing features are top-notch!",
    date: "2025-09-27",
    reactions: {
      likes: [],
      heart: [],
      wow: []
    }
  },
  {
    id: 19,
    userId: 9,
    userName: "Karan",
    title: "React Context vs Redux",
    content:
      "Both are great for state management, but I prefer Redux for large applications where logic grows complex.",
    date: "2025-09-26",
    reactions: {
      likes: [],
      heart: [],
      wow: []
    }
  },
  {
    id: 20,
    userId: 8,
    userName: "Sneha",
    title: "Learning Animations with Framer Motion",
    content:
      "Framer Motion makes React animations so intuitive! Transitions and drag interactions feel smooth and natural.",
    date: "2025-09-25",
    reactions: {
      likes: [],
      heart: [],
      wow: []
    }
  }
];

const initialState = {
  posts, 
  status: 'idle', //'idle', 'success', if we are getting the posts from an api
  counter: 0
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // addPost: (state, action)=> state.push(action.payload),
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },

      prepare({ title, content }) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
          },
        };
      },
    },
    deletePost: (state, action) => {
      console.log(action.payload);
      return state.filter((post) =>{return post.id !== action.payload})
    },
    updatePost: () => { }, 
    sortPostsAsc: (state) => {
      state.sort((a,b)=> {
        if(a.date > b.date) return 1;
        return -1;
      });

    },
    updatePostReaction: (state, action)=> {
      const userId = 1; //static for now
      const {postId, newReaction} = action.payload;
      const post = state.find(p=> p.id === postId );
      console.log('postId', postId)
      console.log('post: ', current(post))
      const reactionsOnPost = Object.entries(post['reactions']);
      let prevReaction = '';

      for (const [reactionName, reactedByArray] of reactionsOnPost){  
        const index = reactedByArray.findIndex(reactedById => reactedById ===userId); //index of userId if it exists in a reaction
        if(index !== -1){
          prevReaction = reactionName;
          reactedByArray.splice(index, 1);
          break;
        }
      }
      if(prevReaction !== newReaction){ //add only if it is the case that it was not a removing of the same reaction
        post['reactions'][newReaction].push(userId);  
      }
    },
    increaseCount: (state, action)=>{
      state.counter++;
    }
  }, 
 
})

export const selectAllPosts = (state) => state.posts.posts;
export const getCounter = (state) => state.posts.counter;
export const { addPost, deletePost, reactPost, sortPostsAsc ,updatePostReaction, increaseCount } = postsSlice.actions;
export default postsSlice.reducer;

