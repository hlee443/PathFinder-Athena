import axios from 'axios';

export async function handleUpdateHighlight(dbData, cb) {

    // dbData = {
    //     highlightData: {
    //         highlightId: "1",
    //         fileId: "1",
    //         highlightUuid: "2dscu-12ad4-azv34-ewr34-1qwev",
    //     }
    // }

    try {
        return await axios({
            method: "PUT",
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