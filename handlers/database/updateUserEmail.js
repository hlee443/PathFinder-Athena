import axios from "axios";

export async function handleUpdateUserEmail(dbData) {

    // dbData = {
    //     "userData": {
    //         "userId": "13",
    //         "userEmail": "mrscoconuts@gmail.com"
    //     }
    // }

    try {
        return await axios({
            method: "PUT",
            url: `${process.env.NEXT_PUBLIC_HERMES_PATH}/api/db/user/email`,
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