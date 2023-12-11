import React, { useContext, useState } from 'react'
import './TeamCard.css'
import { UserContext } from '../Contexts/UserContext';
import { SelectedTeamContext } from '../Contexts/SelectedTeamContext';
import { VoteStatusContext } from '../Contexts/VoteStatusContext';
import {usersUrl ,teamsUrl} from '../../constants/teamsUsersData'
import axios from 'axios';
const [noVote, waitingConfirm, voteConfirmed] = ["noVote", "waiting", "confirm"];

function TeamCard({ team }) {
  const [votesNumber, setVotesNumber] = useState(team.votesNumber);
  const [currentUser, setCurrentUser] = useContext(UserContext);
  const [voteStatus, setVoteStatus] = useContext(VoteStatusContext);

  const [selectedTeam, setselectedTeam] = useContext(SelectedTeamContext);

  function handelVote() {
    setVoteStatus(waitingConfirm);
    setselectedTeam(team.id);
    console.log(team.id);
  }
  function handelConfirmVote() {
    //update user using axios
    axios
      .put(`${usersUrl}/${currentUser.id}`,   {
        "name": currentUser.name,
        "email": currentUser.email,
        "vote": true,
        "password": currentUser.password,
        "admin": currentUser.admin,
        "voteForTeam": team.id,
        "id": currentUser.id
      })
      .then((response) => {
        setPost(response.data);
      });
    //update team votes using axios
    axios
    .put(`${teamsUrl}/${team.id}`,     {
      "name": team.name,
      "votesNumber": team.votesNumber+1,
      "img": team.img,
      "id": team.id
    })
    .then((response) => {
      setPost(response.data);
    });

    setVoteStatus(voteConfirmed);
    setVotesNumber(votesNumber => votesNumber + 1);
    console.log('handelConfirmVote');
  }

  function handelCancleVote() {
    setVoteStatus(noVote);
    console.log('handelCancleVote');
  }
  function handelChangeVote() {
    // if(selectedTeam === team.id){
    // setVotesNumber(votesNumber => votesNumber - 1);

    // }
    setVoteStatus(noVote);

    console.log('handelChangeVote');
  }

  return (
    <div className='card-container'>
      <p>Votes:{votesNumber}</p>
      <img className='card-img' src={team.img} alt="img" />
      <h2>{team.name}</h2>
      {/* {selectedTeam === null && <button onClick={handelVote}>Vote</button>} */}
      {voteStatus === noVote && <button onClick={handelVote}>Vote</button>}
      {voteStatus === waitingConfirm && selectedTeam === team.id &&
        <div>
          <button onClick={handelConfirmVote}>I'm Sure</button>
          <button onClick={handelCancleVote}>Cancel</button>
        </div>
      }
      {voteStatus === voteConfirmed &&
        <div>
          <button onClick={handelChangeVote}>Change My Vote!</button>
        </div>
      }
    </div>
  )
}

export default TeamCard