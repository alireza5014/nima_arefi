import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import useAuth from "../hook/useAuth";

const items = [
    {
        to: '/',
        exact: true,
        name: "home"
    },
    {
        to: '/about-us',
        name: "about"
    },
    {
        to: '/blog',
        name: "blog"
    },
    {
        to: '/post',
        name: "post"
    },
    {
        access:'guest',

        to: '/login',
        name: "login"
    },

    {
        access:'auth',
        to: '/profile',
        name: "profile"
    },

    {
        access:'auth',
        to: '/logout',
        name: "logout"
    },

];

function Header(props) {
  const  isLoggedIn=useAuth();



    return (

        <ul>
             {
                items.map((item) => (
                    <>
                    {
                   isLoggedIn&&item.access!=='guest'||!isLoggedIn&&item.access!=='auth'?   <li>  <NavLink  exact={item.exact || false} activeClassName={"bg-info"}  to={item.to}>{item.name}</NavLink></li> :  ""
                    }
                    </>
                ))
            }

        </ul>
    )
}

export default Header;