
# Angular-UI-Router

***
## What is UI Route
ui-router is a 3rd-party module and is very powerful. It supports everything the normal ng-Route can do as well as many extra functions.

## Why UI Route

Angularjs provides its own module for routing named as 'ng-Route'.Then question arises why 'UI-Route'?Well. ng-Route provides routing but there are certain boundaries where it fails.
Like if user needs 'multiple named route' or 'nested route'.
### Multile views
![Multiple Views](https://i.stack.imgur.com/qyYgX.jpg)
### Nested views
![Nested Views](https://i.stack.imgur.com/oJcUe.jpg)


There are certain other benefits of UI route that I will describe later.

## Difference between UI Route and ng-Route
   There are following differences between ui-route and ng-route
1. Module name for ui route is 'ui-route' while ng route is 'ng-Route'.
1. ui-route uses $stateProvider and $urlRouteProvider as route provider while ng-route uses $routeProvider.
1. ui-route uses 'ui-view' for view while ng-route uses 'ng-view'.
1. It uses named template view while its not provided in ng-route.
1. For link, ui-route uses 'ui-sref' but ng-route uses 'href'.
1. In ui-route, you can get parameter using '$stateParams.id' while in ng-route ,you have to use '$routeParams.id'

# code explanation
 The routing of an angular app is written in config page.The whole code is shown below
![](https://github.com/rghvndr99/Angular-UI-Router/blob/master/configuration.PNG)  

UI-routeris configured with following steps:  

1.Dependency Injection  

   To use ui-route, Its dependency should be included while app is bootstrapped.  

![](https://github.com/rghvndr99/Angular-UI-Router/blob/master/IncludeDependency.PNG)  

2.Default route  

If there is not route is found or wrong path is typed then default route takes place  

![](https://github.com/rghvndr99/Angular-UI-Router/blob/master/default%20route.PNG)  

3.Nested Route
In this app, the home tab has two innerviews  
 a)list  
 b)paragraph  

So for sub-state, the path will be like 'parentstate.childstate'.As example for list sublist,the state will be 'home.list'.But notice that only one state will render at a time.  

![](https://github.com/rghvndr99/Angular-UI-Router/blob/master/nested%20routing.PNG)  

4.Named Route
In this app, the aboutus tab has two inner but named views  
 
 a)columnOnefor table  
 b)columnTwo for paragraph  
 
So for sub-state, the path will be like 'namedView@parentstate'.As example for table sublist,the state will be 'columnOne@aboutus'.But notice that both state will render at a time.  

![](https://github.com/rghvndr99/Angular-UI-Router/blob/master/named%20Routing.PNG)
