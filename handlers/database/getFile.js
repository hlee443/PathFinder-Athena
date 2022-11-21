import axios from "axios";

export async function handleGetFile(fileId, cb) {

    try {
        return await axios({
            method: "GET",
            url: `${process.env.NEXT_PUBLIC_HERMES_PATH}/api/db/file/${fileId}`
        })
            .then((response) => {
                console.log(response)
                cb(response)
            })
            .catch((error) => {
                console.error(error);
            });
    } catch (error) {
        console.log(error)
    }
}