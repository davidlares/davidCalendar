require('dotenv').config
const restler = require('restler');
const ApiKey = process.env.apiKeyEvents

class Event {
  constructor(accessToken, calendarID="primary"){
    // main calendar
    this.destinationURL = `https://www.googleapis.com/calendar/v3/calendars/${calendarID}`;
    this.accessToken = accessToken;
    this.calendarID = calendarID;
  }
  // get all events
  all(callback){
    restler.get(this.destinationURL + '/events',this.defaultInfo()).on("complete", callback);
  }

  create(eventOptions,callback){
    // restler require JSON stringify data
    var eventOptionsString = JSON.stringify(eventOptions);
    var data = {
      "data": eventOptionsString
    };
    var options = Object.assign({}, this.defaultInfo(), data)
    restler.post(this.destinationURL + '/events', options).on("complete",callback)
  }

  defaultInfo(){
    return {
      headers: {
        "content-type": 'application/json',
        "Authorization": "Bearer " + this.accessToken
      }
    }
  }
}

module.exports = Event;
