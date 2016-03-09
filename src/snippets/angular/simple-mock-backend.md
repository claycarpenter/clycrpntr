---
title: Creating a Mock Backend in Angular
tags: javascript, angular
template: /base.jade
category: snippet
---

While its common to develop Angular apps against live backend services, it's also possible to use mocked services running alongside the Angular codebase, within the browser. Using mock services has a number of potential advantages, including:

* If you're not responsible for building the API, you can build out the client without having to wait for the API to be completed (or bug free, as it sometimes happens).
* If you're building the API yourself, using mock services allows you to focus on the client-side development and the client's needs for the services without getting bogged down in the backend implementation details.
* You can more rapidly develop proofs-of-concept without worrying about backend implementations.
* Building the mock service helps you document your assumptions about the API.
* The mock service can serve as a foundation for unit testing other Angular components that interact with the service.

Throughout this document we're going to be using the `$httpBackend` service provided by the [ngMockE2E module](https://docs.angularjs.org/api/ngMockE2E/service/$httpBackend). Note that this is different from the identically named service provided by the similarly named [ngMock module](https://docs.angularjs.org/api/ngMock/service/$httpBackend). The two `$httpBackend` services have very similar APIs, but the ngMock version is meant for unit testing and therefore has extra functionality to enforce expectations and verify calls. The ngMockE2E version, which we'll be using, is the one suitable for creating mock backend services that support Angular apps under development.

The `$httpBackend` provides a mock endpoint for use with ngResource (`$resource`) resources. It's capable of intercepting all HTTP methods--GET, POST, DELETE, etc.--and responding to those requests with specific handlers. It effectively replaces `$http` in the Angular service stack. Because of this, it also has pass-through functionality, so non-service requests (like retrieving templates) can pass through to the server. This makes it possible to build a pretty complete Angular app, with full service interaction, on top of a static server.

For this tutorial, we'll set our sights a bit lower than building a complete Angular app, and just demonstrate how to provide simple CRUD functionality in a mock backend. Specifically, we'll be providing these features:

* List - `Resource.query()`
* Create - `Resource.save()` or `resource.$save()`
* Get - `Resource.get()`
* Update - `Resource.update()` or `resource.$update()`
* Delete/remove - `Resource.remove()` or `resource.$remove()`

All of the code shown in this example, along with a working demo, is available in [this Plunker](http://plnkr.co/edit/vzQ7sc5iDupmRGS4zylf).

With all of that out of the way, let's get started. We'll begin with the boilerplate, declaring our new app module and requiring the dependencies for this project:

```
var app = angular.module('app', [
  'ngResource',
  'ngMockE2E'  
]);
```

Next, we'll define the Contact resource that will provide the interface between the rest of our Angular components and the mock backend:

```
app.factory('Contact', ['$resource', function($resource) {
  return $resource(
    '/contacts/:id',
    {id: '@id'},
    {
      'update': {
        method: 'PUT'
      }
    }
  );
}]);
```

With the Contact resource defined, we can define the mock backend. The `$httpBackend` service is configured through a module `run` block. In our case, we'll add this to the run block of `app` and go ahead and define a starting set of contacts:

```
app.run(['$httpBackend', function($httpBackend) {
  contacts = [
    {
      id: 1,
      name: 'Ada Lovelace',
      phone: '8445551815'
    },
    {
      id: 2,
      name: 'Grace Hopper',
      phone: '8445551906'
    },
    {
      id: 3,
      name: 'Charles Babbage',
      phone: '8445556433'
    }
  ];

  // $httpBackend interactions are defined here...
}]);
```

The `contacts` array will be shared by all operations against the mock backend--it serves as our central database or data store. This is just one way to create a mock data store. Other methods, such as an associative array using the resource IDs as keys, would also work well. Additionally, for simplicity and clarity we've implemented some basic array find and manipulation methods. A more robust solution would use a JS utility library like [Underscore.js](http://underscorejs.org/) or [lodash](https://lodash.com/).

The easiest interaction we can mock is the contacts list. This responds to a GET request to the url `/contacts` and returns the entire contacts list:

```
// Query; returns all contacts.
$httpBackend.whenGET('/contacts').respond(contacts);
```

Next, we implement support for the `Contact.save` method. That ngResource method will send a POST with contact data, which the backend will turn into a new contact record:

```
// Save; create a new contact.
$httpBackend.whenPOST('/contacts').respond(function(method, url, data) {
  var newContact = angular.fromJson(data);
  contacts.push(newContact);

  return [200, newContact, {}];
});
```

Note that we have to convert the serialized contact data back into a JS object, even though our client Angular components will be provided the values as JS objects and the call never needs to be serialized to go over the wire. Once the new contact is created, storing it is as easy as pushing it into the `contacts` array.

Getting a single contact is a little more complicated. We'll have to do two things: parse the ID from the request URL, and then look up the associated contact by its ID. The implementation looks like this:

```
// Get; return a single contact.
$httpBackend.whenGET(/\/contacts\/(\d+)/, undefined, ['id']).respond(function(method, url, data, headers, params) {
  var contact = findContactById(params.id);

  if (contact == null) {
    return [404, undefined, {}];
  }

  return [200, contact, {}];
});
```

We use a regex to match the get URL, collecting the ID portion in a match group. The third argument to `whenGET` is `['id']`, which tells Angular to store the first matching group in the `'id'` property of the `params` argument. We'll grab that value and send it along to `findContactById`, which will handle looking up the contact for us. Finally, we return the contact if it's found; if not, we return a simple 404 response.

The `findContactById` implementation handles converting the ID value to a number, and then filters the array to find a match before returning that match:

```
function findContactById(id) {
  // Convert id to a number.
  var contactId = Number(id);

  var matches = contacts.filter(function(contact) {
    return contact.id === contactId;
  });

  var contact = matches.shift();

  return contact;
}
```

Support for the `update` method looks very similar to the GET support, with the key different being how we update the contact data. Here is the implementation:

```
// Update; change details for an existing contact.
$httpBackend.whenPUT(/\/contacts\/(\d+)/, undefined, undefined, ['id']).respond(function(method, url, data, headers, params) {
  var contact = findContactById(params.id),
      parsedData = angular.fromJson(data);

  if (contact == null) {
    return [404, undefined, {}];
  }

  angular.extend(contact, parsedData);

  return [200, contact, {}];
});
```

After successfully finding the contact, we use `angular.extend` to copy properties from the parsedData (containing the contact updates) into the _existing_ contact model. This allows us to update the contact model without destroying any references to it that may be held elsewhere in the code, including in the contacts array itself.

Finally, we have DELETE support. Again, like GET and PUT, delete support relies on the `findContactById` function to look up the contact. Once the contact model is found, we look up its position in the array and then use `array#splice` to remove the contact model:

```
// Delete; remove existing contact.
$httpBackend.whenDELETE(/\/contacts\/(\d+)/, undefined, ['id']).respond(function(method, url, data, headers, params) {
  var contact = findContactById(params.id);

  if (contact == null) {
    return [404, undefined, {}];
  }

  // Replace contacts array with filtered results, removing deleted contact.
  contacts.splice(contacts.indexOf(contact), 1);

  return [200, undefined, {}];
});
```

With the backend service and resource defined, we can now run the whole thing through its paces. The page's sole controller is a simple affair that just executes each available service operation once. For the list and get operations, the results are presented in the view. An update operation adds Grace Hopper's rank to her contact name. The create operation adds Gloria Gordon Bolotsky to the roster of contacts, while the delete operation removes Charles Babbage. In the cases of the update, create, and delete operations, a contact list update function responds to the successful resolution of the operation's promise. This is the full code for the controller:

```
app.controller('MainCtrl', function($scope, Contact) {
  //List
  $scope.contacts = Contact.query();

  // Get
  $scope.ada = Contact.get({id: 1});

  // Update
  Contact.get({id: 2}).$promise
    .then(function(contact2) {
      contact2.name = 'Rear Admiral Grace Hopper';
      return contact2.$update().$promise;
    })
    .then(updateContactsList);

  // Create
  var newContact = new Contact({
    name: 'Gloria Gordon Bolotsky',
    phone: '8445556433'
  });
  newContact.$save()
    .then(updateContactsList);

  // Delete
  Contact.remove({id: 3}).$promise
    .then(updateContactsList);

  function updateContactsList() {
    // Refresh contacts list
    $scope.contacts = Contact.query();
  }
});
```

Lastly, we'll build our very simple view for this project:

```
<!DOCTYPE html>
<html ng-app="app">

  <head>
    <meta charset="utf-8" />
    <title>AngularJS Plunker</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-resource.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-mocks.js"></script>
    <script>document.write('<base href="' + document.location + '" />');</script>
    <link rel="stylesheet" href="style.css" />
    <script src="app.js"></script>
  </head>

  <body ng-controller="MainCtrl">
    <p>All contacts:</p>
    <ul>
      <li ng-repeat="contact in contacts">{{ contact.name }}</li>
    </ul>

    <p>Contact 1: {{ ada.name }}</p>
  </body>

</html>
```

What that gives us is a barebones presentation of the contacts retrieved from the contact service, as well as a single contact (plucked from the contacts via `get()`). The page also references the required scripts: angular itself, ngResource, and ngMockE2E.

That's it! It's just a start, but it should serve as a good foundation for mocking the type of CRUD operations that are at the heart of many modern web apps.
