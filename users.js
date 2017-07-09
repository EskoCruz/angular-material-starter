/**
 * Created by esko on 7/8/17.
 */
(function () {
    'use strict';

    angular
        .module('users', ['ngMaterial'])
        .config(function($sceProvider) {
            // ngMaterial $mdIconProvider will be updated  to mark urls as safe.
            // Meanwhile, disable $sce for ngMaterial CodePen Demos that using external SVGs
            $sceProvider.enabled(false);
        });

})();