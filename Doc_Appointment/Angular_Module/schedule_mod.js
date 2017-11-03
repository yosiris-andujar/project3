var ScheduleService = angular.module('ScheduleService', []);

ScheduleService.factory('ScheduleApi', function ($http) {

    var urlBase = '';
    var ScheduleApi = {};

    ScheduleApi.getSchedules = function (role) {
        return $http.get(urlBase + '/Schedules' + role);
    };

    ScheduleApi.getSchedule = function (id) {
        return $http.get(urlBase + '/Schedule' + id);
    };

    SheduleApi.insertSchedule = function (schedule) {

        return $http.post(urlBase + '/Schedule/' + schedule);
    };

    ScheduleApi.deleteSchedule = function (delSchedule) {

        var request = $http({
            method: 'delete',
            url: urlBase + '/Schedule/' + delSchedule.Id
        });
        return request;
    };
    //Verificar al juntarlo con el app_test_mod
    ScheduleApi.editSchedule = function (editSchedule) {

        var request = $http({
            method: 'put',
            url: urlBase + '/Schedule/' + editSchedule.Id,
            data: editSchedule
        });
        return request;
    };

    return ScheduleApi;
});