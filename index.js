const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/youtube-video', { useNewUrlParser: true })
    .then(() => console.log('Mongo started')
    )
    .catch(e => console.log(e))

require('./person.model')
const Person = mongoose.model('persons')

const person = new Person({
    name: 'Narek Grigoryan',
    age: 19,
    isMarried: true,
    phone: [093204507]
})

// http://mongoosejs.com/docs/queries.html

// Person.find({name: {$in: ['Person1', 'Person2', 'Person3']}})
// .sort('age')
// .limit(2)
// .then(persons => {
//     console.log(JSON.stringify(persons, null, 2))
// })

Person.find({name: 'Narek Grigoryan'})
.sort('age')
.then(persons => {
    console.log(JSON.stringify(persons, null, 2))
    const p = persons[0]

  //  Person.find({_id: p.id}).deleteOne().then(_ => console.log('removed'))
})
