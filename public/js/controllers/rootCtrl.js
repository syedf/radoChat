/**
 * Created by syedf on 2/9/2016.
 */
angular
    .module('radoChat',['btford.socket-io','ui.router','ngFileUpload'])
    .config(['$stateProvider','$urlRouterProvider','$locationProvider', function ($stateProvider,$urlRouterProvider,$locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('chatRoom',{
                url: '/',
                controller:'chatRoomCtrl',
                templateUrl: '/views/chatRoom.html'
            })
            .state('about',{
                url:'/about',
                template: '<div class="container">Made by Syed Faizan</div>'
            })
    }]);