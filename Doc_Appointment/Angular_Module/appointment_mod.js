var AppointmentService = angular.module('AppointmentService', []);

ScheduleService.factory('AppointmentApi', function ($http) {

    var urlBase = '';
    var ScheduleApi = {};

    AppointmentApi.getAppointments = function (role) {
        return $http.get(urlBase + '/Appointments' + role);
    };

     AppointmentApi.getAppointment = function (id) {
        return $http.get(urlBase + '/Appointment' + id);
    };

     AppointmentApi.insertAppointment = function (appointment) {

        return $http.post(urlBase + '/Appointment/' + appointment);
    };

     AppointmentApi.deleteSAppointment = function (delAppointment) {

        var request = $http({
            method: 'delete',
            url: urlBase + '/Appointment/' + delAppointment.Id
        });
        return request;
    };
    //Verificar al juntarlo con el app_test_mod
    AppointmentApi.editAppointment = function (editAppointment) {

        var request = $http({
            method: 'put',
            url: urlBase + '/Appointment/' + editAppointment.Id,
            data: editAppointment
        });
        return request;
    };

    return AppointmentApi;
});