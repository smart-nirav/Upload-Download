import { useBackgroundTask } from "../../context/BackgroundTask.context";
import AccordionComp from "../Accordion"

const BackgroundUploadComp = () => {
    const { uploadTasks } = useBackgroundTask();
    console.log(uploadTasks)
    return (
        <AccordionComp />

    )
}

export default BackgroundUploadComp