import axios from "axios";
export default async function handler(req, res) {
  if (req.method === "GET") {
    const options = {
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_HERMES_PATH}/api/dictionary}`,
      data: { word: req.query.word }
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
