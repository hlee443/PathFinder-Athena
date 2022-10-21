import { useEffect, useState } from "react";
import * as mainHandler from '../../handlers/main'


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
      // const res = await axios.get(`/api/info`, {
      //   params: { word },
      // });
      const res = await mainHandler.handleDictionary(word)
      if (res) {
        const { data } = res;
        const { definition } = data;
        // split the response string into an array using regex
        const newDefinition = definition.split(/1. |2. | 3. /);
        setWordInfo(newDefinition);
      }

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
      <h3>
        Check Meaning of any word
      </h3>
      <p>
        The term “full stack developer” originated during the early days of the
        web, when websites were small and uncomplicated enough to allow a single
        person to tackle every aspect of site-building. But in the decades since
        those initial days, the web has grown ever more complex. The rise of
        machine learning, predictive computing, and responsive design has made
        it challenging — but not impossible! — for a single developer to handle
        every aspect of building and designing a site or application. Today,
        modern businesses often rely on entire teams of developers to operate
        network equipment, work with virtual machines, and manage enormous
        databases. It takes time to develop a comprehensive, nuts-and-bolts
        understanding of all these emerging technologies. The developers who do
        so are, for that reason, versatile enough to shift fluidly between front
        and back end development and take on any task that their team might need
        them to tackle.{" "}
      </p>
      <div>
        {/* <form
          onSubmit={(e) => fetchInfo(e)}
          className="flex w-full justify-center md:flex-col md:w-5/6 "
        >
          <input
            autoFocus={true}
            type="text"
            className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
            placeholder="Enter any word..."
            onChange={(e) => setWord(e.target.value)}
          />
          <button
            className="outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-black md:ml-0 md:mt-4"
            onClick={fetchInfo}
          >
            Search
          </button>
        </form> */}
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
