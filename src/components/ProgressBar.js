import React from 'react';
import useStorage from '../hooks/useStorage';
import UseStorage from '../hooks/useStorage'

const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file);
    console.log(progress, url);

    return (
        <div className="progress-bar">progress</div>
    )
}

export default ProgressBar
