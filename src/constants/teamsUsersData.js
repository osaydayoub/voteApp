// import manchesterCity from '../assets/man-city.png'
// import bayernMunich from '../assets/bayern-munchen.png'
// import realMadrid from '../assets/real-madrid.png'
// import arsenal from '../assets/arsenal.png'

const [team1, team2, team3, team4] = ["Manchester City", "Bayern Munich", "Real Madrid", "Arsenal"]
const [usersUrl, teamsUrl] = ["https://657604270febac18d40395ec.mockapi.io/users",
    "https://657604270febac18d40395ec.mockapi.io/teams"
]
export { usersUrl, teamsUrl }


const teamsData = [
    {
        id: 101,
        name: "Manchester City",
        img: 'https://img.uefa.com/imgml/TP/teams/logos/140x140/52919.png',
        votes: 0
    },
    {
        id: 102,
        name: "Bayern Munich",
        img: 'https://img.uefa.com/imgml/TP/teams/logos/140x140/50037.png',
        votes: 0
    },
    {
        id: 103,
        name: "Real Madrid",
        img: 'https://img.uefa.com/imgml/TP/teams/logos/140x140/50051.png',
        votes: 0
    },
    {
        id: 104,
        name: "Arsenal",
        img: 'https://img.uefa.com/imgml/TP/teams/logos/140x140/52280.png',
        votes: 0
    }
];

export default teamsData;