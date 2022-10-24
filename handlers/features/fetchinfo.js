import { useEffect, useState } from "react";
import * as mainHandler from "../../handlers/main";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [wordInfo, setWordInfo] = useState(null);
  /**
   *
   *
   * Fetch word information
   */
  const fetchInfo = async (e) => {
    e.preventDefault();
    try {
      const word = window.getSelection().toString();
      const res = await mainHandler.handleDictionary(word);
      if (res) {
        const { data } = res;
        const { definition } = data;
        // split the response string into an array using regex
        const newDefinition = definition.split(/1. |2. | 3. /);
        setWordInfo(newDefinition);
      }

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // add event listener to the document
    document.addEventListener("mouseup", fetchInfo);

    // remove event listener when component unmounts
    return () => {
      document.removeEventListener("mouseup", fetchInfo);
    };
  }, []);

  return (
    <div>
      {wordInfo && (
        <div>
          <table>
            <thead>
              <tr>
                <th>
                  <span>{window.getSelection().toString()}</span>
                </th>
                <th>
                  <span>Definition</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>{wordInfo[1]}</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>{wordInfo[2]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
