import React from 'react'
import { useBackgroundTask } from '../../context/BackgroundTask.context';

const UploadComp2 = () => {
    const { appendUploadTask } = useBackgroundTask();

    //Handle File upload
    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const result = e.target.files;
        Array.from(result!).forEach(file => {
            appendUploadTask({ uploadUrl: 'https://google.com', file: file });
        })
    }


    return (
        <button className='' >
            Upload-2
            <input multiple type="file" id="upload_file" onChange={(e) => handleUpload(e)} />
        </button>
    )
}

export default UploadComp2