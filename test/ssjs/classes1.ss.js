/**
 * One class.
 * Interface dependency.
 * No interface definition.
 */

DN.TrailingDotsBusyStateVisualizer = function(busyState) {
    DN.TrailingDotsBusyStateVisualizer.initializeBase(this, [busyState]);
    this.$5 = new DN.TrailingDotsBusyIndicatorControl();
    this.$5.set_isBichromatic(true);
    this.$5.render();
    this.$8();
}
DN.TrailingDotsBusyStateVisualizer.prototype = {
    $5: null,
    get_controlRunning: function() {
        if (this.$5.get_state() === 0) {
            return true;
        }
        return false;
    },
    get_$6: function() {
        return this.get_busyState().get_busyPhase() === 2 || this.get_busyState().get_busyPhase() === 3;
    },
    onBusyPhaseChanged: function() {
        DN.TrailingDotsBusyStateVisualizer.callBaseMethod(this, 'onBusyPhaseChanged');
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
DN.TrailingDotsBusyStateVisualizer.registerClass('DN.TrailingDotsBusyStateVisualizer', DN.BusyStateVisualizer);
