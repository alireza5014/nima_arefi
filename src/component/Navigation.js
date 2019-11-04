import React from 'react'
import {NavLink,withRouter} from 'react-router-dom'

const items=[
    {
        to:'/',
        exact:true,
        name:"home"
    },
    {
        to:'/about-us',
        name:"about"
    },
    {
        to:'/blog',
        name:"blog"
    },
    {
        to:'/post',
        name:"post"
    },

];
function Navigation() {

    return (

        <ul>
            {
                items.map((item)=>(
                    <li  >
                        <NavLink exact={item.exact || false}  activeClassName={"bg-info"} to={item.to}>{item.name}</NavLink>
                    </li>
                ))
            }




        </ul>
    )
}
export  default Navigation;