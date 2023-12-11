import React, { useContext, useEffect, useState } from 'react'
import './VotingPage.css'
import axios from 'axios';

import TeamCard from '../../components/TeamCard/TeamCard'
import { UserContext } from '../../components/Contexts/UserContext';
import { VotesNumberContext } from '../../components/Contexts/VotesNumberContext';
import { SelectedTeamContext } from '../../components/Contexts/SelectedTeamContext';

function VotingPage({ pageName }) {
    const [teamsData, setTeamsData] = useState(null);
    const [currentUser, setCurrentUser] = useContext(UserContext);
    const [VotesNumberArray, setVotesNumberArray] = useContext(VotesNumberContext);
    const [selectedTeam, setselectedTeam] = useContext(SelectedTeamContext);

    useEffect(() => {
        axios.get('https://657604270febac18d40395ec.mockapi.io/teams')
            .then((respons) => {
                setTeamsData(respons.data);
                const teams = respons.data;
                const array = [];
                for (let i = 0; i < teams.length; i++) {
                    array.push(teams[i].votesNumber)
                    if (teams[i].id === currentUser.voteForTeam) {
                        setselectedTeam(teams[i]);
                    }
                }
                setVotesNumberArray(array)

                // console.log(`array=${array}`)

            })

    }, []);




    return (
        <>
            {teamsData === null && <div><h1>waiting for data ...</h1></div>}
            {teamsData !== null &&
                <div className={`voting-page ${pageName} page`}>
                    <h1>Who will win the 2023-24 Champions League?</h1>
                    <div className='cards-container' id='cards-id'>{
                        teamsData.map((team) => {
                            return (
                                <TeamCard key={team.id} team={team} />
                            )
                        })
                    }
                    </div>
                </div>
            }
        </>

    )
}

export default VotingPage