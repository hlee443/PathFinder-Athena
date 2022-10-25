import axios from "axios";

export async function handleAddFolder(dbData) {

    // dbData = {
    //     "folderData": {
    //         "userId": "12",
    //         "folderName": "Quiz"
    //     }
    // }

    try {
        return await axios({
            method: "POST",
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