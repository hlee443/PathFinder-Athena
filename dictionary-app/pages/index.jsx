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
    <div className="bg-bc flex flex-col items-center relative min-h-screen ">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        <span className="text-secondary">Dictionary</span> App
      </h2>
      <h3 className="text-lightOrange text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
        Check Meaning of any word
      </h3>
      <p className="flex flex-col text-primary text-raleway mt-12 w-3/6 h-4/5  md:flex-col md:w-4/6 md:h-full md:mb-12">
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
      <div className="flex flex-col justify-between items-center w-full md:items-center">
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
          <div className="flex flex-col text-primary text-raleway mt-12 w-3/6 h-4/5  md:flex-col md:w-4/6 md:h-full md:mb-12">
            <table className="bg-white w-full text-primary mb-8 md:text-sm md:mx-2">
              <thead className="font-raleway uppercase tracking-wide">
                <tr>
                  <th className="border text-left px-4 py-4">
                    <span className="text-secondary">{window.getSelection().toString()}</span>
                  </th>
                  <th className="border text-left px-4 py-4">
                    <span className="text-secondary">Definition</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-4">1.</td>
                  <td className="border px-4 py-4">{wordInfo[1]}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-4">2.</td>
                  <td className="border px-4 py-4">{wordInfo[2]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
