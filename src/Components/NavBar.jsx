import React from 'react'
import {AppBar,styled,Toolbar, Typography} from "@mui/material";
import {NavLink} from 'react-router-dom';

const Header = styled(AppBar)`
background:#58787B;

`
const Tabs = styled(NavLink)`
  font-size:20px;
  margin-right: 20px;
  color: inherit;
  text-decoration: none;

`

function NavBar() {
  return (
    <Header position='static'>
        <Toolbar>
            <Tabs to="/">All Users</Tabs>

        </Toolbar>
    </Header>
  )
}

export default NavBar