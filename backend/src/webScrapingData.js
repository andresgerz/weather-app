const request = require("request-promise");
const cheerio = require("cheerio");

// I made web scraping for the last hour.
async function getData() {

    let parts = String(new Date()).split(/[ :]/);
    let month = String(new Date().getMonth()+1);
    
    const station = 87155;    

    let options = {

        uri: 'https://www.ogimet.com/cgi-bin/gsynres?ind=' + station + '&decoded=yes&ndays=2&ano=' + parts[3] + '&mes=' + month + '&day=' + parts[2] + '&hora=' + String(Number(parts[4])+3),
        transform: function (body)  
            { return cheerio.load(body); }
    }


    return await request(options) 
        .then(function ($) {            

            const lastHour = [];
            $('thead tr').each((index, element) => { ;
                    
                if (index === 1) {         
                    lastHour.push($(element).text().split("\n"));
                    
                    return false;
                } 
            });
            return lastHour;
            console.log(lastHour); 
        })
        .catch(function (err) {
            console.log(err);
        })
}


module.exports = {
    getData
}