/**
 * Created by esko on 7/8/17.
 */
(function () {
    'use strict';

    angular
        .module('users')
        .controller('UserController', UserController);

    UserController.$inject = ['userService', '$mdSidenav', '$mdBottomSheet', '$log'];

    /* @ngInject */
    function UserController(userService, $mdSidenav, $mdBottomSheet, $log) {
        var vm = this;
        // vm.title = 'UserController';

        activate();

        ////////////////

        function activate() {
            //code
            //var vm = this;

            vm.selected     = null;
            vm.users        = [ ];
            vm.selectUser   = selectUser;
            vm.share        = share;
            vm.toggleList   = toggleList;

            // Load all registered users

            userService
                .loadAllUsers()
                .then( function( users ) {
                    vm.users    = [].concat(users);
                    vm.selected = users[0];
                });

            /**
             * Select the current avatars
             * @param menuId
             */
            function selectUser ( user ) {
                //vm.selected =  user;
                vm.selected =  angular.isNumber(user) ? $scope.users[user] : user;
            }
            
            function toggleList() {
                $mdSidenav('left').toggle();
            }

            ////////////////
            
            function share(selectedUser) {

                $mdBottomSheet.show({
                    controller: UserSheetController,
                    controllerAs: 'vm',
                    templateUrl: './bottomsheet.html',
                    parent: angular.element(document.querySelector('#content'))
                });

                function UserSheetController() {
                    this.user = selectedUser;
                    this.items = [
                        {name: 'Phone', icon: 'phone', icon_url: 'svg/phone.svg'},
                        {name: 'Twitter', icon: 'twitter', icon_url: 'svg/twitter.svg'},
                        {name: 'Google+', icon: 'google_plus', icon_url: 'svg/google_plus.svg'},
                        {name: 'Hangout', icon: 'hangouts', icon_url: 'svg/hangouts.svg'}
                    ];
                    this.performAction = function (action) {
                        $mdBottomSheet.hide();
                    };
                }

            }
            
        }
    }

})();
