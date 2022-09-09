function setData() {
    moment.locale('pt-BR')
    document.getElementById("dataTexto").innerHTML = moment().format('DD/MM/YYYY')

}

function semana(){

    var data2 = moment().format('DD/MM/YYYY')
    var dia  = data2.split("/")[0]
    mes  = data2.split("/")[1]
    var ano  = data2.split("/")[2]
    // var dataFim = ("0"+mes).slice(-2) + '/' + ("0"+dia).slice(-2) + '/' + ano
    // currentDate = new Date(dataFim)
    // startDate = new Date(currentDate.getFullYear(), 0, 1)
    // var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000))
    // var weekNumber = Math.ceil(days / 7)
    // var month = currentDate.getMonth() + 1
    // encontrarNomeMes(month)
    // $('#inputSemana').val(weekNumber)

}

function numeroSemana(d) {

    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7))
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
    var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7)
    return [d.getUTCFullYear(), weekNo]
}
