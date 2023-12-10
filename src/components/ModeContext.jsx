import { createContext, useState } from "react";
const ModeContext = createContext();
const [dayMode, nightMode] = ['day', 'night'];

export default function ModeProvider({ children }) {
    const [mode, setMode] = useState(nightMode);
    return (
        <ModeContext.Provider value={[mode, setMode]}>
            {children}
        </ModeContext.Provider>
    );
}

export { ModeContext };

