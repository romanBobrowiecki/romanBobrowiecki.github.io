webpackJsonp([1],{189:function(e,t,i){"use strict";i(190),i(191)},190:function(e,t){},191:function(e,t,i){"use strict";angular.module("qbik",["ui.router","landingModule","onasModule","corobimyModule","kontaktModule","prywatneModule","publiczneModule","detailModule"]),i(192),i(193),i(194),i(199),i(204),i(209),i(214),i(219),i(224)},192:function(e,t,i){"use strict";function a(e,t,i,a){e.state("landing",{url:"/home",component:"landing"}).state("onas",{url:"/about",component:"onas"}).state("corobimy",{url:"/corobimy",component:"corobimy"}).state("kontakt",{url:"/kontakt",component:"kontakt"}).state("prywatne",{url:"/prywatne",component:"prywatne"}).state("publiczne",{url:"/publiczne",component:"publiczne"}).state("detail",{url:"/detail",component:"detail"}),t.otherwise("home")}a.$inject=["$stateProvider","$urlRouterProvider","$locationProvider","$qProvider"],angular.module("qbik").config(a)},193:function(e,t,i){"use strict";function a(){this.$onInit=function(){console.log("qbik established")}}angular.module("qbik").component("qbik",{selector:"qbik",template:"\n\t\t\t<ui-view></ui-view>\n\t\t",controller:a})},194:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(195);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var n=i(196);Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})});var l=i(198);Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})})},195:function(e,t,i){"use strict";angular.module("landingModule",[])},196:function(e,t,i){"use strict";(function(e){function t(t){this.landingService=t,this.$onInit=function(){var t=this;console.log("landing established"),e(document).ready(function(){t.landingService.backgroundChangeStart()})},this.goTo=function(e){this.landingService.goTo(e)}}angular.module("landingModule").component("landing",{selector:"landing",template:i(197),controller:["landingService",t]})}).call(t,i(54))},197:function(e,t,i){e.exports='\t<main class="main-container">\n\t\t<div class="main-container__logo">\n\t\t\t<img class="logo__logo-image" src="'+i(42)+'" alt="">\n\t\t</div>\n\t\t<nav class="main-container__main-nav">\n\t\t\t<h2 class="main-nav__link" ng-click="$ctrl.goTo(\'onas\')">\n\t\t\t\tO NAS\n\t\t\t</h2>\n\t\t\t<h2 class="main-nav__link" ng-click="$ctrl.goTo(\'corobimy\')">\n\t\t\t\tCO ROBIMY\n\t\t\t</h2>\n\t\t\t<h2 class="main-nav__link" ng-click="$ctrl.goTo(\'kontakt\')">\n\t\t\t\tKONTAKT\n\t\t\t</h2>\n\n\t\t\t<a class="main-nav__link-facebook" href="https://www.facebook.com/Qbik-Design-318986181482264/" target="_blank"><img class="main-nav__link-facebook-image" src="'+i(43)+'" alt=""></a>\n\t\t</nav>\n\t</main>\n\t<div class="landing-background landing__background-1"></div>\n\t<div class="landing-background landing__background-2 landing__background_hidden"></div>\n\t<div class="landing-background landing__background-3 landing__background_hidden"></div>\n\t<div class="landing-background landing__background-4 landing__background_hidden"></div>\n'},198:function(e,t,i){"use strict";(function(e){function t(t,i,a){var n=this;this.$state=a,this.backgroundChangeStart=function(){for(var i=1;i<4;i++)!function(i){t(function(){e(".landing__background-"+i).fadeTo(400,0),e(".landing__background-"+(i+1)).fadeTo(400,1),console.log(i)},2500*i)}(i)},this.goTo=function(e){n.$state.go(e)}}angular.module("landingModule").service("landingService",["$timeout","$interval","$state",t])}).call(t,i(54))},199:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(200);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var n=i(201);Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})});var l=i(203);Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})})},200:function(e,t,i){"use strict";angular.module("onasModule",[])},201:function(e,t,i){"use strict";function a(e){var t=this;this.onasService=e,this.$onInit=function(){console.log("onas established")},this.goTo=function(e){t.onasService.goTo(e)}}angular.module("onasModule").component("onas",{selector:"onas",template:i(202),controller:["onasService",a]})},202:function(e,t,i){e.exports='<main class="main-container">\n\t<nav class="main-container__nav">\n\t\t<ul class="nav__link-container">\n\t\t\t<li class="nav__link nav__link_current">O NAS</li>\n\t\t\t<li class="nav__link" ng-click="$ctrl.goTo(\'corobimy\')">CO ROBIMY</li>\n\t\t\t<li class="nav__link" ng-click="$ctrl.goTo(\'kontakt\')">KONTAKT</li>\n\t\t\t<li class="nav__link nav__link-facebook"><a href="https://www.facebook.com/Qbik-Design-318986181482264/" target="_blank"><img class="nav__link-image" src="'+i(43)+'" alt=""></a></li>\n\t\t</ul>\n\t</nav>\n\t<div class="onas-main-container__logo">\n\t\t\t<img class="onas-logo__logo-image" src="'+i(42)+'" alt="">\n\t</div>\n\t<h1 class="onas-main-conatiner__main-title main-container__main-title">O NAS</h1>\n\t\n<section class="main-container__person-wrapper">\n\t<section class="main-container__person">\n\t\t<h2>KAROLINA WILK</h2>\n\t\t<div class="person-photo person-photo-karolina">\n\t\t</div>\n\t\t<p class="person__about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ante turpis, lacinia in sollicitudin ultricies, vulputate a est. Duis gravida non nulla tincidunt pulvinar. Fusce pellentesque, orci vel tincidunt vehicula, massa metus pharetra eros, ac venenatis nisi erat quis quam. Nullam fermentum tristique sem. Phasellus et convallis ante, in tempor lorem. Ut suscipit lobortis diam non mattis. In sagittis vehicula orci at vulputate. Vivamus luctus placerat lectus, quis tempus nunc faucibus at.</p>\n\t</section>\n\t\n\t<section class="main-container__person">\n\t\t<h2>EWELINA SZYMAŃCZAK</h2>\n\t\t<div class="person-photo person-photo-ewelina">\n\t\t</div>\n\t\t<p class="person__about">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ante turpis, lacinia in sollicitudin ultricies, vulputate a est. Duis gravida non nulla tincidunt pulvinar. Fusce pellentesque, orci vel tincidunt vehicula, massa metus pharetra eros, ac venenatis nisi erat quis quam. Nullam fermentum tristique sem. Phasellus et convallis ante, in tempor lorem. Ut suscipit lobortis diam non mattis. In sagittis vehicula orci at vulputate. Vivamus luctus placerat lectus, quis tempus nunc faucibus at.</p>\n\t</section>\n</section>\n</main>\n\n<div class="onas-background"></div>\n\n'},203:function(e,t,i){"use strict";function a(e,t,i){var a=this;this.$state=i,this.goTo=function(e){a.$state.go(e)}}angular.module("onasModule").service("onasService",["$timeout","$interval","$state",a])},204:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(205);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var n=i(206);Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})});var l=i(208);Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})})},205:function(e,t,i){"use strict";angular.module("corobimyModule",[])},206:function(e,t,i){"use strict";(function(e){function t(t){var i=this;this.corobimyService=t,this.$onInit=function(){this.corobimyService.backgroundChangeStart()},this.openSubkinds=function(){e(".kind__subkind").removeClass("subkind_hidden"),e(".corobimy__kind-title-real").removeClass("corobimy__kind_onhover")},this.openPublikacjeSubkinds=function(){e(".corobimy__kind_publikacje-subkind").removeClass("subkind_hidden"),e(".corobimy__kind-title-publ").removeClass("corobimy__kind_onhover")},this.goTo=function(e){i.corobimyService.goTo(e)}}angular.module("corobimyModule").component("corobimy",{selector:"corobimy",template:i(207),controller:["corobimyService",t]})}).call(t,i(54))},207:function(e,t,i){e.exports='<main class="main-container">\n\t<nav class="kontakt-main-container__nav main-container__nav">\n\t\t<ul class="kontakt-nav__link-container nav__link-container">\n\t\t\t<li class="nav__link kontakt-nav__link" ng-click="$ctrl.goTo(\'onas\')">O NAS</li>\n\t\t\t<li class="nav__link kontakt-nav__link nav__link_current">CO ROBIMY</li>\n\t\t\t<li class="nav__link kontakt-nav__link" ng-click="$ctrl.goTo(\'kontakt\')">KONTAKT</li>\n\t\t\t<li class="nav__link kontakt-nav__link nav__link-facebook"><a href="https://www.facebook.com/Qbik-Design-318986181482264/" target="_blank"><img class="nav__link-image" src="'+i(43)+'" alt=""></a></li>\n\t\t</ul>\n\t</nav>\n\t<div class="onas-main-container__logo corobimy-main-container__logo">\n\t\t\t<img class="onas-logo__logo-image" src="'+i(42)+'" alt="">\n\t</div>\n\t<h1 class="corobimy-main-container__main-title main-container__main-title">CO ROBIMY</h1>\n\t\n\t<section class="corobimy__kind-wrapper with-background">\n\t\t<div class="corobimy__kind corobimy__kind-titles">\n\t\t\t<h2 class="corobimy__kind-title corobimy__kind-title-real corobimy__kind_onhover" ng-click="$ctrl.openSubkinds()">\n\t\t\tREALIZACJE\n\t\t\t</h2>\n\t\t\t<h2 class="corobimy__kind-title corobimy__kind-title-publ corobimy__kind_onhover" ng-click="$ctrl.openPublikacjeSubkinds()">\n\t\t\tPUBLIKACJE\n\t\t\t</h2>\n\t\t</div>\n\t\t<div class="corobimy__kind">\n\t\t\t<div class="subkind-wrapper">\n\t\t\t\t<div class="kind__subkind subkind_hidden" ng-click="$ctrl.goTo(\'prywatne\')">PRYWATNE</div>\n\t\t\t\t<div class="kind__subkind subkind_hidden" ng-click="$ctrl.goTo(\'publiczne\')">PUBLICZNE</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="corobimy__kind corobimy__kind_publikacje-onhover">\n\t\t\t<div class="corobimy__kind_publikacje-subkind subkind_hidden">\n\t\t\t\t(W budowie)\n\t\t\t</div>\n\t\t</div>\n\t</section>\n</main>\n\n<div class="corobimy__background corobimy__background-1"></div>\n<div class="corobimy__background corobimy__background_hidden corobimy__background-2"></div>\n<div class="corobimy__background corobimy__background_hidden corobimy__background-3"></div>\n<div class="corobimy__background corobimy__background_hidden corobimy__background-4"></div>\n'},208:function(e,t,i){"use strict";(function(e){function t(t,i,a){var n=this;this.$state=a,this.backgroundChangeStart=function(){for(var i=1;i<4;i++)!function(i){t(function(){e(".corobimy__background-"+i).fadeTo(400,0),e(".corobimy__background-"+(i+1)).fadeTo(400,1),console.log(i)},2500*i)}(i)},this.goTo=function(e){n.$state.go(e)}}angular.module("corobimyModule").service("corobimyService",["$timeout","$interval","$state",t])}).call(t,i(54))},209:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(210);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var n=i(211);Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})});var l=i(213);Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})})},210:function(e,t,i){"use strict";angular.module("kontaktModule",[])},211:function(e,t,i){"use strict";function a(e){var t=this;this.kontaktService=e,this.$onInit=function(){},this.goTo=function(e){t.kontaktService.goTo(e)}}angular.module("kontaktModule").component("kontakt",{selector:"kontakt",template:i(212),controller:["kontaktService",a]})},212:function(e,t,i){e.exports='<main class="main-container">\n\t<nav class="main-container__nav">\n\t\t<ul class="nav__link-container">\n\t\t\t<li class="nav__link" ng-click="$ctrl.goTo(\'onas\')">O NAS</li>\n\t\t\t<li class="nav__link" ng-click="$ctrl.goTo(\'corobimy\')">CO ROBIMY</li>\n\t\t\t<li class="nav__link nav__link_current">KONTAKT</li>\n\t\t\t<li class="nav__link nav__link-facebook"><a href="https://www.facebook.com/Qbik-Design-318986181482264/" target="_blank"><img class="nav__link-image" src="'+i(43)+'" alt=""></a></li>\n\t\t</ul>\n\t</nav>\n\t<div class="kontakt-main-logo onas-main-container__logo">\n\t\t\t<img class="onas-logo__logo-image" src="'+i(42)+'" alt="">\n\t</div>\n\t<h1 class="kontakt__main-title main-container__main-title">KONTAKT</h1>\n\t<section class="main__kontakt">\n\t\t<div class="kontakt__details-icons">\n\t\t\t<p><i class="fa fa-phone" aria-hidden="true"></i></p>\n\t\t\t<p><i class="fa fa-phone" aria-hidden="true"></i></p>\n\t\t\t<p><i class="fa fa-envelope" aria-hidden="true"></i></p>\n\t\t\t<p><i class="fa fa-map-marker" aria-hidden="true"></i></p>\n\t\t</div>\n\t\t<div class="kontakt__details-contents">\n\t\t\t<p>Karolina Wilk (+48) 510 151 123</p>\n\t\t\t<p>Ewelina Szymańczak (+48) 787 672 462</p>\n\t\t\t<p>biuro@qbikdesign.com.pl</p>\n\t\t\t<p>Kopernika 30, Warszawa</p>\n\t\t</div>\n\t</section>\n\n\t<div class="kontakt-background"></div>\n</main>\n'},213:function(e,t,i){"use strict";function a(e,t,i){var a=this;this.$state=i,this.goTo=function(e){a.$state.go(e)}}angular.module("kontaktModule").service("kontaktService",["$timeout","$interval","$state",a])},214:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(215);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var n=i(216);Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})});var l=i(218);Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})})},215:function(e,t,i){"use strict";angular.module("prywatneModule",[])},216:function(e,t,i){"use strict";function a(e,t,i){var a=this;this.prywatneService=e,this.realId=null,this.$onInit=function(){a.realId=null,a.prywatneService.initializeRealizacje(),a.prywatneService.firstInitRealizacje=!1},this.goTo=function(e){a.prywatneService.goTo(e)},this.goToDetail=function(e){t.currentDetail=e,console.log(e),a.prywatneService.goTo("detail")},this.realizacje=this.prywatneService.realizacje}angular.module("prywatneModule").component("prywatne",{selector:"prywatne",template:i(217),controller:["prywatneService","detailService","$timeout",a]})},217:function(e,t,i){e.exports='<main class="main-container">\n\n\t<nav class="main-container__nav">\n\t\t<ul class="nav__link-container">\n\t\t\t<li class="nav__link" ng-click="$ctrl.goTo(\'onas\')">O NAS</li>\n\t\t\t<li class="nav__link" ng-click="$ctrl.goTo(\'corobimy\')">CO ROBIMY</li>\n\t\t\t<li class="nav__link" ng-click="$ctrl.goTo(\'kontakt\')">KONTAKT</li>\n\t\t\t<li class="nav__link nav__link-facebook"><a href="https://www.facebook.com/Qbik-Design-318986181482264/" target="_blank"><img class="nav__link-image" src="'+i(43)+'" alt=""></a></li>\n\t\t</ul>\n\t</nav>\n\n\t<div class="onas-main-container__logo">\n\t\t\t<img class="onas-logo__logo-image" src="'+i(42)+'" alt="">\n\t</div>\n\n\t<h1 class="main-container__main-title">REALIZACJE PRYWATNE</h1>\n\n\t<div class="grid">\n\t\t<div class="grid-item" ng-repeat="item in $ctrl.realizacje" ng-click="$ctrl.goToDetail(item)">\n\t\t<div class="grid-item-background" ng-style="{\'background-image\':\'url(\' + item.mainImage + \')\'}"></div>\n\t\t<h3 class="grid-item-title">{{item.title}}</h3>\n\t\t</div>\n\t</div>\n</main>'},218:function(e,t,i){"use strict";function a(e,t,i){var a=this;this.$state=i,this.firstInitRealizacje=!0,this.goTo=function(e){a.$state.go(e)},this.realizacje=[{mainImage:"../img/boraafter-4.jpg",title:"Bora Komorowskiego",images:[],id:0},{mainImage:"../img/bruna-9.jpg",title:"Bruna",images:[],id:1},{mainImage:"../img/cybernetyki-1.jpg",title:"Cybernetyki",images:[],id:2},{mainImage:"../img/dywizjonu-1.jpg",title:"Dywizjonu 303",images:[],id:3},{mainImage:"../img/groj-10.jpg",title:"Grójecka",images:[],id:4},{mainImage:"../img/janowskiego-9.jpg",title:"Janowskiego",images:[],id:5},{mainImage:"../img/jozefo-0.jpg",title:"Józefosław",images:[],id:6},{mainImage:"../img/jugoslaw-0.jpg",title:"Jugosławiańska",images:[],id:7},{mainImage:"../img/kazubowafter-0.jpg",title:"Kazubów",images:[],id:8},{mainImage:"../img/klob-9.jpg",title:"Kłobucka",images:[],id:9},{mainImage:"../img/ksiezycowa-14.jpg",title:"Księżycowa",images:[],id:10},{mainImage:"../img/mloc-10.jpg",title:"Młocina",images:[],id:11},{mainImage:"../img/murm-4.jpg",title:"Murmańska",images:[],id:12},{mainImage:"../img/obrzezna-6.jpg",title:"Obrzeżna",images:[],id:13},{mainImage:"../img/ogrodowa-11.jpg",title:"Ogrodowa",images:[],id:14},{mainImage:"../img/ogrodyshiraz-8.jpg",title:"Ogrody Shiraz",images:[],id:15},{mainImage:"../img/podzegarem-12.jpg",title:"Osiedle Pod Zegarem",images:[],id:16},{mainImage:"../img/ozarow-4.jpg",title:"Ożarów",images:[],id:17},{mainImage:"../img/podkowy-0.jpg",title:"Podkowy",images:[],id:18},{mainImage:"../img/podkowy2-0.jpg",title:"Podkowy 2",images:[],id:19},{mainImage:"../img/puszczykaafter-0.jpg",title:"Puszczyka",images:[],id:20},{mainImage:"../img/rydygiera-6.jpg",title:"Rydygiera",images:[],id:21},{mainImage:"../img/sadyba-8.jpg",title:"Sadyba",images:[],id:22},{mainImage:"../img/sandomierska-23.jpg",title:"Sandomierska",images:[],id:23},{mainImage:"../img/skorosze-1.jpg",title:"Skorosze",images:[],id:24},{mainImage:"../img/targowek-4.jpg",title:"Targówek",images:[],id:25},{mainImage:"../img/verdis-1.jpg",title:"Verdis",images:[],id:26},{mainImage:"../img/woronicza-9.jpg",title:"Woronicza",images:[],id:27}],this.initializeRealizacje=function(){if(a.firstInitRealizacje){for(var e=0;e<=4;e++)a.realizacje[0].images.push("../img/boraafter-"+e+".jpg");for(var t=0;t<=9;t++)a.realizacje[0].images.push("../img/borabefore-"+t+".jpg");for(var i=0;i<=9;i++)a.realizacje[1].images.push("../img/bruna-"+i+".jpg");for(var n=0;n<=12;n++)a.realizacje[2].images.push("../img/cybernetyki-"+n+".jpg");for(var l=0;l<=12;l++)a.realizacje[3].images.push("../img/dywizjonu-"+l+".jpg");for(var o=0;o<=10;o++)a.realizacje[4].images.push("../img/groj-"+o+".jpg");for(var r=0;r<=19;r++)a.realizacje[5].images.push("../img/janowskiego-"+r+".jpg");for(var c=0;c<=3;c++)a.realizacje[6].images.push("../img/jozefo-"+c+".jpg");for(var s=0;s<=14;s++)a.realizacje[7].images.push("../img/jugoslaw-"+s+".jpg");for(var g=0;g<=2;g++)a.realizacje[8].images.push("../img/kazubowafter-"+g+".jpg");for(var u=0;u<=1;u++)a.realizacje[8].images.push("../img/kazubowbefore-"+u+".jpg");for(var d=0;d<=30;d++)a.realizacje[9].images.push("../img/klob-"+d+".jpg");for(var m=0;m<=24;m++)a.realizacje[10].images.push("../img/ksiezycowa-"+m+".jpg");for(var _=0;_<=19;_++)a.realizacje[11].images.push("../img/mloc-"+_+".jpg");for(var v=0;v<=10;v++)a.realizacje[12].images.push("../img/murm-"+v+".jpg");for(var k=0;k<=17;k++)a.realizacje[13].images.push("../img/obrzezna-"+k+".jpg");for(var f=0;f<=11;f++)a.realizacje[14].images.push("../img/ogrodowa-"+f+".jpg");for(var p=0;p<=13;p++)a.realizacje[15].images.push("../img/ogrodyshiraz-"+p+".jpg");for(var b=0;b<=12;b++)a.realizacje[16].images.push("../img/podzegarem-"+b+".jpg");for(var h=0;h<=21;h++)a.realizacje[17].images.push("../img/ozarow-"+h+".jpg");for(var y=0;y<=3;y++)a.realizacje[18].images.push("../img/podkowy-"+y+".jpg");for(var j=0;j<=5;j++)a.realizacje[19].images.push("../img/podkowy2-"+j+".jpg");for(var z=0;z<=24;z++)a.realizacje[20].images.push("../img/puszczykaafter-"+z+".jpg");for(var w=0;w<=11;w++)a.realizacje[20].images.push("../img/puszczykabefore-"+w+".jpg");for(var $=0;$<=21;$++)a.realizacje[21].images.push("../img/rydygiera-"+$+".jpg");for(var O=0;O<=9;O++)a.realizacje[22].images.push("../img/sadyba-"+O+".jpg");for(var I=0;I<=24;I++)a.realizacje[23].images.push("../img/sandomierska-"+I+".jpg");for(var T=0;T<=12;T++)a.realizacje[24].images.push("../img/skorosze-"+T+".jpg");for(var S=0;S<=8;S++)a.realizacje[25].images.push("../img/targowek-"+S+".jpg");for(var M=0;M<=10;M++)a.realizacje[26].images.push("../img/verdis-"+M+".jpg");for(var C=0;C<=16;C++)a.realizacje[27].images.push("../img/woronicza-"+C+".jpg")}}}angular.module("prywatneModule").service("prywatneService",["$timeout","$interval","$state",a])},219:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(220);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var n=i(221);Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})});var l=i(223);Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})})},220:function(e,t,i){"use strict";angular.module("publiczneModule",[])},221:function(e,t,i){"use strict";function a(e,t){var i=this;this.publiczneService=e,this.realizacje=this.publiczneService.realizacje,this.$onInit=function(){this.publiczneService.initializeRealizacje(),this.publiczneService.firstInitRealizacje=!1},this.goTo=function(e){i.publiczneService.goTo(e)},this.goToDetail=function(e){t.currentDetail=e,console.log(e),i.publiczneService.goTo("detail")}}angular.module("publiczneModule").component("publiczne",{selector:"publiczne",template:i(222),controller:["publiczneService","detailService",a]})},222:function(e,t,i){e.exports='<main class="main-container">\n\t<nav class="main-container__nav">\n\t\t<ul class="nav__link-container">\n\t\t\t<li class="nav__link" ng-click="$ctrl.goTo(\'onas\')">O NAS</li>\n\t\t\t<li class="nav__link" ng-click="$ctrl.goTo(\'corobimy\')">CO ROBIMY</li>\n\t\t\t<li class="nav__link" ng-click="$ctrl.goTo(\'kontakt\')">KONTAKT</li>\n\t\t\t<li class="nav__link nav__link-facebook"><a href="https://www.facebook.com/Qbik-Design-318986181482264/" target="_blank"><img class="nav__link-image" src="'+i(43)+'" alt=""></a></li>\n\t\t</ul>\n\t</nav>\n\n\t<div class="onas-main-container__logo">\n\t\t\t<img class="onas-logo__logo-image" src="'+i(42)+'" alt="">\n\t</div>\n\n\t<h1 class="main-container__main-title">REALIZACJE PUBLICZNE</h1>\n\n\t<div class="grid">\n\t\t<div class="grid-item" ng-repeat="item in $ctrl.realizacje" ng-click="$ctrl.goToDetail(item)">\n\t\t<div class="grid-item-background" ng-style="{\'background-image\':\'url(\' + item.mainImage + \')\'}"></div>\n\t\t<h3 class="grid-item-title">{{item.title}}</h3>\n\t\t</div>\n\t</div>\n\n</main>'},223:function(e,t,i){"use strict";function a(e,t,i){var a=this;this.$state=i,this.firstInitRealizacje=!0,this.goTo=function(e){a.$state.go(e)},this.realizacje=[{mainImage:"../img/nask-27.jpg",title:"NASK",images:[],id:0},{mainImage:"../img/piekna-11.jpg",title:"Piękna",images:[],id:1},{mainImage:"../img/spokojnapubliczne-3.jpg",title:"Spokojna",images:[],id:2}],this.initializeRealizacje=function(){if(a.firstInitRealizacje){for(var e=0;e<=41;e++)a.realizacje[0].images.push("../img/nask-"+e+".jpg");for(var t=0;t<=12;t++)a.realizacje[1].images.push("../img/piekna-"+t+".jpg");for(var i=0;i<=12;i++)a.realizacje[2].images.push("../img/spokojnapubliczne-"+i+".jpg")}}}angular.module("publiczneModule").service("publiczneService",["$timeout","$interval","$state",a])},224:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(225);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var n=i(226);Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})});var l=i(228);Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})})},225:function(e,t,i){"use strict";angular.module("detailModule",[])},226:function(e,t,i){"use strict";(function(e){function t(t,i,a){var n=this;this.$state=a,this.prywatneService=i,this.detailService=t,this.currentDetail=null,this.keysDown=[],this.howmany=0,this.$onInit=function(){n.currentDetail=n.detailService.currentDetail,n.currentDetail||(n.currentDetail=n.prywatneService.realizacje[0])},this.goTo=function(e){n.detailService.goTo(e)},this.openGallery=function(t){console.log(t);var i=e(".detail-gallery"),a=e(".detail-gallery-item-"+t),n=e(".main-container"),l=e(".detail-gallery-caret-"+t);i.removeClass("detail-gallery_hidden"),i.addClass("detail-gallery_open"),a.removeClass("detail-gallery-item_hidden"),a.addClass("detail-gallery-item_current"),n.addClass("main_blurred"),l.removeClass("detail-gallery-caret_hidden"),l.addClass("detail-gallery-caret_current")},this.closeGallery=function(){var t=e(".detail-gallery"),i=e(".detail-gallery-item"),a=e(".main-container"),n=e(".detail-gallery-caret");t.removeClass("detail-gallery_open"),t.addClass("detail-gallery_hidden"),i.removeClass("detail-gallery-item_current"),i.addClass("detail-gallery-item_hidden"),a.removeClass("main_blurred"),n.removeClass("detail-gallery-caret_current"),n.addClass("detail-gallery-caret_hidden")},this.galleryGoLeft=function(t){console.log(t);var i=n.currentDetail.images.length,a=e(".detail-gallery-item-"+t),l=e(".detail-gallery-caret-"+t);if(l.removeClass("detail-gallery-caret_current"),l.addClass("detail-gallery-caret_hidden"),a.removeClass("detail-gallery-item_current"),a.addClass("detail-gallery-item_hidden"),0!=t){var o=e(".detail-gallery-item-"+(t-1)),r=e(".detail-gallery-caret-"+(t-1));r.removeClass("detail-gallery-caret_hidden"),r.addClass("detail-gallery-caret_current"),o.removeClass("detail-gallery-item_hidden"),o.addClass("detail-gallery-item_current")}else{var c=e(".detail-gallery-item-"+(i-1)),s=e(".detail-gallery-caret-"+(i-1));s.removeClass("detail-gallery-caret_hidden"),s.addClass("detail-gallery-caret_current"),c.removeClass("detail-gallery-item_hidden"),c.addClass("detail-gallery-item_current")}},this.galleryGoRight=function(t){console.log(t);var i=n.currentDetail.images.length,a=e(".detail-gallery-item-"+t),l=e(".detail-gallery-caret-"+t);if(l.removeClass("detail-gallery-caret_current"),l.addClass("detail-gallery-caret_hidden"),a.removeClass("detail-gallery-item_current"),a.addClass("detail-gallery-item_hidden"),t<i-1){var o=e(".detail-gallery-item-"+(Number(t)+1)),r=e(".detail-gallery-caret-"+(Number(t)+1));r.removeClass("detail-gallery-caret_hidden"),r.addClass("detail-gallery-caret_current"),o.removeClass("detail-gallery-item_hidden"),o.addClass("detail-gallery-item_current")}else{var c=e(".detail-gallery-item-0"),s=e(".detail-gallery-caret-0");s.removeClass("detail-gallery-caret_hidden"),s.addClass("detail-gallery-caret_current"),c.removeClass("detail-gallery-item_hidden"),c.addClass("detail-gallery-item_current")}}}angular.module("detailModule").component("detail",{selector:"detail",template:i(227),controller:["detailService","prywatneService","$state",t]})}).call(t,i(54))},227:function(e,t,i){e.exports='<main class="main-container">\n\n\t<nav class="main-container__nav">\n\t\t<ul class="nav__link-container">\n\t\t\t<li class="nav__link" ng-click="$ctrl.goTo(\'onas\')">O NAS</li>\n\t\t\t<li class="nav__link" ng-click="$ctrl.goTo(\'corobimy\')">CO ROBIMY</li>\n\t\t\t<li class="nav__link" ng-click="$ctrl.goTo(\'kontakt\')">KONTAKT</li>\n\t\t\t<li class="nav__link nav__link-facebook"><a href="https://www.facebook.com/Qbik-Design-318986181482264/" target="_blank"><img class="nav__link-image" src="'+i(43)+'" alt=""></a></li>\n\t\t</ul>\n\t</nav>\n\n\t<div class="onas-main-container__logo">\n\t\t\t<img class="onas-logo__logo-image" src="'+i(42)+'" alt="">\n\t</div>\n\n\t<h1 class="main-container__main-title">{{$ctrl.currentDetail.title}}</h1>\n\t\n\t<div class="detail-grid">\n\t\t<div class="detail-item" \n\t\tng-repeat="background in $ctrl.currentDetail.images track by $index" ng-style="{\'background-image\':\'url(\' + background + \')\'}"\n\t\tng-click="$ctrl.openGallery($index)"\n\t\t>\n\t\t\t\n\t\t</div>\n\t</div>\n</main>\n\n<div class="detail-gallery detail-gallery_hidden">\n\t<div class="detail-gallery-items-wrapper">\n\n\t\t<div class="detail-gallery-item detail-gallery-item-{{ $index }} detail-gallery-item_hidden" \n\t\tng-repeat="image in $ctrl.currentDetail.images track by $index">\n\n\t\t\t<img class="detail-gallery-item-image" ng-src="{{image}}" alt="">\n\t\t\t\n\t\t\t<div class="detail-gallery-caret detail-gallery-caret-{{ $index }} detail-gallery-left-wrapper detail-gallery-caret_hidden"\n\t\t\t  \t  ng-click="$ctrl.galleryGoLeft($index)">\n\t\t\t\t<i class="fa fa-caret-left" aria-hidden="true"></i>\n\t\t\t</div>\n\n\t\t\t<div class="detail-gallery-caret detail-gallery-caret-{{ $index }}  detail-gallery-right-wrapper detail-gallery-caret_hidden"\n\t\t\t\t  ng-click="$ctrl.galleryGoRight($index)">\n\t\t\t\t<i class="fa fa-caret-right" aria-hidden="true"></i>\n\t\t\t</div>\n\n\t\t</div>\n\t\t\n\n\t\t<div class="detail-gallery-close-wrapper" ng-click="$ctrl.closeGallery()">\n\t\t\t<i class="fa fa-times detail-gallery-close-icon" aria-hidden="true"></i>\n\t\t</div>\n\n\n\t</div>\n</div>\n'},228:function(e,t,i){"use strict";function a(e,t,i){var a=this;this.$state=i,this.goTo=function(e){a.$state.go(e)}}angular.module("detailModule").service("detailService",["$timeout","$interval","$state",a])},42:function(e,t,i){e.exports=i.p+"img/qbiklogo.svg"},43:function(e,t,i){e.exports=i.p+"img/facebook-icon.svg"}},[189]);