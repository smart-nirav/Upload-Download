import { BackgrounDownloadComp } from "../../components";
import { useBackgroundTask } from "../../context/BackgroundTask.context";

const DownloadComp1 = () => {

    const { appendDownloadTask } = useBackgroundTask()

    const DummyDownloadFiles = [
        {
            name: 'Abc.pdf',
            size: 1000,
            type: 'pdf'
        },
        {
            name: 'Abc.pdf',
            size: 1000,
            type: 'pdf'
        },
        {
            name: 'Abc.pdf',
            size: 1000,
            type: 'pdf'
        }
    ];

    const handleDownload = () => {
        appendDownloadTask({ downloadUrl: 'http://google.com' });
    }

    return (
        <div>
            <button onClick={handleDownload}>Download-1</button>
            <BackgrounDownloadComp />
        </div>
    )
}

export default DownloadComp1