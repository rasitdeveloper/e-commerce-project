import { useState, createContext, useContext } from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const login = (data) => {
		setIsLoggedIn(true);
		setUser(data.user);
	};

    const values = {
		isLoggedIn,
		user,
        login
	};

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth}