define([
    "dojo/_base/declare",
    "dijit/form/ValidationTextBox"
], function (declare, ValidationTextBox) {
    return declare("ngw/form/KeynameTextBox", [ValidationTextBox], {

        preamble: function (kwArgs) {
            kwArgs.regExp = '[A-z][A-z0-9_\\-]*';
        },

        _getValueAttr: function () {
            var val = this.inherited(arguments);
            if (val == '') { val = null };
            return val;
        }
    });
});