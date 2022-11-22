import axios from "axios";

export async function handleDeleteKeyword(keywordId) {

    try {
        return await axios({
            method: "DELETE",
            url: `${process.env.NEXT_PUBLIC_HERMES_PATH}/api/db/keyword/${keywordId}`
        })
            .then((response) => {
                console.log(response)
                return response
            })
            .catch((error) => {
                console.error(error);
            });
    } catch (error) {
        console.log(error)
    }
}