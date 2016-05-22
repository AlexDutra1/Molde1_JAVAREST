/**
 * 
 */

(function () {

    // Criando o módulo para o factory
    angular.module('flash.factory_cliente', []);

    var currentMessage, classe = "";

    angular.module('flash.factory_cliente')
    .factory('flash', function () {

        return {
            setClass: function (novaClasse) {
                 classe = novaClasse;
            },
            getClass: function () {
                return classe;
            },
            setMessage: function (message) {
                currentMessage = message;
            },
            getMessage: function () {
                return currentMessage;
            }
        }
    });
}());