/// <reference path="knockout-3.4.2.debug.js" />
$(function() {
    var viewModel = {
        firstName: ko.observable("Lee")
    };
    ko.applyBindings(viewModel);
})