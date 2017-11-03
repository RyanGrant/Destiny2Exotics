var app = angular.module('App', ['ngCookies'])
    .controller('mainController', ['$cookies',
        function ($cookies) {
            var vm = this;
            var favoriteCookie = $cookies.get('myFavorite');
            // Setting a cookie
            $cookies.put('myFavorite', 'oatmeal');
            vm.name = $cookies.get('myFavorite');
            vm.wep = "wep";
            
        vm.toTitanArmor = function () {
            //this needs to be a component thing
        };
        console.log("in the main controller");

        vm.toggle = function (index) {
            vm.weaponList[index].active = !vm.weaponList[index].active;
        }
        vm.weaponList = [
            {
                name: "Sunshot",
                image: "https://vignette.wikia.nocookie.net/destinypedia/images/6/68/Sunshot_Screenshot.jpg/revision/latest/scale-to-width-down/1000?cb=20170914190825",
                active: false,
                location: "Some questline"
            },
            {
                name: "MIDA Multi Tool",
                image: 'https://vignette.wikia.nocookie.net/destinypedia/images/d/d1/MIDA_Multi-Tool_%28Scout_Rifle%29_Screenshot.jpg/revision/latest/scale-to-width-down/1000?cb=20170927232956',
                active: false,
                location: "Some other questline"
            },
            {
                name: "Sturm",
                image: 'https://vignette.wikia.nocookie.net/destinypedia/images/d/d7/Sturm_Screenshot.jpg/revision/latest/scale-to-width-down/1000?cb=20170908095421',
                active: false,
                location: "Some questline"
            },
            {
                name: "Skyburner's Oath",
                image: 'https://vignette.wikia.nocookie.net/destinypedia/images/6/66/Skyburner%27s_Oath_Screenshot.jpg/revision/latest/scale-to-width-down/1000?cb=20170908102104',
                active: false,
                location: "Some other questline"
            },
            {
                name: "D.A.R.C.I",
                image: 'https://vignette.wikia.nocookie.net/destinypedia/images/5/50/D.A.R.C.I._Screenshot.jpg/revision/latest/scale-to-width-down/1000?cb=20170908095948',
                active: false,
                location: "Some other questline"
            },
            {
                name: "Borealis",
                image: 'https://vignette.wikia.nocookie.net/destinypedia/images/e/e5/Borealis_Screenshot.jpg/revision/latest/scale-to-width-down/1000?cb=20170914191027',
                active: false,
                location: "Some other questline"
            },
            {
                name: "Vigilance Wing",
                image: 'https://vignette.wikia.nocookie.net/destinypedia/images/3/35/Vigilance_Wing_Screenshot.jpg/revision/latest/scale-to-width-down/1000?cb=20170908095012',
                active: false,
                location: "Some other questline"
            },
            {
                name: "Graviton Lance",
                image: 'https://vignette.wikia.nocookie.net/destinypedia/images/5/5b/Graviton_Lance_Screenshot.jpg/revision/latest/scale-to-width-down/1000?cb=20170908095003',
                active: false,
                location: "Some other questline"
            },
            {
                name: "Rat King",
                image: 'https://vignette.wikia.nocookie.net/destinypedia/images/1/12/Rat_King_Screenshot.jpg/revision/latest/scale-to-width-down/1000?cb=20170908101018',
                active: false,
                location: "Some other questline"
            },
            {
                name: "The Prospector",
                image: 'https://vignette.wikia.nocookie.net/destinypedia/images/d/d9/The_Prospector_Screenshot.jpg/revision/latest/scale-to-width-down/1000?cb=20170908095739',
                active: false,
                location: "Some other questline"
            },
            {
                name: "The Wardcliff Coil",
                image: 'https://vignette.wikia.nocookie.net/destinypedia/images/7/71/The_Wardcliff_Coil_Screenshot.jpg/revision/latest/scale-to-width-down/1000?cb=20170908100032',
                active: false,
                location: "Some other questline"
            },
            {
                name: "Fighting Lion",
                image: 'https://vignette.wikia.nocookie.net/destinypedia/images/8/8f/Fighting_Lion_Screenshot.jpg/revision/latest?cb=20170908095732',
                active: false,
                location: "Some other questline"
            },
            {
                name: "Tractor Cannon",
                image: 'https://vignette.wikia.nocookie.net/destinypedia/images/0/03/Tractor_Cannon_Screenshot.jpg/revision/latest/scale-to-width-down/1000?cb=20170908094951',
                active: false,
                location: "Some other questline"
            }
        ];
            
        vm.titanArmorList = [
            {
                name: "ACDO Feedback",
                //displayImage: inimage,
                active: false,
                location: "Random"
            }
        ];
    }]
)