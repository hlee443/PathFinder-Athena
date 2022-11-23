import axios from "axios";

export async function handleDeleteKeyword(keywordId,cb) {

    try {
        return await axios({
            method: "DELETE",
            url: `${process.env.NEXT_PUBLIC_HERMES_PATH}/api/db/keyword/${keywordId}`
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