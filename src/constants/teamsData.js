import manchesterCity from '../assets/man-city.png'
import bayernMunich from '../assets/bayern-munchen.png'
import realMadrid from '../assets/real-madrid.png'
import arsenal from '../assets/arsenal.png'

const [team1, team2, team3, team4] = ["Manchester City", "Bayern Munich", "Real Madrid", "Arsenal"]
const [usersUrl, teamsUrl] = ["https://657604270febac18d40395ec.mockapi.io/users",
    "https://657604270febac18d40395ec.mockapi.io/teams"
]



const teamsData = [
    {
        id: 101,
        name: team1,
        img: manchesterCity,
        votes: 0
    },
    {
        id: 102,
        name: team2,
        img: bayernMunich,
        votes: 0
    },
    {
        id: 103,
        name: team3,
        img: realMadrid,
        votes: 0
    },
    {
        id: 104,
        name: team4,
        img: arsenal,
        votes: 0
    }
];

export default teamsData;