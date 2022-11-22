import axios from "axios";

export async function handleUpdateKeyword(dbData, cb) {

    // dbData = {
    //     "keywordData": {
    //         "keywordId": "11",
    //         "fileId": "11",
    //         "keywordName": "Quiz",
    //         "keywordDescription": "Red is the colour of blood"
    //     }
    // }

    try {
        return await axios({
            method: "PUT",
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