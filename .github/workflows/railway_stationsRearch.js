app.get("/railway_stations", async (req, res) => {
    let axios = require('axios');
    var CircularJSON = require("circular-json")
    let options = {
        method: 'POST',
        url: 'https://rstations.p.rapidapi.com/',
        headers: {
            'content-type': 'application/json',
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': 'b51c631fe3msh3f85710020128e2p1ab2a4jsn6ceadef4a6a0',
            'X-RapidAPI-Host': 'rstations.p.rapidapi.com'
        },
        data: { search: req.body.Station_name }
    };
    try {
        let response = await axios.request(options);
        let stations = CircularJSON.stringify(response.data)
        //    let datas=staions.replace("//","//")
        res.status(200).json({ message: "Here are the Details", status: 200, data: stations })
    } catch (error) {
        console.error(error);
    }
})
