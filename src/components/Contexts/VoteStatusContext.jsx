import { createContext, useState } from "react";
const VoteStatusContext = createContext();

export default function VoteStatusProvider({ children }) {
  const [voteStatus,setVoteStatus]=useState(null);

    return (
        <VoteStatusContext.Provider value={[voteStatus,setVoteStatus]}>
            {children}
        </VoteStatusContext.Provider>
    );
}

export { VoteStatusContext };