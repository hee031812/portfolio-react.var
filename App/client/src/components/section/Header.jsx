import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Header = () => {
    const [weatherIcon, setWeatherIcon] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [currentTemp, setCurrentTemp] = useState('');
    const [highTemp, setHighTemp] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const updateHeaderAside = () => {
            const now = new Date();
            const koreaTime = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Seoul' });
            setCurrentTime(koreaTime);
        };

        const scrollHandler = () => {
            const scrollY = (window.scrollY || window.pageYOffset).toFixed(3);
            const coordinatesElement = document.getElementById("coordinates");
            if (coordinatesElement) {
                coordinatesElement.textContent = "Scroll: " + scrollY;
            }
        };

        document.addEventListener("scroll", scrollHandler);

        const intervalId = setInterval(updateHeaderAside, 1000);

        const fetchWeatherData = async () => {
            try {
                const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=652fdcd06848fb153a7c4d83d2500d7e&units=metric');
                const data = await response.json();
                setCurrentTemp(data.main.temp);
                setHighTemp(data.main.temp_max);

                const iconCode = data.weather[0].icon;
                const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
                setWeatherIcon(iconUrl);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();

        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".border", {
            yPercent: 100,
            ease: "none",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                markers: false,
            }
        });


        return () => {
            document.removeEventListener("scroll", scrollHandler);
            clearInterval(intervalId);
        };
    }, []);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 800);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <>
            <header id="header">
                <div className="left">
                    <h1><a href="/#section1">Developer</a></h1>
                    {isMobile ? (
                        <div className="toggle-menu" onClick={toggleMenu}>
                            <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 4.75C0.585786 4.75 0.25 5.08579 0.25 5.5C0.25 5.91421 0.585786 6.25 1 6.25V4.75ZM13 6.25C13.4142 6.25 13.75 5.91421 13.75 5.5C13.75 5.08579 13.4142 4.75 13 4.75V6.25ZM1 8.75C0.585786 8.75 0.25 9.08579 0.25 9.5C0.25 9.91421 0.585786 10.25 1 10.25V8.75ZM13 10.25C13.4142 10.25 13.75 9.91421 13.75 9.5C13.75 9.08579 13.4142 8.75 13 8.75V10.25ZM1 0.75C0.585786 0.75 0.25 1.08579 0.25 1.5C0.25 1.91421 0.585786 2.25 1 2.25V0.75ZM13 2.25C13.4142 2.25 13.75 1.91421 13.75 1.5C13.75 1.08579 13.4142 0.75 13 0.75V2.25ZM1 6.25H13V4.75H1V6.25ZM1 10.25H13V8.75H1V10.25ZM1 2.25H13V0.75H1V2.25Z" fill="#F14620" />
                            </svg>
                        </div>
                    ) : (
                        <ul>
                            <li><a href="/#section1">about</a></li>
                            <li><a href="/#section3">project</a></li>
                            <li><a href="/#section05">skill</a></li>
                            <li><a href="/#section07">contact</a></li>
                        </ul>
                    )}
                </div>
                <div className="right">
                    <div className="time">{currentTime}</div>
                    <div className="country"></div>
                    <div id="coordinates"></div>
                </div>
            </header>
            <div className="border">
                <img className='weatherIcon' src={weatherIcon} alt="Weather Icon" />
                <h3 className="ctemp">🌡 현재온도:{currentTemp} </h3>
                {/* <h3 className="lowtemp">최저온도: </h3> */}
                <h3 className="hightemp">🌡 최고온도: {highTemp} </h3>
            </div>
            {isMobile && isMenuOpen && (
                <ul className="mobile-menu">
                    <li><a href="/#section1">about</a></li>
                    <li><a href="/#section3">project</a></li>
                    <li><a href="/#section05">skill</a></li>
                    <li><a href="/#section07">contact</a></li>
                </ul>
            )}
        </>
    );
}

export default Header;
