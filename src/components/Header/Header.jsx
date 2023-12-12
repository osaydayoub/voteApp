import './Header.css'
import { siteLinks, adminSiteLinks } from '../../constants/siteLinkes'
import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';
import { ModeContext } from '../Contexts/ModeContext';
import { LoginContext } from '../Contexts/LoginContext';
import { GrLogout } from "react-icons/gr";

const [dayMode, nightMode] = ['day', 'night'];

export default function Header({ classList, handleChangePage, buttonChildren }) {
    const [mode, setMode] = useContext(ModeContext);
    const [currentUser, setCurrentUser] = useContext(UserContext);
    const [Login, setLogin] = useContext(LoginContext);



    function handleLogout() {
        setLogin(false);
        // setCurrentPage
    }

    function handleClick() {
        if (mode === dayMode) {
            setMode(nightMode)
            console.log("setMode(nightMode)")
        } else {
            setMode(dayMode)
            console.log("setMode(dayMode)")
        }
    }
    return (
        <div
            className={(mode === dayMode) ? `Header-day-mode Header` : `Header-night-mode Header`}>
            <h3>Champions Vote</h3>
            <h3>{`Hello! ${currentUser.name}`}</h3>
            {currentUser.admin &&
                <div className='link-container'>
                    {adminSiteLinks.map((pageName, index) => {
                        return <span key={index} onClick={() => handleChangePage(pageName)} >{pageName}</span>
                    })
                    }
                </div>
            }
            {!currentUser.admin &&
                <div className='link-container'>
                    {siteLinks.map((pageName, index) => {
                        return <span key={index} onClick={() => handleChangePage(pageName)} >{pageName}</span>
                    })
                    }
                </div>
            }
            <button
                className={(mode === dayMode) ? "btn-day" : "btn-night"}
                onClick={handleLogout}>Logout <GrLogout />

            </button>

            <button
                className={(mode === dayMode) ? "btn-day" : "btn-night"}
                onClick={handleClick}>
                {(mode === dayMode) ? "Make Night" : "Make Day"}
            </button>
        </div>
    )
}

