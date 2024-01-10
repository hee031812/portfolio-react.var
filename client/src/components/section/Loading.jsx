import React from 'react';

const Loading = ({ isLoading }) => {


    if (!isLoading) {
        return null;
    }
    return (
        <div class="center">
            <div class="container">
                <span id="cog-0"></span>
                <span id="cog-45"></span>
                <span id="cog-90"></span>
                <span id="cog-135"></span>
            </div>
            <p class="loading-text">Loading Contents...</p>
        </div>
    );
};

export default Loading;
