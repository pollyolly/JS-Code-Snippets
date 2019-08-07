===== Sample 1
function requestNewData(rawJson) {
    return new Promise(function(resolve, reject) {
        var promises = [];

        for (var i = 0; i < rawJson.length; i++) {
            ...

            promises.push(new Promise(function(resolve) {
                ...
            }));
        }

        resolve(Promise.all(promises));
    });
}

===== Sample2
// store urls to fetch in an array
const urls = [
  'https://dog.ceo/api/breeds/list',
  'https://dog.ceo/api/breeds/image/random'
];

// use map() to perform a fetch and handle the response for each url
Promise.all(urls.map(url =>
  fetch(url)
    .then(checkStatus)                 
    .then(parseJSON)
    .catch(logError)
))
.then(data => {
  // do something with the data
})

===== Sample 3

// p1, p2, p3 are Promises
Promise.all([p1, p2, p3])
  .then(([p1Result, p2Result, p3Result]) => {
    // This function is called when p1, p2 and p3 have all resolved.
    // The arguments are the resolved values.
  })
  
  const contentPromise = requestUser();
 const commentsPromise = requestComments();

 const combinedContent = Promise.all([contentPromise, commentsPromise])
   .then(([content, comments]) => {
     // content and comments have both finished loading.
   })
   
   ===== Sample 4
   
   let URL1 = "https://www.something.com"
let URL2 = "https://www.something1.com"
let URL3 = "https://www.something2.com"

const promise1 = axios.get(URL1);
const promise2 = axios.get(URL2);
const promise3 = axios.get(URL3);

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});

===== Sample 5

let promise1 =new Promise(function(resolve, reject) {
         let data = {test: { title:'Title one' }}
        resolve(data);
    });
let promise2 =new Promise(function(resolve, reject) {
        let data = {test: { title:'Title two' }}
        resolve(data);
    });

Promise.all([promise1, promise2]).then(function(values) {
  console.log(values);
});
