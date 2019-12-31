const { getData } = require("../webScrapingData");

createToday = (req, res) => {
    const { temp } = req.body;
    const ff = getData().then(function(result) {
        
        res.json({
            "result": result
         })
    });
     
}


module.exports = {
    createToday
};