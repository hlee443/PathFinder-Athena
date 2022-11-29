import axios from "axios";

export async function handleAddSummary(dbData, cb) {


    // dbData = {
    //     "summaryData": {
    //         "summaryId": "1",
    //         "fileId": "12",
    //         "summary_content": "The original text of the summary",
    //         "summary_result": "The result from the api"
    //     }
    // }

    try {
        return await axios({
            method: "POST",
            url: `${process.env.NEXT_PUBLIC_HERMES_PATH}/api/db/summary`,
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