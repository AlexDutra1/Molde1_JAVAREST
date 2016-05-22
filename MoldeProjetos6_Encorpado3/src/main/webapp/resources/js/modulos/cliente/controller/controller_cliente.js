/**
 * 
 */
(function() {
	angular.module("modulo_cliente", []);

app.controller("HttpCtrl", function($scope, $http) {
		var app = this;
		$scope.navTitle = 'All Stars';
		$scope.operation="";
		$scope.isSaveDisabled = true;
		$scope.isDeleteDisabled = true;
		
		var response = $http.get('/MoldeProjetos1/rest/clientes/');
		response.success(function(data) {
			$scope.clientes = data;
			console.log("[main] # of items: " + data.length)
			angular.forEach(data, function(element) {
				console.log("[main] cliente: " + element.nome);
			});
		})
		
		response.error(function(data, status, headers, config) {
			alert("AJAX failed to get data, status=" + status);
		})
		
		function teste($scope){
			$scope.epa="olá Angular JS safadinho!";
		}
		
//Fim do controller		
	});	

//Fim do modulo
})();

