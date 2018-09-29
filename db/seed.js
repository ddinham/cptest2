const db = require('../db')

const seedProducts = () => db.Promise.map([
  {Name: 'James',Age: 18, Email: "dddd7@gmail.com", Phone: 4167777777, Driving: "Yorkdale", Insurance: "Fidelity", DOB: 08082001, Password: 1234, id: 1},
  
], product => db.model('products').create(product));

const seedReviews = () => db.Promise.map([
 {rating: 1, review_text: "awful",product_id:5},
 {rating: 1, review_text: "if you have too much extra money ",product_id:1},
 {rating: 5, review_text: "the best!",product_id:2},
 {rating: 2, review_text: "waste of money",product_id:3},
 {rating: 3, review_text: "can be better",product_id:4},
 {rating: 3, review_text: "should be better",product_id:6},
 {rating: 4, review_text: "good price",product_id:7},
 {rating: 4, review_text: "just like description",product_id:1}
 ], review => db.model('reviews').create(review));

 db.didSync
   .then(() => db.sync({force: true}))
   .then(seedProducts)
   .then(products => console.log(`Seeded ${products.length} products OK`))
   .then(seedReviews)
   .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
   .catch(error => console.error(error))
   .finally(() => db.close())
