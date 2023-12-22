import React, { useState, useEffect } from 'react';

const Header = () => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateHeaderAside = () => {
            const now = new Date();
            const koreaTime = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Seoul' });
            setCurrentTime(koreaTime);
        };

        const scrollHandler = () => {
            const scrollY = (window.scrollY || window.pageYOffset).toFixed(3);
            const coordinatesElement = document.getElementById("coordinates");
            coordinatesElement.textContent = "Scroll: " + scrollY;
        };

        // Set up the scroll event listener
        document.addEventListener("scroll", scrollHandler);

        // Set up the interval for updating the header aside
        const intervalId = setInterval(updateHeaderAside, 1000);

        // Clean up: remove the event listener and clear the interval
        return () => {
            document.removeEventListener("scroll", scrollHandler);
            clearInterval(intervalId);
        };
    }, []); // Empty dependency array means this effect runs once after the initial render

    return (
        <>
            <header id="header">
                <div className="left">
                    <h1>Developer</h1>
                    <ul>
                        <li><a href="#">about</a></li>
                        <li><a href="#">project</a></li>
                        <li><a href="#">skill</a></li>
                        <li><a href="#">contact</a></li>
                    </ul>
                </div>
                <div className="right">
                    <div className="time">{currentTime}</div>
                    <div className="contry"></div>
                    <div id="coordinates"></div>
                </div>
            </header>
            <div className="border"></div>
        </>
    );
}

export default Header;
