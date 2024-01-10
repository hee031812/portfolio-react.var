import React, { useState } from 'react';



const Layer = ({ project }) => {
    const [isVisible, setIsVisible] = useState(true);
    if (!project || !isVisible) {
        return null;
    }

    const handleClose = () => {
        setIsVisible(false);
    }


    return (
        <div className="layer">
            <div className="layer__wrap">
                <div className="layer m1">
                    <div className="layer__inner">
                        <div className="layer__left">
                            <img src={project.image} alt={project.name} />
                        </div>
                        <div className="layer__right">
                            <h6>{project.name}</h6>
                            <div className='layerStack'>
                                <div>{project.stack1}</div>
                                <div>{project.stack2}</div>
                                <div>{project.stack3}</div>
                            </div>
                            <div className='layerTitle'>
                                <div className="layerTitle01"># 프로젝트 설명</div>
                                <div className="layerDesc01">{project.desc}</div>
                            </div>
                            <div className='layerTitle'>
                                <div className="layerTitle01"># 주요기능</div>
                                <div className="layerDesc01">{project.desc1}</div>
                            </div>
                            <div className='showWrap'>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className='show'>show</a>
                                <div className="close" onClick={handleClose}>close</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layer;
