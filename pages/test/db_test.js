import { useState } from 'react';
import * as mainHandler from '../../handlers/main'


export default function DBTest() {
    const [response, setResponse] = useState(false)

    const dbData = {
        userData: {
            userName: "Monsieur Coconut",
            userEmail: "mrcoconut@gmail.com",
            password: "chicken"
        }
    }

    const handleTest = async () => {
        try {
            // const res = await mainHandler.handleGetUserById(9)
            // const res = await mainHandler.handleGetUserByLogin(dbData)
            const res = await mainHandler.handleAddUser(dbData)
            if (res) {
                console.log(res)
                setResponse(JSON.stringify(res.data))
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="App">
            <h1>DB Route Test Page</h1>
            <div className="content">
                <h2>Response Content</h2>
                {response}
            </div>
            <button onClick={handleTest}>Test</button>
        </div>
    )
}