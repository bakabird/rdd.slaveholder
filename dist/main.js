var events = require("events");
var EventEmitter = NodeJS.EventEmitter;
module.exports = /** @class */ (function () {
    function slaverholder(jobCount, afterJobs) {
        var _this = this;
        this.jobCount = jobCount;
        this.afterJobs = afterJobs;
        this.log = false;
        this.Emitter = new events.EventEmitter();
        this.Emitter.on('down', function () {
            _this.jobCount = _this.jobCount - 1;
            if (_this.log) {
                console.log("total: " + _this.jobCount);
            }
            if (_this.jobCount == 0) {
                _this.afterJobs();
            }
        });
    }
    slaverholder.prototype.oneDown = function (msg) {
        if (this.log) {
            console.log(msg);
        }
        this.Emitter.emit('down');
    };
    return slaverholder;
}());

//# sourceMappingURL=../maps/main.js.map
