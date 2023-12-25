import React, { useState, useEffect } from 'react';

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
                        <li><a href="#">about</a></li>
                        <li><a href="#">project</a></li>
                        <li><a href="#">skill</a></li>
                        <li><a href="#">contact</a></li>
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
