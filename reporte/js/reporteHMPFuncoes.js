
function adicionarTabela() {

    const serArray = new Set()
    arrayDepartamentoFiltrado = []
    arrayDepartamentoFiltrado = arrayInformacoes.filter((person) => {
        const arrayDuplicado = serArray.has(person.DEPARTAMENTO2)
        serArray.add(person.DEPARTAMENTO2)
        return !arrayDuplicado
    })

    arraySecaoFiltrado = []
    arraySecaoFiltrado = arraySecao.filter((person) => {
        const arrayDuplicado = serArray.has(person.Title)
        serArray.add(person.Title)
        return !arrayDuplicado
    })

    let arraySecaoMes = [], arraySecaomedia = []
    arraySecaoFiltrado.forEach(function (b) {
        arrayDados.forEach(function (c) {
            if ((b.Title == c.SECCION) & (c.MES == mes)) {
                arraySecaoMes.push({ "SECCION": c.SECCION, "EQUIPO": c.EQUIPO, "PROBLEMA": c.PROBLEMA, "ACCION": c.ACCION, "HMP": c.HMP, "ID_REF": c.ID_REF_DEP, "MEDIA": "" })
            }
        })
    })

    arrayDepartamentoFiltrado.forEach(function (b) {

        tabelaDados = []

        tabelaDados += '<div class="card-body border-radius">'
        // tabelaDados += '<div class="row input-group-text br-t" id="valorDepartamento"></div>'+           
        tabelaDados += '<div class="row input-group-text br-medio">' + b.FABRICA + " - " + b.DEPARTAMENTO2 + '</div>'
        tabelaDados += '<div class="row input-group-text br-medio">'
        tabelaDados += '<div class="col" style="text-align:left;">'
        tabelaDados += '<span>Meta: </span>'
        tabelaDados += '<input id="meta_' + b.TESTE + '" value="' + b.META + '"></input>'
        tabelaDados += '</div>'
        tabelaDados += '<div class="col" style="text-align:left;">'
        tabelaDados += '<span>HMP: </span>'
        tabelaDados += '<input id="hmp_' + b.TESTE + '" ></input>'
        tabelaDados += '</div>'
        tabelaDados += '</div>'
        tabelaDados += '<div class="row input-group-text br-medio">3 Fallas principales</div>'
        tabelaDados += '<div class="row">'
        tabelaDados += '<table class="table table-striped" id="tabela_' + b.TESTE + '">'
        tabelaDados += '<thead>'
        tabelaDados += '<tr>'
        tabelaDados += '<th scope="col">Equipo</th>'
        tabelaDados += '<th scope="col">Descripción del equipo</th>'
        tabelaDados += '<th scope="col">Falla</th>'
        tabelaDados += '<th scope="col">Acción</th>'
        tabelaDados += '<th scope="col">HMP</th>'
        tabelaDados += '</tr>'
        tabelaDados += '</thead>'
        tabelaDados += '<tbody id="corpotabela">'
        tabelaDados += '</tbody>'
        tabelaDados += '</table>'
        tabelaDados += '</div>'
        tabelaDados += '</div>'

        $('#adicionarTabela').append(tabelaDados)
    })

    arrayDepartamentoFiltrado.forEach(function (b) {
        let media = 0, quantidade = 0, total = 0
        arrayDados.forEach(function (c) {
            if (b.TESTE == c.ID_REF_DEP) {
                quantidade = quantidade + 1
                let tempo = DateTime.fromISO(c.HMP);
                let horas = tempo.hour + tempo.minute / 60;
                total = total + horas
                media = total / quantidade
                $('#hmp_' + c.ID_REF_DEP).val(media.toFixed(2))
                // const index = arraySecaomedia.indexOf({"SECCION":c.SECCION});
                // if (index !== -1) {
                //     arraySecaomedia[index] = {"SECCION":c.SECCION, "MEDIA":media }
                // } else{
                //     arraySecaomedia.push({"SECCION":c.SECCION, "MEDIA":media})
                // }

            }
        })
    })

    arraySecaoMes.sort(function (x, y) {
        // return y.SECCION - x.SECCION
        // return x.SECCION.localeCompare(y.SECCION) || y.HMP - x.HMP


            let tempo = DateTime.fromISO(x.HMP);
            let tempo2 = DateTime.fromISO(y.HMP);
            let horas = tempo.hour*3600 + tempo.minute*60;
            let horas2 = tempo2.hour*3600 + tempo2.minute*60;
            // return horas2 < horas
       
        if (x.ID_REF > y.ID_REF) return 1;
        if (x.ID_REF < y.ID_REF) return -1;
        if (horas2 > horas) return 1;
        if (horas2 < horas) return -1;

        console.log(horas2)
        console.log(horas)
        // if (x.ID_REF === y.ID_REF) {
            // Price is only important when cities are the same

            // let tempo = DateTime.fromISO(x.HMP);
            // let tempo2 = DateTime.fromISO(y.HMP);
            // let horas = tempo.hour + tempo.minute / 60;
            // let horas2 = tempo2.hour + tempo2.minute / 60;
            // return horas2 < horas
            // return y.HMP - x.HMP

            // return b.price - a.price;
        //  }
        //  return x.ID_REF >  y.ID_REF ? 1 : -1;

        // let tempo = DateTime.fromISO(x.HMP);
        // let tempo2 = DateTime.fromISO(y.HMP);
        // let horas = tempo.hour + tempo.minute / 60;
        // let horas2 = tempo.hour + tempo.minute / 60;
        // return x.ID_REF - y.ID_REF || horas2 - horas
    })

    // arraySecaoMes.sortBy(arraySecaoMes, [function(o) { return o.IDarraySecaoMesREF; }]);

    // arraySecaoMes.sortBy(arraySecaoMes, [function(o) { return o.HMP; }]);

    let quantidadeImportada = 0, secaoPassada = ""
    arraySecaoMes.forEach(function (b) {

        if (quantidadeImportada <= 2) {
            quantidadeImportada = quantidadeImportada + 1

            tabelaDados = []
            tabelaDados += '<tr>'
            tabelaDados += "<td></td>"
            tabelaDados += "<td>" + b.EQUIPO + "</td>"
            tabelaDados += "<td>" + b.PROBLEMA + "</td>"
            tabelaDados += "<td>" + b.ACCION + "</td>"
            tabelaDados += "<td>" + b.HMP + "</td>"
            tabelaDados += '<tr>'

            $('#tabela_' + b.ID_REF).append(tabelaDados)
            secaoPassada = b.ID_REF

        // } else if ((b.ID_REF == secaoPassada) && (quantidadeImportada <= 3)) {
        //     quantidadeImportada = quantidadeImportada + 1

        //     tabelaDados = []
        //     tabelaDados += '<tr>'
        //     tabelaDados += "<td>" + b.EQUIPO + "</td>"
        //     tabelaDados += "<td></td>"
        //     tabelaDados += "<td>" + b.PROBLEMA + "</td>"
        //     tabelaDados += "<td>" + b.ACCION + "</td>"
        //     tabelaDados += "<td>" + b.HMP + "</td>"
        //     tabelaDados += '<tr>'

        //     $('#tabela_' + b.ID_REF).append(tabelaDados)
        //     secaoPassada = b.ID_REF
        } else if (b.ID_REF != secaoPassada) {
            quantidadeImportada = 0
            secaoPassada = b.ID_REF
        }
    })

    //$('#adicionarTabela').append(tabelaDados)
    console.log(arraySecaoMes)


}

