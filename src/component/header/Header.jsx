import React from 'react'
import "../../style/header.css"

const Header = () => {
    return (
        <header>
            <div className='logoName'>
                <div className='logo'>
                    <img src='/img/Logo.png' alt='logo'/>
                </div>
                <div>
                    <span className='name'>
                        BestShop
                    </span>
                </div>
            </div>
            <div className={"search"}>
                <input placeholder={"Поиск BestShop"}/>
            </div>
            <div className='profile'>
                <img src={"img/Profile.png"} alt={"User"}/>
            </div>
        </header>
    )
}
export default Header
