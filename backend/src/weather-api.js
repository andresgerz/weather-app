const request = require("request");


getMap = () => {

    let url = "http://localhost:8888/testt";


    request(url, function (error, response, body) {
        
        //console.log('error:', error); // Print the error if one occurred
        
        //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log(response.body);
        
        //console.log('body:', body); // Print the HTML for the Google homepage.   
        
            
            //res.json({"map": "Maps"});
    })
}

getMaps();