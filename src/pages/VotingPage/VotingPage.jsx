import React, { useContext, useEffect, useState } from 'react'
import './VotingPage.css'
import axios from 'axios';

import TeamCard from '../../components/TeamCard/TeamCard'
import { UserContext } from '../../components/Contexts/UserContext';

function VotingPage({ pageName }) {
    const [teamsData, setTeamsData] = useState(null);
    //const [currentUser, setCurrentUser] = useContext(UserContext);

    useEffect(() => {
        axios.get('https://657604270febac18d40395ec.mockapi.io/teams')
            .then((respons) => {
                setTeamsData(respons.data);
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