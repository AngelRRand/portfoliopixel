import logo from '../assets/NavBotton/PJprueba.gif'
import nutria from '../assets/NavBotton/nutria.gif'
import logoSinCasco from '../assets/NavBotton/PJpruebaSinCasco.gif'
import nutriaSinCasco from '../assets/NavBotton/nutriaSinCasco.gif'

/* import Typewriter from 'typewriter-effect'; */
import { useLocation, useNavigate } from "react-router-dom";

import './Nav.css'
import Typing from './Typing';
const Nav = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const currentUrl = location.pathname.toString()
    if (currentUrl !== '/') {
        return (
            <nav className="nav">
                <div className='container_perfil left_perfil'>
                    <img
                        src={location.pathname.toString() === '/about/' ? logoSinCasco : logo}
                        alt=""
                        className='img_perfil ' />
                    <h2>Orasio</h2>
                </div>
                <div className='nav_btn_medium'>
                        <h1>HOLA</h1>
                        <h1>HOLA</h1>
                        <h1>HOLA</h1>
                    </div>
                <div className='nav_text'>

                    <Typing
                        text={
                            currentUrl === '/home' ? 
                            'WELCOME!!'
                            :
                            currentUrl === '/about' ? 
                            'YOU ARE IN THE PLANET TERRA'
                            :
                            currentUrl === '/projects' ? 
                            'P0RJECTS'
                            :
                            currentUrl === '/education' ?
                            'EDUCATION'
                            :
                            currentUrl === '/house' ?
                            'HOUSEEE'
                            :
                            currentUrl === '/art' ?
                            'ARTTTT'
                            :
                            'PRODUCTIONS'
                        }
                    />
                    
                    
                </div>

                <div className='container_perfil rigth_perfil'>
                    <img
                        src={location.pathname.toString() === '/about/' ? nutriaSinCasco : nutria}
                        alt=""
                        className='img_perfil ' />
                    <h2>Orasio</h2>
                </div>
            </nav>
        )
    } else {
        return <></>
    }
}

export default Nav