const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send(`<h1>99 Bottles of beer on the wall</h1>
    <h2> <a href="/98">take one down, pass it around</a>:)</h2> 
    `)
})

const takeOneDown = function(bottlesNum){
    // if (bottlesNum > 0){
    return bottlesNum - 1
    // } else if (bottlesNum === 0) {
    // return bottlesNum = 98 
    // }
}

console.log("this is fnc", takeOneDown(0))

app.get('/:number_of_bottles', (req, res) => {
    // const minusBottles = req.params.number_of_bottles - 1
    let bottlesNumNow = req.params.number_of_bottles
    let minusBottle = takeOneDown(bottlesNumNow)
    // console.log("thi is b# -1", (bottlesNum -1))
    // console.log("thi is - b", minusBottle)
    if (bottlesNumNow > 0 ){
        res.send(` <h1>${bottlesNumNow} Bottles of beer left on the wall!</h1>
        <h2><a href="/${minusBottle}">take one down, pass it around</a> :)</h2> 
        `)
     } else if (bottlesNumNow < 1){
        res.send(` 
        <h1> You are out of beer! :(</h1>
        <h2><a href="/">click here to restock on beer</a></h2> 
        `)
    }
    // if (number_of_bottles){
    //    let minusbottles = req.params.number_of_bottles =- 1
    //     return `<h1> this is minus b ${minusbottles}<h1>`
    // }

})


app.listen(PORT, () => {
    console.log(`listing on port: ${PORT}`)
})
