import React from 'react';

const Loading = ({ isLoading }) => {


    if (!isLoading) {
        return null;
    }
    return (
        <div className="center">
            <div className="container">
                <span id="cog-0"></span>
                <span id="cog-45"></span>
                <span id="cog-90"></span>
                <span id="cog-135"></span>
            </div>
            <p className="loading-text">Loading Contents...</p>
        </div>
    );
};

export default Loading;
