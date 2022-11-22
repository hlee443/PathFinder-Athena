// Doc Upload Handler
// - recognize the file type/extention
// - get content based on its type/extension
// - returns the doc content
// - render the content on client

import axios from "axios";
import * as mainHandler from '../main';

export async function handleUpload(uploadData, callback) {
    let { uploadedFile, uploadSetting } = uploadData;

    const fileReader = new FileReader()

    mainHandler.handleGetFoldersByUserId(9, res => {
        let folderData = res.data

        switch (uploadedFile.fileType) {
            case 'txt':
                {

                    fileReader.readAsText(uploadedFile.fileObj, "UTF-8")

                    fileReader.onload = function () {
                        uploadedFile.fileContent = fileReader.result

                        // Call Hermes and send the file object to be saved in the database
                        // axios.post(`${process.env.NEXT_PUBLIC_HERMES_PATH}/db/uploadFile`, uploadedFile)
                        //     .then(() =>  console.log("added file to database"))
                        //     .catch((err) => console.error(err))


                        const postFileObj = {
                            fileData: {
                                userId: 9,
                                fileLink: "S3 Bucket Link",
                                fileContent: uploadedFile.fileContent,
                                fileName: uploadedFile.fileName
                            },
                            settingData: uploadSetting
                        }

                        mainHandler.handleAddFile(postFileObj, (res) => {
                            res.data.folderArray = folderData
                            callback(res)
                        });

                        // callback(uploadedFile.fileContent)
                    }

                }
            case 'docx':
            case 'doc':
                {
                    // Read file for doc and docx
                    // after reading the fileContent, resave it in the property
                    // pass the property back using callback
                }
            case 'pdf':
                {
                    // Read file for pdf
                    // after reading the fileContent, resave it in the property
                    // pass the property back using callback

                }
        }
    })
}