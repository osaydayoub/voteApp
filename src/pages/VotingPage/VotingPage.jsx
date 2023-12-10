import React from 'react'
import './VotingPage.css'
import teamsData from '../../constants/teamsData'
import TeamCard from '../../components/TeamCard/TeamCard'

function VotingPage({ pageName }) {
    return (
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
    )
}

export default VotingPage