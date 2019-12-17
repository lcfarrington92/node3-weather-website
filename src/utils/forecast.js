const request = require('request')
const forecast = (longitude,latitude,callback) =>{
    const url = 'https://api.darksky.net/forecast/279a4648357f01c6af6ddb80e77b6327/' + latitude + ',' + longitude + '?units=us&lang=en'
    request({url,json: true},(error,{body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)

        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            returnData = body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees.out  There is a ' + body.currently.precipProbability + '% chance of rain.'
            callback(undefined, returnData)
        }
    })

}
module.exports = forecast