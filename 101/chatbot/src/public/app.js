function getNow() {
    var date = new Date();
    var aaaa = date.getFullYear();
    var gg = date.getDate();
    var mm = (date.getMonth() + 1);

    if (gg < 10)
        gg = "0" + gg;

    if (mm < 10)
        mm = "0" + mm;

    var cur_day = aaaa + "-" + mm + "-" + gg;

    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds();

    if (hours < 10)
        hours = "0" + hours;

    if (minutes < 10)
        minutes = "0" + minutes;

    if (seconds < 10)
        seconds = "0" + seconds;
    return cur_day + " " + hours + ":" + minutes + ":" + seconds;

}


var API_GET_ANSWER = 'http://localhost:8080/chat-bot/getAnswer';
var API_TRAINING = 'http://localhost:8080/chat-bot/training';
var app = angular.module('appChatBot', []);
app.controller('myCtrl', function ($scope, $http) {
    $scope.messageList = [
        {
            text: 'What is questions with chat bot ?',
            time: getNow(),
            type: 'bot'
        }
    ];

    $scope.init = function () {
    }

    $scope.onTraining = function () {
        $http({
            url: API_TRAINING,
            method: "POST",
            data: { 'q': $scope.questionTraining, 'a': $scope.answerTraing }
        })
            .then(function (response) {
                // success
                console.log(response);
            })
            .catch(err => {
                console.log('err: ', err);
            })
    }

    $scope.onSendQuestion = function () {
        console.log('send question ..');
        $scope.messageList.push({
            text: $scope.question,
            time: getNow(),
            type: ''
        });
        $http({
            url: API_GET_ANSWER,
            method: "POST",
            data: { 'q': $scope.question }
        })
            .then(function (response) {
                // success
                console.log(response);
                let messager = {
                    text: response.data.answer,
                    time: getNow(),
                    type: 'bot'
                };
                $scope.messageList.push(messager);
            })
            .catch(err => {
                console.log('err: ', err);
            })
    }
});