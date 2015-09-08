/**
 * One class.
 * Interface dependency.
 * No interface definition.
 */

namespace1.mycomponent = function(par) {
    namespace1.mycomponent.initializeBase(this, [par]);
    this.$5 = new namespace1.myOtherComponent();
    this.$5.set_isBichromatic(true);
    this.$5.render();
    this.$8();
}
namespace1.mycomponent.prototype = {
    $5: null,
    get_controlRunning: function() {
        if (this.$5.get_state() === 0) {
            return true;
        }
        return false;
    },
    get_$6: function() {
        return this.get_par().get_element() === 2 || this.get_par().get_another() === 3;
    },
    onElementChanged: function() {
        namespace1.mycomponent.callBaseMethod(this, 'onEvent');
        this.$7();
    },
    startControl: function() {
        this.$5.start();
    },
    stopControl: function() {
        this.$5.stop();
    },
    $7: function() {
        if (this.get_$6()) {
            this.startControl();
        } else {
            this.stopControl();
        }
    },
    $8: function() {
        document.body.appendChild(this.$5.get_element());
    }
}
namespace1.mycomponent.registerClass('namespace1.mycomponent', namespace1.anotherComponent);
