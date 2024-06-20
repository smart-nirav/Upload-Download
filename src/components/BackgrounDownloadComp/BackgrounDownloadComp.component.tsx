import { useBackgroundTask } from "../../context/BackgroundTask.context";
import AccordionComp from "../Accordion";

const BackgrounDownloadComp = () => {
    const { uploadTasks } = useBackgroundTask();

    return (
        <>
            <p>Download</p>
            <AccordionComp tasks={uploadTasks} />
        </>
    )
}

export default BackgrounDownloadComp