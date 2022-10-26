import axios from "axios";

export async function handleDictionary(word, callback) {
    try {
        return await axios({
            method: "POST",
            url: `${process.env.NEXT_PUBLIC_HERMES_PATH}/api/dictionary`,
            data: { word: word }

        })
            .then((response) => {
                //console.log(response)
                // return response
                callback(response)
            })
            .catch((error) => {
                console.error(error);
            });
    } catch (error) {
        console.log(error)
    }

    // if (req.method === "GET") {
    //     const options = {
    //         method: "POST",
    //         url: `${process.env.NEXT_PUBLIC_HERMES_PATH}/api/dictionary}`,
    //         data: { word: req.query.word }
    //     };
    //     axios
    //         .request(options)
    //         .then(function (response) {
    //             res.status(200).json(response.data);
    //         })
    //         .catch(function (error) {
    //             console.error(error);
    //         });
    // } else {
    //     res.status(400);
    // }
}