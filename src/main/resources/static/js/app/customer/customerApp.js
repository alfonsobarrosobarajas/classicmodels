'use strict'
angular.module('customerModule', [])
    .controller('customerController', function($scope, $http, $window){

        $scope.customer = {
            customernumber : null,
            customername : null,
            contactfirstname : null,
            contactlastname : null,
            phone : null,
            addressline1 : null,
            addressline2 : null,
            city : null,
            state : null,
            postalcode : null,
            country : null,
            salesrepemployeenumber : null,
            creditlimit : null
        };

        $scope.customers = [];

        // Función para obtener un listado de todos los customers
        function listCustomers(){

            $http.get('/customer/list').then(
                (response) => {

                    $scope.customers = response.data;

                },
                (response) => {

                });

        }

        listCustomers();

    });