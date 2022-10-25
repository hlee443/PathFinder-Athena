import axios from "axios";

export async function handleAddUser(dbData) {

    if (!dbData.settingData) {
        dbData.settingData = {
            backgroundColour: "beige",
            typeface: "Aria",
            fontSize: "24",
            lineSpace: "4",
            letterSpace: "2"
        }
    }
    if (!dbData.folderData) {
        dbData.folderData = {
            folderName: "Assignments"
        }
    }

    // dbData = {
    //     "userData": {
    //         "userName": "Monsieur Banana",
    //         "userEmail": "mrbanana@gmail.com",
    //         "password": "chicken"
    //     },
    //     "settingData": {
    //         "backgroundColour": "red",
    //         "typeface": "Aria",
    //         "fontSize": "24",
    //         "lineSpace": "4",
    //         "letterSpace": "2"
    //     },
    //     "folderData": {
    //         "folderName": "Assignments"
    //     }
    // }

    try {
        return await axios({
            method: "POST",
            url: `${process.env.NEXT_PUBLIC_HERMES_PATH}/api/db/user`,
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