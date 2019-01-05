import React from "react";
import { NavLink } from 'react-router-dom'

class Createlink extends React.Component{
    render(){
        return(
            <NavLink to="/create">Create</NavLink>
        )
    }
}

export default Createlink