var app=angular.module('MyApp', ["ngStorage", "ui.grid", 'ui.grid.edit', 'ui.grid.cellNav','ngRoute']);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "index.html"
  })
  .when("/uiGridController", {
    templateUrl : "uiGridController.html",
    controller : "uiGridController"
  })
  .when("/highChartController", {
    templateUrl : "highChartController.html",
    controller : "highChartController"
  })
  .otherwise({
      template : "<h1>Nothing has been selected</h1>"
    });
});

app.controller('uiGridController', function($scope, $localStorage, $sessionStorage, $window, $http, uiGridConstants) {


   console.log("pppppppppp101010101101010");
   $scope.count = 0;
   console.log($scope.count);
   $scope.gridOptions = {

     showColumnFooter: true,


     paginationPageSizes: [5, 10, 20],
     paginationPageSize: 5,
     enableFiltering: true,
     showGridFooter: true,
     enableGridMenu: true,
     showColumnFooter: true,

     columnDefs: [

       {
         field: 'Name',
         enableCellEdit: true
       },
       {
         field: 'Email',
         enableCellEdit: true
       },
       {
         field: 'Age',
         enableSorting: true,
         enableCellEdit: true,
         aggregationType: uiGridConstants.aggregationTypes.sum,
         width: '13%'
       },

       {
         field: 'University',
         enableCellEdit: true
       },
       {
         field: 'Department',
         enableCellEdit: true
       },
       {
         field: 'Password',
         enableCellEdit: true
       },
       {
         field: 'Hobby',
         enableCellEdit: true
       },

     ],

     onRegisterApi: function(gridApi) {

       $scope.grid1Api = gridApi;

     }

   };


   var StudentList = [];

   if ($localStorage.LocalMessage.length > 0) {
     $scope.gridOptions.data = $localStorage.LocalMessage;
     console.log($scope.gridOptions.data);
   }


   $scope.Save = function() {

     var StudentObj = {};


     StudentObj["Name"] = $scope.name;
     StudentObj["Email"] = $scope.email;
     StudentObj["Age"] = $scope.age;
     StudentObj["University"] = $scope.university;
     StudentObj["Department"] = $scope.department;
     StudentObj["Password"] = $scope.password;
     StudentObj["Hobby"] = $scope.hobby;
     //console.log(StudentObj);
     StudentList.push(StudentObj);
     console.log(StudentList);
     $localStorage.LocalMessage = StudentList;
     //console.log("message")
     $scope.gridOptions.data = $localStorage.LocalMessage;
   }


 //  $scope.Select = function() {

   //  $("#StudentInfo").modal();

   //}


   $scope.gridOptions1 = {
     showColumnFooter: true,

     paginationPageSizes: [5, 10, 20],
     paginationPageSize: 5,
     enableFiltering: true,
     showGridFooter: true,
     enableGridMenu: true,


     columnDefs: [

       {
         field: 'make',
         enableCellEdit: true
       },
       {
         field: 'model',
         enableCellEdit: true
       },
       {
         field: 'price',
         enableCellEdit: true,
         aggregationType: uiGridConstants.aggregationTypes.sum,
         width: '13%'
       },


     ],

     onRegisterApi: function(gridApi) {

       $scope.grid1Api = gridApi;
     }

   };





  /* $scope.Get = function() {
     $http({

       method: 'GET',

       url: 'https://www.ag-grid.com/example-assets/row-data.json'

     }).then(function success(response) {

       $scope.gridOptions1.data = response.data;

       console.log($scope.gridOptions1.data)


     }, function error(response) {

     });


   }*/




});

app.controller('highChartController', function($scope, $localStorage, $sessionStorage, $window, $http, uiGridConstants) {

$scope.choose=function(_type,_id,_data)
{
var param="";
var id="";
$scope.param = _type;
$scope.id = _id;
console.log(_data);
console.log($scope.param);

Highcharts.chart($scope.id, {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: true,
    type: $scope.param
  },
  title: {
    text: 'My Score As a Batsman'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
    point: {
      valueSuffix: 'Runs'
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
  },
  series: [{
    name: 'Runs',
    colorByPoint: true,
    data: [{
      name: '1st match',
      y: _data[0],
      sliced: true,
      selected: true
    }, {
      name: '2nd match',
      y:  _data[1]
    }, {
      name: '3rd match',
      y:  _data[2]
    }, {
      name: '4th match',
      y:  _data[3]
    }, {
      name: '5th match',
      y:  _data[4]
    }, {
      name: '6th match',
      y:  _data[5]
    }]
  }]
});
}

});


