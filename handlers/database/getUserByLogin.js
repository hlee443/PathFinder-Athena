import axios from "axios";

export async function handleGetUserByLogin(dbData) {

    // dbData = {
    //     "userData": {
    //         "userEmail": "mrapples@gmail.com",
    //         "password": "chicken"
    //     }
    // }

    try {
        return await axios({
            method: "POST",
            url: `${process.env.NEXT_PUBLIC_HERMES_PATH}/api/db/user/login`,
            data: dbData
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