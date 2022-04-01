import React from 'react'

const Link = ({href , className, children}) => {

    const whenClicked = (e) =>{
        e.preventDefault();
        window.history.pushState({}, "", href);
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent)
    }

  
    return (
        <a href={href} className = {className} onClick = {(e) => {whenClicked(e)}}>{children}</a>
    )
}

export default Link;