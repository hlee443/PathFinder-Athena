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
            url: "http://localhost:8080/api/summarize",
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