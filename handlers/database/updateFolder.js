import axios from "axios";

export async function handleUpdateFolder(dbData) {

    // dbData = {
    //     "folderData": {
    //         "userId": "13",
    //         "folderId": "14",
    //         "folderName": "Flowers"
    //     }
    // }

    try {
        return await axios({
            method: "PUT",
            url: `${process.env.NEXT_PUBLIC_HERMES_PATH}/api/db/folder`,
            data: dbData
        })
            .then((response) => {
                return response
            })
            .catch((error) => {
                console.error(error);
            });
    } catch (error) {
        console.log(error)
    }
}