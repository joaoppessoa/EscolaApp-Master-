var escolaApi = function($http) {
    
    var _getListarEscolas = function() {
        return $http.get(baseUrl + "/rest/escolas/");
    };
    
    var _getPesquisarEscolaPorAno = function(codEscola, anoEscola) {

        return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes/ano/" + anoEscola);
    };
    
    var _getPesquisarEscolaPorCodigo = function (codEscola) {
        return $http.get(baseUrl + "/rest/escolas/" + codEscola);
    };
    
    var _getPesquisarEscolaPeloNome = function (nomeEscola){
        return $http.get(baseUrl + "/rest/escolas?nome=" + nomeEscola);
    };
    
    
    return {
        getListarEscolas: _getListarEscolas,
        getPesquisarEscolaPorAno: _getPesquisarEscolaPorAno,
        getPesquisarEscolaPorCodigo: _getPesquisarEscolaPorCodigo,
        getPesquisarEscolaPeloNome: _getPesquisarEscolaPeloNome
    };
}

escolaApp.factory("escolaApi", escolaApi);