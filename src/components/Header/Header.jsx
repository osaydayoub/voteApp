import './Header.css'
import { siteLinks } from '../../constants/siteLinkes'
import { useContext } from 'react';
import { ModeContext } from '../ModeContext';

const [dayMode, nightMode] = ['day', 'night'];

export default function Header({ classList, handleChangePage, buttonChildren }) {
    const { mode, setMode } = useContext(ModeContext);

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
            <div className='link-container'>
                {siteLinks.map((pageName, index) => {
                    return <span key={index} onClick={() => handleChangePage(pageName)} >{pageName}</span>
                })
                }
            </div>
            <button
                className={(mode === dayMode) ? "btn-day" : "btn-night"}
                onClick={handleClick}>
                {(mode === dayMode) ? "Make Night" : "Make Day"}
            </button>
        </div>
    )
}

// classList={(mode === dayMode) ? `Header-day-mode` : `Header-night-mode`}
// buttonChildren={(mode === dayMode) ? "Make Night" : "Make Day"}