import axios from "axios";

export async function handleGetSetting(settingId) {

    try {
        return await axios({
            method: "GET",
            url: `${process.env.NEXT_PUBLIC_HERMES_PATH}/api/db/setting/${settingId}`
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