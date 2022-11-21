import axios from "axios";

export async function handleUpdateFile(dbData) {

    // dbData = {
    //     "fileData": {
    //         "fileId": "11",
    //         "fileName": "Flowers are beautiful",
    //         "folderId": "11",
    //         "fileContent": "Flowers are not so beautiful afterall"
    //     }
    // }

    try {
        return await axios({
            method: "PUT",
            url: `${process.env.NEXT_PUBLIC_HERMES_PATH}/api/db/file`,
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