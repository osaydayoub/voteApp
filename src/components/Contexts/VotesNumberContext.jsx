import { createContext, useState } from "react";
const VotesNumberContext = createContext();

export default function VotesNumberProvider({ children }) {
    const [VotesNumberArray, setVotesNumberArray] = useState([]);
    return (
        <VotesNumberContext.Provider value={[VotesNumberArray, setVotesNumberArray]}>
            {children}
        </VotesNumberContext.Provider>
    );
}

export { VotesNumberContext };