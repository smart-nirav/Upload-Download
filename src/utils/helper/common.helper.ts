
import { FILE_TYPES } from "../constants/fileType.constant";
import { IMG_LOCAL_PATH } from "../constants/common.constant";
import FileIcon from "../../assets/images/file_types/others_type.svg";
import LoaderIcon from '../../assets/images/loader.svg';
import StatusFailedIcon from '../../assets/images/failed.svg';
import StatusSuccessIcon from '../../assets/images/success.svg';

export const handleFiletype = (type: string) => {
    //Check type in given array object of file types
    const fileType = FILE_TYPES.find((typeF) => typeF.fileType === type);

    if (fileType === undefined) {
        //return default icon if type not found in file types array
        return FileIcon;
    } else {
        //return icon from file types array
        return IMG_LOCAL_PATH + fileType.icon;
    }
};


//Calculate file size
export const handleFileSizeType = (size: number) => {
    if (size === 0) {
        return '0 bytes'
    }

    let fixSize = 1000;
    let allSize = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    let sizeCount = Math.floor(Math.log(size) / Math.log(fixSize))

    return parseFloat((size / Math.pow(fixSize, sizeCount)).toFixed()) + ' ' + allSize[sizeCount]
}

//Handle file status
export const handleFileStatus = (status: string) => {
    if (status === 'loading') {
        return LoaderIcon
    } else if (status === 'success') {
        return StatusSuccessIcon
    } else {
        return StatusFailedIcon
    }
}