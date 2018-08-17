/// <reference path="knockout-3.4.2.debug.js" />
function InitialViewModel() {
    var viewModel = {
        firstName: ko.observable("Clive")
    };
    ko.applyBindings(viewModel);
}