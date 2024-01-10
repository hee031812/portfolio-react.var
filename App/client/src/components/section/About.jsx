// App.js
import React from 'react';
import Picture from '../../utills/Picture';
import Desc from '../../utills/Desc';
import piture01 from '../../assets/img/사진01.jpg'
import piture02 from '../../assets/img/사진02.jpg'
import piture03 from '../../assets/img/사진03.jpg'
import piture04 from '../../assets/img/사진04.jpg'
import piture05 from '../../assets/img/사진05.jpg'
import piture06 from '../../assets/img/사진06.jpg'
import piture11 from '../../assets/img/사진11.jpg'
import piture12 from '../../assets/img/사진12.jpg'
import piture13 from '../../assets/img/사진13.jpg'
import piture14 from '../../assets/img/사진14.jpg'
import piture15 from '../../assets/img/사진15.jpg'
import git from '../../assets/img/git.png'
import dot from '../../assets/img/@.png'


const About = () => (
    <div id="section2">
        <h5>{"{ about me }"}</h5>
        <div className="Container">
            <Picture src={piture15} alt="" note={<span>@Heejin's -
                <a className="git" href="https://github.com/hee031812/hee031812.git" target="_top">
                    <img src={git} alt="GitHub" />
                </a>
                <a className="mail" href="https://twitter.com/DeyJordan" target="_top">
                    <img src={dot} alt="Twitter" />
                </a>
            </span>} />
            <Picture src={piture01} alt="" note={<span>like to travel</span>} />
            <Picture src={piture03} alt="" note={<span>In cafe</span>} />
            <Picture src={piture02} alt="" note={<span>I like dogs</span>} />
            <Picture src={piture14} alt="" note={<span>When I was a flight attendant</span>} />
            <Picture src={piture05} alt="" note={<span>In the mountains</span>} />
            <Picture src={piture11} alt="" note={<span>Coffee</span>} />
            <Picture src={piture13} alt="" note={<span>a mechanical design researcher</span>} />
            <Picture src={piture12} alt="" note={<span>Winter</span>} />
            <Picture src={piture06} alt="" note={<span>Autumn</span>} />
            <Picture src={piture04} alt="" note={<span>One summer day</span>} />
        </div>

        <Desc />
    </div>
);

export default About;
