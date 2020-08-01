import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import UseStorage from '../hooks/useStorage'

const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file);
  
    useEffect(() => {
        if (url) {
            setFile(null)
        }
    }, [url, setFile])

    return (
        <div className="progress-bar" style={{ widows: progress + '%' }}></div>
    )
}

export default ProgressBar
