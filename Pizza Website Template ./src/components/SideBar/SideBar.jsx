import React from 'react'
import {SideBarContainer,Icon,CloseIcon,SideBarMenu,SideBarLink,SideBarBtn,SideBarRoute} from './SideBarStyles'

const SideBar = ({isOpen , toggle }) => {
    return (
        <SideBarContainer isOpen={isOpen} toggle={toggle} >
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarMenu>
                <SideBarLink to="/">Pizzas 🍕  </SideBarLink>
                <SideBarLink to="/">Desserts 🍩 </SideBarLink>
                <SideBarLink to="/">Full Menu 🗒 </SideBarLink>

            </SideBarMenu>
            <SideBarBtn>
                <SideBarRoute to='/'>Place Order</SideBarRoute>
            </SideBarBtn>
        </SideBarContainer>
    )
}

export default SideBar
