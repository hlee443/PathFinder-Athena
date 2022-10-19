import axios from "axios";
export default async function handler(req, res) {
  if (req.method === "GET") {
    const options = {
      method: "GET",
      url: `${process.env.HERMES_PATH}/api/dictionary}`,
      params: { word: req.query.word },
      headers: {
        "X-RapidAPI-Key": "76d095f408mshdc3af774b5fe8d0p1f3c26jsn5f72e2906855",
        "X-RapidAPI-Host": "dictionary-by-api-ninjas.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        res.status(200).json(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  } else {
    res.status(400);
  }
}
