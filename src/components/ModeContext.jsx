import { createContext, useState } from "react";
const ModeContext = createContext();

export default function ModeProvider({ children }) {
    const [mode, setMode] = useState('day');
    return (
        <ModeContext.Provider value={{ mode, setMode }}>
            {children}
        </ModeContext.Provider>
    );
}

export { ModeContext };

