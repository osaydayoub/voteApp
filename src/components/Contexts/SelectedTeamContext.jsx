import { createContext, useState } from "react";
const SelectedTeamContext = createContext();

export default function SelectedTeamProvider({ children }) {
    const [selectedTeam, setselectedTeam] = useState(null);
    return (
        <SelectedTeamContext.Provider value={[selectedTeam, setselectedTeam]}>
            {children}
        </SelectedTeamContext.Provider>
    );
}

export { SelectedTeamContext };