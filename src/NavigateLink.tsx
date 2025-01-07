import React from 'react';
import { useNavigate } from "react-router";
import './NavigateLink.css';

interface NavigateLinkProps
{
    link: string,
    label: string,
}

export const NavigateLink = ({link, label} : NavigateLinkProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(link);
    }

    return (
        <button className="nav-button" onClick={handleClick} type="button">{label}</button>
    );
}