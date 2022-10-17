import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
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
      const res = await axios.get(`/api/info`, {
        params: { word },
      });
      const { data } = res;
      const { definition } = data;
      // split the response string into an array using regex
      const newDefinition = definition.split(/1. |2. | 3. /);
      setWordInfo(newDefinition);
      // console.log(window.getSelection().toString());
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
      <h2>
        <span>Dictionary</span> App
      </h2>
      <h3>Check Meaning of any word</h3>
      <p>The term “full stack developer” originated during the early days of the web, when websites were small and uncomplicated enough to allow a single person to tackle every aspect of site-building. But in the decades since those initial days, the web has grown ever more complex.</p>

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
    </div>
  );
}
