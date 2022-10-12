import { useState } from 'react';
import axios from 'axios'

export default function Summarize() {
    const [called, setCalled] = useState(false)
    const [status, setStatus] = useState("")
    const [content, setContent] = useState("")
    const [originalContent, setOriginalContent] = useState("")
    const [jsonContent, setJsonContent] = useState({})
    const [postContent, setPostContent] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // axios call
            await axios({
                method: "post",
                url: "http://localhost:8080/api/summarize",
                data: {
                    text: postContent,
                    key: 'Bearman123'
                }
            }).then((res) => {
                console.log(res)
                // Meaning cloud api
                setContent(res.data.summary)
                setStatus(JSON.stringify(res.data.status))
                setJsonContent(JSON.stringify(res.data))
                setOriginalContent(postContent)
                setPostContent("")
                setCalled(true)
            })
        } catch (error) {
            console.log(error)
        }
    }

    if (!called) {
        return (
            <div className="App">
                <h1>Text Summary API</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <textarea
                        rows="10"
                        cols="50"
                        autoComplete='off'
                        placeholder="Type text in here..."
                        onChange={(e) => setPostContent(e.target.value)}
                        value={postContent}
                        required
                    ></textarea>
                    <p className="instructions">
                        Click on the button to send your text to an API that will summarize your text!
                    </p>
                    <button>Submit</button>
                </form>
            </div>
        )
    } else {
        return (
            <div className="App">
                <h1>Text Summary API</h1>
                <div className="content">
                    <h2>Content Summary:</h2>
                    {content}
                    <h3>Original Content:</h3>
                    {originalContent}
                    <h3>API Status:</h3>
                    {status}
                    <h3>JSON Response:</h3>
                    {jsonContent}
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <textarea
                        rows="10"
                        cols="50"
                        autoComplete='off'
                        placeholder="Type text in here..."
                        onChange={(e) => setPostContent(e.target.value)}
                        value={postContent}
                        required
                    ></textarea>
                    <p className="instructions">
                        Click on the button to send your text to an API that will summarize your text!
                    </p>
                    <button>Submit</button>
                </form>
            </div>
        )
    }

}