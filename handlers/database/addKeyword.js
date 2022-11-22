import axios from "axios";

export async function handleAddKeyword(dbData, cb) {

    // dbData = {
    //     "keywordData": {
    //         "fileId": "9",
    //         "keywordName": "Quiz",
    //         "keywordDescription": "Red is the colour of blood"
    //     }
    // }

    try {
        return await axios({
            method: "POST",
            url: `${process.env.NEXT_PUBLIC_HERMES_PATH}/api/db/keyword`,
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