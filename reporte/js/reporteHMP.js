$(window).load(function () {
    $('#contentRow').attr('style', 'margin-top: 5px !important');
    $('#pageTitle').remove();
    $('#divBread').remove();
    $('#s4-ribbonrow').remove();
    $('#s4-workspace').css('height', '950px');
    $('#sideNavBox').remove();
    $('#contentBox').attr('style', 'margin-left: 20px !important}');
})

$(document).ready(function () {

    carregar()
    tabela()
    adicionarTabela() 

})

function tabela() {

    $('#contentDiv').html(
    '<h4 class="text-weg text-center"></h4>' +
    '<tr>'+
        '<td>'+
            '<div class="container">'+
                '<nav class="navbar navbar-expand-full pl-0 pr-0 z-depth-0">'+
                    '<div class="col-2">'+
                        '<span class="float-md-left"><img src="/SiteAssets/images/template/logo_weg.svg" width="60px" alt="" /></span>'+
                    '</div>'+
                    '<div class="col-8">'+
                        '<div class="row justify-content-center">'+
                            '<label class="mb-0 h1">DEPARTAMENTO DE MANTENIMIENTO</label>'+
                        '</div>'+
                        '<div class="row justify-content-center">'+
                            '<span class="navbar-brand mb-0 h1">Registro de correctivos </span>'+
                        '</div>'+
                    '</div>'+
                    '<div class="col-2">'+
                        '<div class="row justify-content-center">'+
                            '<span class="navbar-brand mb-0 h1">Fecha:</span>'+
                        '</div>'+
                        '<div class="row justify-content-center">'+
                            '<span class="navbar-brand mb-0 h1"><label id="dataTexto"></label></span>'+
                        '</div>'+
                    '</div>'+
                '</nav>'+
                '<div class="card mt-3">'+
                    '<div id="adicionarTabela"></div>'+
                '</div>'+
            '</div>'+
        '</td>'+
    '</tr>'
    )
    setData()
    semana()
}
