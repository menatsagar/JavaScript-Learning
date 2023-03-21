/* A promise is an object that returns a value which you hope to receive
 in the future but not right away or immediately. It provides a way to handle asynchronous
  operations such as fetching data from an API.    */

/* 
  For example, Imagine you are at your near town restaurant and you order your favourite meal. Once you are done 
  with your payment,
   most likely you don’t get the meal right away instead, you get a receipt which is a promise
    by the restaurant that once the meal is ready, you will get it. After 15 minutes or whatever amount
     of minutes are up and the meal is ready, you show the receipt and you get your meal. In the bizarre world, 
     you also might be rejected maybe because they’ve just realized they have no more of your ordered meal.
      I know it sounds unrealistic but for the sake of example just go with it. The whole point of this
       example is that the receipt is a promise that you’ll get the meal eventually or of course if they 
       can not provide it, they have to reject it and in a non-JavaScript world, you will get a refund.

  In the JavaScript world, the common example of using promises is going to be “HTTP request” where
   you set up the request and of course, you don’t get a response right away because it is an
    asynchronous operation. Only when the server responds, do you either get the data that you’re 
    looking for or you get an error because maybe the URL is wrong..
  
  You can achieve the same using callbacks but the primary purpose of using promises over callback
   functions is to avoid callback hell. Also, promise allows us to write sync code in a synchronous fashion.
  
  Since we can have async/await in JavaScript, a common practice is to use promises with async/await
   because async/await provide a cleaner syntax. */

const promise = new Promise((resolve, reject)=>{
})

const promise2 = new Promise((resolve, reject)=>{
})
console.log(promise2)

const promise3= new Promise((resolve, reject)=>{
    resolve()
})
console.log(promise3)

const promise4 = new Promise((resolve, reject)=>{
    resolve("Hello good people")
})
console.log(promise4)

const promise5 = new Promise((resolve, reject)=>{
    // resolve("Hello good people");
    reject ("There was an error in your application")
})
console.log(promise5);

const promise6 = new Promise((resolve, reject)=>{
    resolve("Hello good people");
})
console.log(promise6)
promise6.then(data=> console.log(data))


const promise7 = new Promise((resolve, reject)=>{
    // resolve("Hello good people");
    reject("There was an error in your application")
})
console.log(promise7)
promise7
.then(data=> console.log(data))
.catch((err)=> console.log(err))


const value = 2;
const promise8 = new Promise((resolve, reject) => {4
    const random = Math.floor(Math.random() * 3);
    console.log(random)
    if(random == value){
         resolve("You guessed the correct number");
    }else{
         reject("Wrong number ");
    }
});
console.log(promise8);
promise8.then(data=> console.log(data)
).catch((err)=> console.log(err))


