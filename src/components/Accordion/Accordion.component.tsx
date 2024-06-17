import { useCallback, useState } from 'react';
import { AccordionTypes } from './Accordion.type';
import DownArrow from '../../assets/images/downArrow.svg'
import CloseIcon from '../../assets/images/close.svg'
import { FileType, IMG_LOCAL_PATH } from '../../utils/constants/common.constant';
import FileIcon from '../../assets/images/file_types/others_type.svg';
import LoaderIcon from '../../assets/images/loader.svg';
import StatusFailedIcon from '../../assets/images/failed.svg';
import StatusSuccessIcon from '../../assets/images/success.svg';
import AccordionStyles from './Accordion.module.scss';
import { FILE_TYPES } from './FileTypes';

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
        setData(result)
    }

    //Return File icon based on file type
    const handleFiletype = useCallback((type: string) => {
        console.log(type)
        //Check type in given array object of file types
        const fileType = FILE_TYPES.find((typeF) => typeF.fileType === type)


        if (fileType === undefined) {
            //return default icon if type not found in file types array
            return FileIcon
        } else {
            //return icon from file types array
            return IMG_LOCAL_PATH + fileType.icon
        }


    }, [])

    //Calculate file size
    const handleFileSizeType = useCallback((size: number) => {
        if (size === 0) {
            return '0 bytes'
        }

        let fixSize = 1000;
        let allSize = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        let sizeCount = Math.floor(Math.log(size) / Math.log(fixSize))

        return parseFloat((size / Math.pow(fixSize, sizeCount)).toFixed()) + ' ' + allSize[sizeCount]
    }, [])

    //Handle file status
    const handleFileStatus = (status: string) => {
        if (status === 'loading') {
            return LoaderIcon
        } else if (status === 'success') {
            return StatusSuccessIcon
        } else {
            return StatusFailedIcon
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
                                    <h2>{FileType[1]}</h2>
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
                                                        {/* <span>{handleFiletype(file.type)}</span> */}
                                                    </div>
                                                    <div className={AccordionStyles.fileDescription}>
                                                        <h4>{file.name}</h4>
                                                        <span>{handleFileSizeType(file.size)}</span>
                                                    </div>
                                                    <img src={handleFileStatus(status)} alt="" className={AccordionStyles.statusImg} />
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