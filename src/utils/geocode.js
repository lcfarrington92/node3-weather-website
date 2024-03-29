const request = require('request')

    const geocode = (address,callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibGNmYXJyaW5ndG9uIiwiYSI6ImNrM3lvZDl0bTBsbzYzbXNoMHUzeGFqaDUifQ.YtH7H5S5y1Ldw636IADp0w&limit=1'

    response = request({url,json: true},(error,{body}) =>{
        if (error){
            callback('Unable to connect to location services!',undefined)
        } else if (body.features.length === 0) {
            callback('Location not found!',undefined)
        } else {
            const latitude = body.features[0].center[1]
            const longitude = body.features[0].center[0];
            const placeName = body.features[0].place_name
            callback(undefined,{latitude: latitude,longitude: longitude,location: placeName})
        }

    })

}
module.exports = geocode
