var App = angular.module("App", ['ngRoute']);

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