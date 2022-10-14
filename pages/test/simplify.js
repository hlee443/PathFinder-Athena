import { useState } from 'react';
import axios from 'axios'

export default function Simplify(){
    const [textSimplified, setTextSimplified] = useState([])
    const [jsonAPI, setJsonAPI] = useState('')
    const [formData, setFormData] = useState({ text: '' })

    function handleChange(e){
        e.preventDefault()

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        onSubmit(formData)
        
    }

    const onSubmit = async (textData) => {
       
        console.log("SUBMIT", textData)

        try{

            await axios({
                method: "post",
                url: "http://localhost:8080/api/simplify",
                data: {
                    text: textData.text,
                    key: 'Bearman123'
                }
            })
            .then((res) => {
                console.log('res', res)
                // AI21 studio API
                setJsonAPI(JSON.stringify(res.data))
                setTextSimplified(res.data.completions[0].data.text)
            })
            .catch((err) => {
                console.error(err)
            })

        }  catch (error) {
            console.log(error)
        }
    }

    return (
        
        <div className="App">
          
          <h1>Simplify your text!</h1>
    
          <form onSubmit={handleSubmit}>
            <label htmlFor="simplifyTextArea">Enter your text</label>
                <textarea 
                    id="simplifyTextArea" 
                    type="text"
                    rows={5}
                    cols={50}
                    name="text"
                    value={formData.text}
                    onChange={handleChange}
                />

                <button type='submit'>Submit</button>

            </form>
    
          <br />
    
          <h2>Result</h2>
          <p>{textSimplified}</p>
    
          <hr />
    
          <h2>JSON</h2>
          <p>{jsonAPI}</p>
    
    
        </div>
      )
}