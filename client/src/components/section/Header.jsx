import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Header = () => {
    const [currentTime, setCurrentTime] = useState('');
    const [currentTemp, setCurrentTemp] = useState('');
    const [lowTemp, setLowTemp] = useState('');
    const [highTemp, setHighTemp] = useState('');

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
                setLowTemp(data.main.temp_min);
                setHighTemp(data.main.temp_max);
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
                scrub: true
            }
        });

        // Cleanup function
        return () => {
            document.removeEventListener("scroll", scrollHandler);
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <header id="header">
                <div className="left">
                    <h1>Developer</h1>
                    <ul>
                        <li><a href="/Intro#section1">about</a></li>
                        <li><a href="/Project#section3">project</a></li>
                        <li><a href="/Skill#section5">skill</a></li>
                        <li><a href="/Contact#section">contact</a></li>
                    </ul>
                </div>
                <div className="right">
                    <div className="time">{currentTime}</div>
                    <div className="country"></div>
                    <div id="coordinates"></div>
                </div>
            </header>
            <div className="border">
                <h2>Current Weather</h2>
                <h3 className="ctemp">현재온도: {currentTemp}</h3>
                <h3 className="lowtemp">최저온도: {lowTemp}</h3>
                <h3 className="hightemp">최고온도: {highTemp}</h3>
            </div>
        </>
    );
}

export default Header;
