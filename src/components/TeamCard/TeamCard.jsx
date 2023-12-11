import React, { useContext, useState } from 'react'
import './TeamCard.css'
import { UserContext } from '../Contexts/UserContext';
import { SelectedTeamContext } from '../Contexts/SelectedTeamContext';
import { VoteStatusContext } from '../Contexts/VoteStatusContext';
import { usersUrl, teamsUrl } from '../../constants/teamsUsersData'
import axios from 'axios';
import { VotesNumberContext } from '../Contexts/VotesNumberContext';
const [noVote, waitingConfirm, voteConfirmed] = ["noVote", "waiting", "confirm"];

function TeamCard({ team }) {
  //const [votesNumber, setVotesNumber] = useState(team.votesNumber);
  const [currentUser, setCurrentUser] = useContext(UserContext);
  const [voteStatus, setVoteStatus] = useContext(VoteStatusContext);
  const [selectedTeam, setselectedTeam] = useContext(SelectedTeamContext);
  const [VotesNumberArray, setVotesNumberArray] = useContext(VotesNumberContext);

  function getIndex(ID) {
    return Number(ID) - 1;
  }

  function updateArray(array, index, value) {
    const newArray = []
    array.map((x, i) => {
      if (i === index) {
        newArray.push(x + value);
      } else {
        newArray.push(x);
      }
    })
    return newArray
  }


  function handelVote() {
    setVoteStatus(waitingConfirm);
    setselectedTeam(team);
    console.log(team.id);
  }
  function handelConfirmVote() {
    //update user using axios
    axios
      .put(`${usersUrl}/${currentUser.id}`, {
        "name": currentUser.name,
        "email": currentUser.email,
        "vote": true,
        "password": currentUser.password,
        "admin": currentUser.admin,
        "voteForTeam": team.id,
        "id": currentUser.id
      });
    //update team votes using axios
    axios
      .put(`${teamsUrl}/${team.id}`, {
        "name": team.name,
        "votesNumber": VotesNumberArray[getIndex(team.id)] + 1,
        "img": team.img,
        "id": team.id
      });

    setVoteStatus(voteConfirmed);
    // setVotesNumber(votesNumber => votesNumber + 1);

    setVotesNumberArray(updateArray((VotesNumberArray), getIndex(team.id), 1));
    console.log(team.votesNumber);
    console.log(updateArray((VotesNumberArray), getIndex(team.id), 1));
    console.log(VotesNumberArray);
  }

  function handelCancleVote() {
    setVoteStatus(noVote);
    console.log('handelCancleVote');
  }
  function handelChangeVote() {

    //update user using axios
    axios
      .put(`${usersUrl}/${currentUser.id}`, {
        "name": currentUser.name,
        "email": currentUser.email,
        "vote": false,
        "password": currentUser.password,
        "admin": currentUser.admin,
        "voteForTeam": 0,
        "id": currentUser.id
      });
    if (selectedTeam.id === team.id) {
      //update team votes using axios
      axios
        .put(`${teamsUrl}/${team.id}`, {
          "name": team.name,
          "votesNumber": VotesNumberArray[getIndex(team.id)] - 1,
          "img": team.img,
          "id": team.id
        });

      setVotesNumberArray(updateArray((VotesNumberArray), getIndex(team.id), -1));
      //todo check withe this setselectedTeam(null);
    } else {
      //update team votes using axios
      axios
        .put(`${teamsUrl}/${selectedTeam.id}`, {
          "name": selectedTeam.name,
          "votesNumber": VotesNumberArray[getIndex(selectedTeam.id)] - 1,
          "img": selectedTeam.img,
          "id": selectedTeam.id
        });
      setVotesNumberArray(updateArray((VotesNumberArray), getIndex(selectedTeam.id), -1));
      console.log("hi ther")
      console.log(VotesNumberArray[getIndex(selectedTeam.id)] - 1)
      console.log(updateArray((VotesNumberArray), getIndex(selectedTeam.id), -1))


    }


    setVoteStatus(noVote);
    console.log('handelChangeVote');
 

  }

  return (
    <div className='card-container'>
      <p>Votes:{VotesNumberArray[getIndex(team.id)]}</p>
      <img className='card-img' src={team.img} alt="img" />
      <h2>{team.name}</h2>
      {/* {selectedTeam === null && <button onClick={handelVote}>Vote</button>} */}
      {voteStatus === noVote && <button onClick={handelVote}>Vote</button>}
      {voteStatus === waitingConfirm && selectedTeam.id === team.id &&
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