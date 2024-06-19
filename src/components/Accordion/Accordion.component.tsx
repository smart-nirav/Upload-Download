import { useState } from 'react';
import { AccordionTypes } from './Accordion.type';
import { handleFileSizeType, handleFiletype } from '../../utils/helper/common.helper';
import { ActionType } from '../../utils/constants/common.constant';
import DownArrow from '../../assets/images/downArrow.svg'
import CloseIcon from '../../assets/images/close.svg'
import AccordionStyles from './Accordion.module.scss';
import LoaderIcon from '../../assets/images/loader.svg';
import StatusFailedIcon from '../../assets/images/re-upload.svg';
import StatusSuccessIcon from '../../assets/images/success.svg';

const AccordionComp = ({ label }: AccordionTypes) => {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState<FileList | null>(null);

    let status = 'failed';

    //Open and close accordion
    const handleAccordion = () => {
        setIsOpen(prev => !prev)
    }

    //Handle close button of accordion
    const handleClose = () => {
        console.log('close')
    }

    //Handle File upload
    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const result = e.target.files;
        setData(result);
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
                <button className={AccordionStyles.uploadBtn}>
                    {label ? label : 'Button'}
                    <input multiple type="file" id="upload_file" onChange={(e) => handleUpload(e)} />
                </button>
                {data ?
                    <div className={AccordionStyles.container}>
                        <div className={AccordionStyles.accordion}>
                            <div className={AccordionStyles.accordionHeader}>
                                <div className={AccordionStyles.headerLeft}>
                                    <h2>{ActionType[1]}</h2>
                                    <span>(4/{data ? data.length : 0})</span>
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
                                    {data && [...data].map((file, index) => {
                                        return (
                                            <li key={index}>
                                                <div className={AccordionStyles.fileDetails}>
                                                    <div className={AccordionStyles.fileIcon}>
                                                        <img src={handleFiletype(file.type)} alt="" />
                                                    </div>
                                                    <div className={AccordionStyles.fileDescription}>
                                                        <h4>{file.name}</h4>
                                                        <span>{handleFileSizeType(file.size)}</span>
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