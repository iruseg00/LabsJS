import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

export default function Header()
{
    return (
        <div className={style.navigation}>
            <Link to="/" className={style.links}>
                <div className={style.logoName}>Bot Ted</div>
            </Link>
        </div>    
    );
}