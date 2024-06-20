import { useBackgroundTask } from "../../context/BackgroundTask.context";
import AccordionComp from "../Accordion"

const BackgroundUploadComp = () => {
    const { uploadTasks } = useBackgroundTask();

    return (
        <AccordionComp tasks={uploadTasks} />
    )
}

export default BackgroundUploadComp