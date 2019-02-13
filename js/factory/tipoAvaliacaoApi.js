var tipoAvaliacaoApi = function ($http) {
    
    var _getListarAvaliacaoMedia = function(codEscola) {
        return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes/media");
    };

    var _getListarTipoAvaliacao = function() {
        return $http.get(baseUrl + "/rest/tiposavaliacao");
    };

    var _getListarAvaliacaoPorTipo = function (cod, tipo) {
          return $http.get(baseUrl + "/rest/escolas/"+ cod +"/avaliacoes/tipo/" + tipo);
    };

    var _getListarAvaliacoesEscola = function (codEscola) {
        return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes");
    };
    
    var _getPesquisarAvaliacaoDoAnoPorTipo = function (codEscola, ano, tipo){
        return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes/ano/" + ano + "/tipo/" + tipo);
    };
    
    var _getPesquisarMediaAvaliacaoPorAno = function(codEscola, ano){
        return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes/ano/" + ano + "/media");
    };
    
    var _getPesquisarAvaliacaoDeUmaEscolaPorAno = function(codEscola, ano){
        return $http.get(baseUrl + "/rest/escolas/" + codEscola + "/avaliacoes/ano/" + ano);
    };

    return {
        getListarAvaliacaoMedia: _getListarAvaliacaoMedia,
        getListarTipoAvaliacao: _getListarTipoAvaliacao,
        getListarAvaliacaoPorTipo: _getListarAvaliacaoPorTipo,
        getListarAvaliacoesEscola: _getListarAvaliacoesEscola,
        getPesquisarAvaliacaoDoAnoPorTipo: _getPesquisarAvaliacaoDoAnoPorTipo,
        getPesquisarMediaAvaliacaoPorAno: _getPesquisarMediaAvaliacaoPorAno,
        getPesquisarAvaliacaoDeUmaEscolaPorAno: _getPesquisarAvaliacaoDeUmaEscolaPorAno
    };
}

escolaApp.factory("tipoAvaliacaoApi", tipoAvaliacaoApi);