'use strict'

const apiUrl = 'https://raw.githubusercontent.com/zmsp/coronavirus-json-api/master/latest_pretty_print.json'
let globalData
let austriaData


const init = () => {
    axios.get(apiUrl).then(response => {
        globalData = response.data
        austriaData = response.data.filter(country => country['Country/Region'] === 'Austria')
        austriaData = austriaData[0]

        let htmlStr = `
          <p>Bestätigt: ${austriaData.Confirmed}</p>
          <p>Erholt: ${austriaData.Recovered}</p>
          <p>Todesfälle: ${austriaData.Deaths}</p>
          <p>Letztes Update: ${austriaData['Last Update']}</p>
        `
        document.querySelector('.country_info').innerHTML = htmlStr
    })
}

init()





