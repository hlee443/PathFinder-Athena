import axios from "axios";

export async function handleUpdateSetting(dbData) {

    // dbData = {
    //     "settingData": {
    //         "settingId": "16",
    //         "backgroundColour": "yellow",
    //         "typeface": "Aria",
    //         "fontSize": "24",
    //         "lineSpace": "4",
    //         "letterSpace": "2"
    //     }
    // }

    try {
        return await axios({
            method: "PUT",
            url: `${process.env.NEXT_PUBLIC_HERMES_PATH}/api/db/setting`,
            data: dbData
        })
            .then((response) => {
                return response
            })
            .catch((error) => {
                console.error(error);
            });
    } catch (error) {
        console.log(error)
    }
}