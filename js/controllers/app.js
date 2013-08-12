/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function AppCtrl($scope) {
    $scope.airports = {
        "MIP": {
            code: "MIP",
            city: "Michigan",
            name: "Michigan first international airport",
            destinations: [
                "LAX",
                "MKE"
            ]
        },
        "LIP": {
            code: "LIP",
            city: "Las Vegas",
            name: "Las Vegas primary flights terminal",
            destinations: [
                "LAX",
                "DFW"
            ]
        }
    };

    $scope.sidebarURL = 'partials/airport.html';
    $scope.editURL = 'partials/form.html';
    
    $scope.currentAirport = null;
    $scope.editing = null;

    $scope.setAirport = function(code) {
        $scope.currentAirport = $scope.airports[code];
    };

    $scope.editAirport = function(code){
        $scope.editing = $scope.airports[code];
    };


};