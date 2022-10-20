// Summarize Handlers
// - user action (click)
// - secondary action (highlight)
// - expected behaviour (the highlighted section is summarized to the user)

import axios from 'axios'

export async function handleSummarize(postContent){
    try {
        // axios call
        return await axios({
            method: "post",
            url: `${process.env.NEXT_PUBLIC_HERMES_PATH}/api/summarize`,
            data: {
                text: postContent,
                key: 'Bearman123'
            }
        })
        .then((res) => res)
        .catch((err) => {
            console.error(err)
        })


    } catch (error) {
        console.log(error)
    }
}