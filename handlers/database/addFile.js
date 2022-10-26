import axios from "axios";

export async function handleAddFile(dbData, cb) {

    // will consume fileData.folderId if supplied and place the file in that folder

    // dbData = {
    //     "fileData": {
    //         "userId": "12",
    //         "fileLink": "s3 bucket link",
    //         "fileContent": "Oranges are mostly orange",
    //         "fileName": "Oranges"
    //     },
    //     "settingData": {
    //         "backgroundColour": "red",
    //         "typeface": "Aria",
    //         "fontSize": "24",
    //         "lineSpace": "4",
    //         "letterSpace": "2"
    //     }
    // }

    try {
        return await axios({
            method: "POST",
            url: `${process.env.NEXT_PUBLIC_HERMES_PATH}/api/db/file`,
            data: dbData
        })
            .then((response) => {
                cb(response)
            })
            .catch((error) => {
                console.error(error);
            });
    } catch (error) {
        console.log(error)
    }
}