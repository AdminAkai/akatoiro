import React from 'react';
import styled from 'styled-components';

const MobileNavbarWrapper = styled.div`
    display: none;
    font-size: 12px;
    height: 3rem;
    position: relative;
    width: 3rem;
    @media only screen and (max-width: 40em) {
        display: block;
        margin-right: 4rem;
    }
    /* Remove default button styles */
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    &:after {
        content: "";
        display: block;
        height: 150%;
        left: -25%;
        position: absolute;
        top: -25%;
        width: 150%;
    }
`
const MobileNavbarLines = styled.div`
    top: 50%;
    margin-top: -0.125em;
    &,
    &:after,
    &:before {
        /* Create Lines */
        background-color: ${props => props.theme.text};
        content: "";
        display: block;
        height: 2px;
        pointer-events: none;
        position: absolute;
        width: 100%;
    }
    &:after {
        /* move bottom line before center line */
        top: -0.8rem;
    }
    &:before {
        /* move top line on top of center line */
        top: 0.8rem;
    }
`

function MobileNavbar({ onClick }) {
    return (
        <MobileNavbarWrapper onClick={onClick}>
            <MobileNavbarLines />
        </MobileNavbarWrapper>
    )

}

export default MobileNavbar