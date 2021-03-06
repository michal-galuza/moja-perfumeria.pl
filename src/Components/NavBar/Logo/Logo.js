import React from 'react';
import {NavLink} from 'react-router-dom';
import {LogoStyled} from './LogoStyled';

const Logo = ({className , ismenu})=>(
    <LogoStyled ismenu={ismenu} className={className} as={NavLink} to="/" >Perfumeria</LogoStyled>
);
export default Logo;