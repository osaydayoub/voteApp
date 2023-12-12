import React, { useEffect, useState } from 'react'
import './AdminPage.css'
import axios from 'axios';
import { usersUrl, teamsUrl } from '../../constants/teamsUsersData';
function AdminPage({ pageName }) {
  const [usersData, setUsersData] = useState(null);
  const [teamsData, setTeamsData] = useState(null);

  // to do i need to get the last v of users data

  useEffect(() => {
    axios.get(usersUrl)
      .then((respons) => {
        setUsersData(respons.data);
      })
    axios.get(teamsUrl)
      .then((respons) => {
        setTeamsData(respons.data);
      })

  }, []);
  return (
    <div className={`admin-page ${pageName} page`}>
      <h1> The Admin Panel</h1>

      {(usersData === null || teamsData === null) && <div><h1>waiting for data ...</h1></div>}
      {usersData !== null && teamsData !== null &&
        <>
          <div className='admin-users-container'>{
            usersData.map((user) => {
              return (
                <div key={user.id} className='admin-user-conntiner'>
                  <p>{user.name}</p>
                  <p>{user.email}</p>
                  {(user.vote) ? <p style={{color: "green",  fontWeight: 'bold'}}>Voted</p> : <p style={{color: "red"}}>Not Voted</p>}
                </div>
              )
            })
          }
          </div>

          <div className='admin-teams-container'>{
            teamsData.map((team) => {
              return (
                <div key={team.id} className='admin-team-conntiner'>
                  <p>Team Name: {team.name}</p>
                  <p>Votes Number: {team.votesNumber}</p>
                </div>
              )
            })
          }
          </div>


        </>


      }

    </div>

  )
}

export default AdminPage