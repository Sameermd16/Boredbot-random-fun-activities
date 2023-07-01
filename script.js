const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
            document.getElementById('h4').textContent = data.activity
        })
})


// console.log('The first console log')

// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => response.json())  //change the body of response from json to javascript
//     .then(data => {
//         console.log(data)
//         document.getElementById('div').innerHTML = `<img src="${data.message}" />`
//     })

// console.log("The second console log")

// fetch("https://apis.scrimba.com/bored/api/activity")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         document.getElementById('div').innerHTML = `<p>${data.activity}</p>`
//     })
