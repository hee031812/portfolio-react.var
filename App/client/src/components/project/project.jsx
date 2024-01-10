import React from 'react'

const project = ({ text, index, setModal }) => {

    const handleClick = () => {
        window.open(text.link, '_blank');
    };

    return (
        <div
            className='project'
            onMouseEnter={() => { setModal({ active: true, index: index }) }}
            onMouseLeave={() => { setModal({ active: false, index: index }) }}
        >
            <div className='left' onClick={handleClick}>
                <span >{text.subTitle}</span>
                <i>{text.title}</i>
                <p>{text.desc}</p>
            </div>
            <div className='icon' >{text.icon}</div>
        </div>
    )
}

export default project