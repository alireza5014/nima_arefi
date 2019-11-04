import React from 'react'

import useAuthActions from "../hook/useAuthActions";
import {Redirect} from "react-router-dom";

function Logout() {
    const setLogin=useAuthActions();
    React.useState(()=>{
        setLogin(false)
    })

    return ( <Redirect to='/'/>)




}

export default Logout;