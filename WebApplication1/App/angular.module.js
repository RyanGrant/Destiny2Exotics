var app = angular.module('App', ['ngCookies'])
    .controller('mainController', ['$cookies',
        function ($cookies) {
            var vm = this;
            console.log(vm.weaponList);
            vm.init = function () {
                $cookies.remove("weaponList");
                
                var cookies = $cookies.get('weaponList');
                if (cookies == undefined) {
                    console.log("Initial Setup");
                    vm.initialSetup();
                }
                else {
                    console.log("Loaded cookies");
                    console.log(cookies);
                    vm.initialSetup();
                    var cookies = $cookies.get('weaponList');
                    for (i = 0; i < vm.weaponList.length; i++) {
                        if (cookies[i] == 't') {
                            vm.weaponList[i].active = true;
                        }
                        else {
                            vm.weaponList[i].active = false;

                        }
                    }
                }
            };
            
        vm.toTitanArmor = function () {
            //this needs to be a component thing
        };

        vm.toggle = function (item) {
            item.active = !item.active;
            var cookieWeapons = "";
            for (i = 0; i < vm.weaponList.length; i++) {
                if (vm.weaponList[i].active) {
                    cookieWeapons += '1';
                }
                else {
                    cookieWeapons += '0';

                }
            }
            $cookies.put('weaponList', cookieWeapons);
        }

        vm.initialSetup = function () {
            vm.weaponList = exoticWeaponList;
        }

        vm.showMouseover = function () {
            vm.popoverIsVisible = true;
        };

        vm.hideMouseover = function () {
            vm.popoverIsVisible = false;
        };
    }]
)