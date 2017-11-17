declare namespace jobDown{
    export interface main{
        jobCount :number;
        log :boolean;
        afterJobs :()=>{};
        oneDown(msg :string):void;
    }
}