const express = require('express')
const res = require('express/lib/response')
const app = express()
const {products} = require('./data')


app.get('/', (req, res) => {
    res.send('<h1> Home Page </h1><a href="/api/products">Products</a>')
    // res.json(products)
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product
        return {id, name, image}
    })
    res.json(newProducts)
})

// app.get('/api/products/1', (req, res) => {
//     const singleProduct = products.find((product) => product.id === 1)
//     res.json(singleProduct)
// })


//making use of route parameters to easily access the data via their ids
app.get('/api/products/:productID', (req, res) => {
    const {productID} = req.params

    const singleProduct = products.find((product) => product.id === Number(productID))
    if (!singleProduct){
          return res.status(404).send('Product Unavailable!')
    }
    res.json(singleProduct)
})


app.get('/api/v1/query', (req, res) => {
    const {search, limit} = req.query
    let sortedProducts = [...products]

    if (search){
    sortedProducts = sortedProducts.filter((product) => {
        return product.name.startsWith(search)
    }) }
    
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        return res.status(200).json({success:true, data: []})
    }
    res.status(200).json(sortedProducts)
}) 


app.listen(5000, ()=> {
    console.log('server aint listening on 5000')
})