# slaveholder

用来记录工作的小库。

基本API：
```
export interface main{
    jobCount :number;
    log :boolean;
    constructor:(jobCount :number,afterJobs :()=>{});
    afterJobs :()=>{};
    oneDown(msg :string):void;
}
```

1. `oneDown` will make `jobCount--`.
2. when `jobCount == 0` then `afterJobs` will be execed.
