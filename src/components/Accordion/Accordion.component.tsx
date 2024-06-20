import { useState } from 'react';
import CloseIcon from '../../assets/images/close.svg';
import DownArrow from '../../assets/images/downArrow.svg';
import LoaderIcon from '../../assets/images/loader.svg';
import StatusFailedIcon from '../../assets/images/re-upload.svg';
import StatusSuccessIcon from '../../assets/images/success.svg';
import { UploadTask, useBackgroundTask } from '../../context/BackgroundTask.context';
import { ActionType } from '../../utils/constants/common.constant';
import { handleFileSizeType, handleFiletype } from '../../utils/helper/common.helper';
import AccordionStyles from './Accordion.module.scss';

type AccordionType = {
    tasks: UploadTask[]
}

const AccordionComp = ({ tasks }: AccordionType) => {

    const [isOpen, setIsOpen] = useState(false);

    //Open and close accordion
    const handleAccordion = () => {
        setIsOpen(prev => !prev)
    }

    //Handle close button of accordion
    const handleClose = () => {
        setIsOpen(false)
    }

    //Handle file status icon & reupload
    const handleFileStatus = (status: string) => {
        switch (status) {
            case 'loading':
                return <img src={LoaderIcon} />;
            case 'success':
                return <img src={StatusSuccessIcon} alt="" />
            case 'failed':
                return <button className={AccordionStyles.btnFailed}><img src={StatusFailedIcon} alt="" /></button>
            default:
                break;
        }
    }

    return (
        (
            <div>
                {tasks?.length > 0 ?
                    <div className={AccordionStyles.container}>
                        <div className={AccordionStyles.accordion}>
                            <div className={AccordionStyles.accordionHeader}>
                                <div className={AccordionStyles.headerLeft}>
                                    <h2>{ActionType[1]}</h2>
                                    <span>(4/{tasks ? tasks.length : 0})</span>
                                </div>

                                <div className={AccordionStyles.headerRight}>
                                    <button className={AccordionStyles.downArrowContainer} onClick={handleAccordion}>
                                        <img className={`${isOpen ? AccordionStyles.iconRotate : ''}`} src={DownArrow} alt="" />
                                    </button>

                                    <button onClick={handleClose}>
                                        <img src={CloseIcon} alt="" />
                                    </button>
                                </div>
                            </div>

                            <div className={AccordionStyles.bodyContainer}>
                                <ul className={`${isOpen ? AccordionStyles.maxHeight : ''}`}>
                                    {tasks && [...tasks].map((task, index) => {
                                        return (
                                            <li key={index}>
                                                <div className={AccordionStyles.fileDetails}>
                                                    <div className={AccordionStyles.fileIcon}>
                                                        <img src={handleFiletype(task.file.type)} alt="" />
                                                    </div>
                                                    <div className={AccordionStyles.fileDescription}>
                                                        <h4>{task.file.name}</h4>
                                                        <span>{handleFileSizeType(task.file.size)}</span>
                                                    </div>
                                                    {handleFileStatus(status)}
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div> : null}
            </div>
        )
    )
}

export default AccordionComp