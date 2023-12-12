import React, { useEffect, useState } from 'react'
import './AdminPage.css'
import axios from 'axios';
function AdminPage({ pageName }) {
  const [usersData, setUsersData] = useState(null);
  // to do i need to get the last v of users data

  useEffect(() => {
    axios.get('https://657604270febac18d40395ec.mockapi.io/users')
      .then((respons) => {
        setUsersData(respons.data);
      })
  }, []);
  return (
    <div className={`admin-page ${pageName} page`}>
      <h1> The Admin Panel</h1>

      {usersData === null && <div><h1>waiting for data ...</h1></div>}
      {usersData !== null &&
        <div className='admin-users-container'>{
          usersData.map((user) => {
            return (
              <div key={user.id} className='admin-user-conntiner'>
                <p>{user.name}</p>
                <p>{user.email}</p>
                {(user.vote) ? <p>Voted</p> : <p>Not Voted</p>}
              </div>
            )
          })
        }
        </div>
      }

    </div>

  )
}

export default AdminPage