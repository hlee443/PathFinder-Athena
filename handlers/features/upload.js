// Doc Upload Handler
// - recognize the file type/extention
// - get content based on its type/extension
// - returns the doc content
// - render the content on client

export default function handleUpload(uploadedFile){

    const fileReader = new FileReader()
        
    fileReader.onload = function (){
        setFileNameForm(false)
        uploadedFile.fileContent = fileReader.result
        return uploadedFile.fileContent
    }

    fileReader.readAsText(uploadedFile.fileObj,"UTF-8")

}