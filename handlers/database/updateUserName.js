import axios from "axios";

export async function handleUpdateUserName(dbData) {

    // dbData = {
    //     "userData": {
    //         "userId": "13",
    //         "userName": "Miss Coconut"
    //     }
    // }

    try {
        return await axios({
            method: "PUT",
            url: `${process.env.NEXT_PUBLIC_HERMES_PATH}/api/db/user/username`,
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