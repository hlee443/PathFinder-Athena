import axios from 'axios';

export async function handleAddHighlight(dbData, cb) {
    // dbData = {
    //     "highlightData": {
    //         "fileId": "1",
    //         "highlightId": "2dscu-12ad4-azv34-ewr34-1qwev",
    //     }
    // }

    try {
        return await axios({
            method: "POST",
            url: `${process.env.NEXT_PUBLIC_HERMES_PATH}/api/db/highlight`,
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