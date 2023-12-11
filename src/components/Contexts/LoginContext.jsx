import { createContext, useState } from "react";
const LoginContext = createContext();

export default function LoginProvider({ children }) {
    const [Login, setLogin] = useState(false);
    return (
        <LoginContext.Provider value={[Login, setLogin]}>
            {children}
        </LoginContext.Provider>
    );
}

export { LoginContext };