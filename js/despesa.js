class Despesa{
    constructor(data, tipo, descricao, valor ){
        this.data = data
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }
    validarDados(){

    }
}
class Bd{
    constructor(){

        let id = localStorage.getItem('id');
        if(id === null){
            localStorage.setItem('id', 0);
        }

    }
    getProximoId(){

        let proximoId = localStorage.getItem('id');
        return parseInt(proximoId) + 1;

    }

    gravar(d){

        let id = this.getProximoId();
        localStorage.setItem(id, JSON.stringify(d));

        localStorage.setItem('id', id);
    }

}
let bd = new Bd();
function cadastrarDespesa(){
    let data = document.getElementById('data');
    let tipo = document.getElementById('tipo');
    let descricao = document.getElementById('descricao');
    let valor = document.getElementById('valor');

    let despesa = new Despesa(
        data.value,
        tipo.value,
        descricao.value,
        valor.value
    )

    if (despesa.validarDados()){
        bd.gravar(despesa);
        console.log('Dados válidos');
    }else{
        //dialog de sucesso
        console.log('Dados Inválidos');
    }
    //console.log(despesa);
    bd.gravar(despesa);

}



