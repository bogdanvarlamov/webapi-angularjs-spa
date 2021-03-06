﻿app.factory('locationSvc', ['$resource', 'serviceHelperSvc', function ($resource, serviceHelper) {
    var Location = serviceHelper.Location;

    return {
        addLocation: function (location) {
            //$resource.save will immediately return an object which will have $promise property. 
            //This property will get resolved with values, once the Server returns response
            return Location.save(location).$promise;
        },
        editLocation: function (location) {
            var updation = Location.update(location);
            return updation.$promise;
        },
        getLocation: function (id) {
            return Location.get({ locationId: id });
        },
        getLocations: function () {
            return Location.query();
        },
        deleteLocation: function (locationId) {
            return Location.delete({ locationId: locationId }).$promise;
        }
    };
}]);