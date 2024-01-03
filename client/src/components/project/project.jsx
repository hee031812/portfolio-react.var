import React from 'react'

const project = ({ text, index, setModal }) => {
    return (
        <div
            className='project'
            onMouseEnter={() => { setModal({ active: true, index: index }) }}
            onMouseLeave={() => { setModal({ active: false, index: index }) }}
        >
            <h2>
                <span>{text.subTitle}</span>
                <i>{text.title}</i>
                <p>{text.desc}</p>
            </h2>
            <div className='date'>{text.icon}</div>
        </div>
    )
}

export default project