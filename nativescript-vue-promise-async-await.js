let promise = new Promise((resolve, reject)=>{
            http.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=recentchanges")
            .then((response) => {
                resolve(response);
            }, (e) => {
                reject(e);
            });
        });
        promise.then(result=>{
            console.log(result);
        });
        
    =========
    
      export default {
    data() {
      return {
        data:''
      }
    },
    methods: {
      async fetchData(){
        await jobSched.scheduleJob(utils.ad.getApplicationContext());
        await this.getData().then((result)=>{
          console.log(result);
        });
        this.printConsole();
      },
      getData(){
        return new Promise((resolve, reject)=>{
          http.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=recentchanges")
            .then((response) => {
              resolve(response);
            }, (e) => {
              reject(e);
            });
          });
      },
      printConsole(){
        console.log("Nauna ako");
      }
    }
  }
