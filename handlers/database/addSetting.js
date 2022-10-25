import axios from "axios";

export async function handleAddSetting(dbData) {

    // Not sure if this will get any use :shrug:

    // dbData = {
    //     "settingData": {
    //         "backgroundColour": "red",
    //         "typeface": "Aria",
    //         "fontSize": "24",
    //         "lineSpace": "4",
    //         "letterSpace": "2"
    //     }
    // }

    try {
        return await axios({
            method: "POST",
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