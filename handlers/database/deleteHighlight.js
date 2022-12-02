import axios from 'axios';

export async function handleDeleteHighlight(highlightId, cb) {

    try {
        return await axios({
            method: "DELETE",
            url: `${process.env.NEXT_PUBLIC_HERMES_PATH}/api/db/highlight/${highlightId}`
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