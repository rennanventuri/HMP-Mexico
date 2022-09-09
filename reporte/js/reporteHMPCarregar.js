function carregar() {

    var data2 = moment().format('DD/MM/YYYY')
    mes  = data2.split("/")[1]

    arrayDados = GetListItems(IdListaHMP, '?$filter=MES eq %27' + mes + '%27&$top=9999999')

    arrayInformacoes = GetListItems(IdListaInformacoes, '?$orderby=Title&$top=9999999')

    arrayFabrica = GetListItems(IdListaInformacoes, '?$select=FABRICA&$top=9999999')
    arraySecao = GetListItems(IdListaInformacoes, '?$select=Title&$top=9999999')
    arrayDepartamento = GetListItems(IdListaInformacoes, '?$select=DEPARTAMENTO2&$top=9999999')


}