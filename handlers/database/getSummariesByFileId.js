import axios from "axios";

export async function handleGetSummariesByFileId(fileId, cb) {

    try {
        return await axios({
            method: "GET",
            url: `${process.env.NEXT_PUBLIC_HERMES_PATH}/api/db/summaries/${fileId}`,
            data: fileId
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