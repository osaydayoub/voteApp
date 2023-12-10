import React, { useState } from 'react'
import './TeamCard.css'
function TeamCard({team}) {
  const [voteStatus,setVoteStatus]=useState("waitingForVote");
  const [chosenTeam,setChosenTeam]=useState(0);
  return (
    <div className='card-container'>
      <img className='card-img' src={team.img} alt="img" />
      <h1>{team.name}</h1>
      <button>Vote</button>
    </div>
  )
}

export default TeamCard