let promise = new Promise((resolve, reject)=>{
            http.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=recentchanges")
            .then((response) => {
                resolve(response);
            }, (e) => {
                reject(e);
            });
        });
        promise.then(result=>{ //
            console.log(result);
        });
         
        promise.then((result, test)=>{ 
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
        await jobSched.scheduleJob(utils.ad.getApplicationContext()); //will wait to finish before the next function
        await this.getData().then((result)=>{ //will wait to finish before the next function
          console.log(result);
        });
        this.printConsole();
      },
      getData(){
        return new Promise((resolve, reject)=>{
          http.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=recentchanges")
            .then((response) => {
              resolve(response); //resolve if ready
            }, (e) => {
              reject(e); //reject 
            });
          });
      },
      printConsole(){
        console.log("Nauna ako");
      }
    }
  }
