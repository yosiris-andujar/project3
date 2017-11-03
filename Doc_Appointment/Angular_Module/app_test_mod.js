var App = angular.module("App", ['ngRoute','ScheduleService']);

App.config(['$routeprovider',
    function ($routeProvider) {
        $routeProvider.
            when('/Schedule', {
                TemplateUrl: 'Front_End/schedule.html',
                controller: 'ScheduleController'
            }).
            when('/Appointments', {
                TemplateUrl: 'Front_End/appointments.html',
                controller: 'AppointmentsController'
            }).
            when('/Home', {
                TemplateUrl: 'Front_End/home.html',
                controller: 'HomeController'
            }).
            otherwise({
                redirectTo: '/Home'
            });
    }]);

App.controller('ScheduleController', function ($scope, ScheduleApi){

    getSchedules(1);
    function getSchedules(role) {
        ScheduleApi.getSchedules(role).success(function (schedule) {
            $scope.schedule = schedule;
        })
            .error(function (error) {
                $scope.status = 'Unable to load All Schedules Data: ' + error.message;
            })
    }

    function getSchedule(id) {
        SchudelApi.getSchedule(id).success(function (schedule) {
            $scope.schedule = schedule;
        })
            .error(function (error) {
                $scope.status = 'Unable to load Schedule Data: ' + error.message;
            })
    }

    function insertSchedule(newSchedule) {
        ScheduleApi.insertSchedule(newSchedule).success(function (schedule) {
            $scope.status = 'Inserted Appointment! Refreshing appointment list.';
            $scope.schedule.push(newSchedule);
        })
            .error(function (error) {
                $scope.status = 'Unable to insert schedule: ' + error.message;
            })
    }

    function edtiSchedule(newSchedule)

    //function deleteSchedule(delSchedule) {
    //    ScheduleApi.deleteSchedule(delSchedule).success(function (schedule) {
    //        $scope.status = 'Deleted Schedule! Refreshing schedule list.';
    //        for (var i = 0; i < l$scope.schedule.lenght; i++) {
    //            var oldSchedule = $scope.schedule[i];
    //        }
    //    })
    //}


    
});
App.controller('AppointmentsController', function ($scope) {


});
App.controller('HomeController', function ($scope) {


});