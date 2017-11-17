const events = require("events");
import IjobDown = jobDown.main;
import EventEmitter = NodeJS.EventEmitter;

module.exports = class jobDown implements IjobDown{
    jobCount :number;
    afterJobs :()=>{};
    log :boolean;
    private Emitter :EventEmitter;
    constructor(jobCount :number, afterJobs :()=>{}){
        this.jobCount = jobCount
        this.afterJobs = afterJobs
        this.log = false

        this.Emitter = new events.EventEmitter()

        this.Emitter.on('down',()=>{
            this.jobCount = this.jobCount - 1;
            if(this.log){
                console.log("total: " + this.jobCount);
            }
            if(this.jobCount == 0){
                this.afterJobs();
            }
        })
    }
    oneDown(msg :string){
        if(this.log){
            console.log(msg)
        }
        this.Emitter.emit('down');
    }
}