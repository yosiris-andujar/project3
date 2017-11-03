var App = angular.module("App", ['ngRoute','ScheduleService','AppointmentService']);

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
    $scope.status;
    $scope.schedule;

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
        SchudeleApi.getSchedule(id).success(function (schedule) {
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

    function edtiSchedule(editSchedule) {

        var newSchedule;
        for (var i = 0; i < $scope.schedule.length; i++) {
            var currSchedule = $scope.schedule[i];
            if (currSchedule === editSchedule) {
                newSchedule = currSchedule;
                break;
            }
        }

        //Hay que completar
        ScheduleApi.editSchedule(newSchedule).success(function (schedule) {
            $scope.status = 'Appointment Updated! Refreshing appointment list.';
        })
    }

    //function deleteSchedule(delSchedule) {
    //    ScheduleApi.deleteSchedule(delSchedule).success(function (schedule) {
    //        $scope.status = 'Deleted Schedule! Refreshing schedule list.';
    //        for (var i = 0; i < l$scope.schedule.lenght; i++) {
    //            var oldSchedule = $scope.schedule[i];
    //        }
    //    })
    //}


    
});
App.controller('AppointmentsController', function ($scope, AppointmentApi) {
    $scope.status;
    $scope.appointment;

    getSchedules(1);
    function getAppointments(role) {
        AppointmentApi.getAppointments(role).success(function (schedule) {
            $scope.schedule = schedule;
        })
            .error(function (error) {
                $scope.status = 'Unable to load All Schedules Data: ' + error.message;
            })
    }

    function getAppointment(id) {
        AppointmentApi.getAppointment(id).success(function (schedule) {
            $scope.schedule = schedule;
        })
            .error(function (error) {
                $scope.status = 'Unable to load Schedule Data: ' + error.message;
            })
    }

    function insertAppointment(newAppointment) {
        AppointmentApi.insertAppointment(newAppointment).success(function (schedule) {
            $scope.status = 'Inserted Appointment! Refreshing appointment list.';
            $scope.schedule.push(newSchedule);
        })
            .error(function (error) {
                $scope.status = 'Unable to insert schedule: ' + error.message;
            })
    }

    function edtiSchedule(editSchedule) {

        var newSchedule;
        for (var i = 0; i < $scope.schedule.length; i++) {
            var currSchedule = $scope.schedule[i];
            if (currSchedule === editSchedule) {
                newSchedule = currSchedule;
                break;
            }
        }

        //Hay que completar
        ScheduleApi.editSchedule(newSchedule).success(function (schedule) {
            $scope.status = 'Appointment Updated! Refreshing appointment list.';
        })
    }

    //function deleteSchedule(delSchedule) {
    //    ScheduleApi.deleteSchedule(delSchedule).success(function (schedule) {
    //        $scope.status = 'Deleted Schedule! Refreshing schedule list.';
    //        for (var i = 0; i < l$scope.schedule.lenght; i++) {
    //            var oldSchedule = $scope.schedule[i];
    //        }
    //    })
    //}


});
App.controller('HomeController', function ($scope) {


});