const express = require("express");

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/add-car-details', (req, res, next)=>{
    res.send(`
        <h1>Car-details</h1>
        <form action='/car-list' method="POST">
            <label>Car name</label>
            <input type="text" name="carName" required>
            <label>Engine size</label>
            <input type="text" name="engine" required>
            <label>Mileage</label>
            <input type="text" name="mileage" required>
            <label>Year of production</label>
            <input type="text" name="year" required>
            <label>Origin</label>
            <input type="text" name="origin" required>
            <input type="submit" value="Enter"/>
        </form>
        `)
})

app.use('/car-list', (req, res, next)=>{
    console.log(req.body)
    /* res.send(`
        <h1>Car List</h1>
        <h2>911</h2>
        <h2>Camry</h2>
        <h2>Malibu</h2>
        <h2>Mustang</h2>
        <h2>Stinger</h2>
        `) */
        res.redirect('/')
})

app.use('/', (req, res, next)=>{
    res.send(`<h1>Caravan</h1>`)
    next()
})

const PORT = process.env.PORT || 5500

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})