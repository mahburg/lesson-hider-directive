angular.module('directivePractice').controller('lessonCtrl', function ($scope, lessonSrv) {
    $scope.test = "'Two-way data binding!'";
    $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

    $scope.schedule = lessonSrv.getSchedule().then(function (response) {
        console.log(response.data)
        return response.data;
    })
    $scope.announceDay = function (lesson, day) {
        if (day) {
            alert(lesson + ' is active on ' + day + '.');
        } else {
            alert(lesson + ' is not active yet.')
        }
    }
})