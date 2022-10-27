import React from "react";
import './Button.css'
import {Link} from "react-router-dom";

const STYLES = ['btn--primary', 'btn--outline '];
const SIZES = ['btn--medium', 'btn--large'];
export const Button = ({children, type, onClick, buttonStyle, buttonSize}
) => {
    const checkButtonStyle= STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
        <Link to ='/contactus' className=''>
            <button className={` shadow shadow-boog-black relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-boog-blue group-hover:from-purple-600 group-hover:to-boog-blue hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800`} onClick={onClick} type={type}>
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    {children}
                </span>
            </button>
        </Link>
    )
};
