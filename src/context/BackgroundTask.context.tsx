
import { createContext, useContext, useState, ReactNode } from 'react';

type BackgroundContextType = {
    uploadTasks: UploadTask[],
    downloadTasks?: DownloadTask
    appendUploadTask: (task: UploadTask) => void,
    appendDownloadTask: (task: DownloadTask) => void
}

export interface UploadTask {
    uploadUrl: string,
    file: File
}

interface DownloadTask {
    downloadUrl: string,
}

export const BackgroundTaskProvider = ({ children }: { children: ReactNode }) => {
    const [uploadTasks, setUploadTasks] = useState<UploadTask[]>([]);
    const [downloadTasks, setDownloadTasks] = useState<DownloadTask[]>([]);

    const appendUploadTask = (task: UploadTask) => {
        setUploadTasks((uploadTasks) => [...uploadTasks, task])
    }

    const appendDownloadTask = (task: DownloadTask) => {
        setDownloadTasks([...downloadTasks, task])
    }

    return (
        <BackgroundTaskContext.Provider value={{ uploadTasks, appendUploadTask, appendDownloadTask }}>
            {children}
        </BackgroundTaskContext.Provider>
    );
};

const BackgroundTaskContext = createContext<BackgroundContextType | null>(null);

export const useBackgroundTask = () => {
    const context = useContext(BackgroundTaskContext)
    if (!context) throw Error('Please wrap inside Conversation Provider')

    return context

};