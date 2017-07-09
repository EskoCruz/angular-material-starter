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
                vm.selected =  user;
            }
            
            function share(selectUser) {

            }
            
        }
    }

})();
