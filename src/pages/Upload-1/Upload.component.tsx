import React from 'react'
import { useBackgroundTask } from '../../context/BackgroundTask.context';

const UploadComp1 = () => {

    const { appendUploadTask } = useBackgroundTask();

    //Handle File upload
    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        debugger
        const result = e.target.files;
        Array.from(result!).forEach(file => {
            appendUploadTask({ uploadUrl: 'https://amazon.com', file: file });
        })
    }

    return (
        <button className=''>
            Upload-1
            <input multiple type="file" id="upload_file" onChange={(e) => handleUpload(e)} />
        </button>
    )
}

export default UploadComp1