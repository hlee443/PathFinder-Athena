import axios from "axios";

export async function handleDeleteFilesByFolderId(folderId) {

    try {
        return await axios({
            method: "DELETE",
            url: `${process.env.NEXT_PUBLIC_HERMES_PATH}/api/db/files/folderid/${folderId}`
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