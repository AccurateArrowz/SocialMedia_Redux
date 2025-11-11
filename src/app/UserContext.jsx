import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
        const [user, setUser] = useState({
                id: 1,
                name: "Ravi Ghale",
                age: 22,
        });

        return (
                <UserContext.Provider value={{ user }}>
                        {children}
                </UserContext.Provider>
        );
};
// const useUser = ()=> {
//         const [user, setUser] = useContext(UserContext);

// }

export default UserProvider;
