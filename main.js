// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
findLikes();
// Your JavaScript code goes here!
function findLikes() {
const selectLike = document.querySelector(".like");
selectLike.forEach((singularLike) => {
  singularLike.addEventListener("click", event => {
  mimicServerCall()
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    const nope = document.querySelector(".hidden");
    document.remove(nope)
  })
})
})
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
