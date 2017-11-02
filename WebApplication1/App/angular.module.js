var app = angular.module("App", []);

app.controller("mainController",
    function ($scope) {
        $scope.toTitanArmor = function () {
            //this needs to be a component thing
        };
        $scope.weaponList = [
            {
                name: "Rat King",
                inactiveImage: "nyi",
                activeImage: "nyi",
                displayImage: inactiveImage,
                active: false,
                location: "Some questline"
            },
            {
                name: "MIDA Multi Tool",
                inactiveImage: "nyi",
                activeImage: "nyi",
                displayImage: inactiveImage,
                active: false,
                location: "Some other questline"
            }
        ];
        $scope.titanArmorList = [
            {
                name: "ACDO Feedback",
                inactiveImage: "nyi",
                activeImage: "nyi",
                displayImage: inactiveImage,
                active: false,
                location: "Random"
            }
        ];
    }
);

app.controller("yourController",
    function ($scope) {
        $scope.yourWeaponList = $scope.weaponList;
        $scope.activateButton = function (index) {
            yourWeaponList[index].active = !(yourWeaponList[index].active);
            yourWeaponList[index].displayImage = 
        };
    })