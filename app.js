const express = require('express');
const app = express();
const port = 3001;

const listOfContacts = [
    {
        firstName: 'Mookie',
        lastName: 'Betts',
        city: 'Boston',
        state: 'MA',
        occupation: 'professional baseball player'
    },
    {
        firstName: 'Tyrion',
        lastName: 'Lanister',
        city: 'King\'s Landing',
        state: 'Westeros',
        occupation: 'hand of the queen'
    },
    {
        firstName: 'Elizabeth',
        lastName: 'Warren',
        city: 'Boston',
        state: 'MA',
        occupation: 'U.S. senator'
    },
    {
        firstName: 'Ayanna',
        lastName: 'Pressley',
        city: 'Boston',
        state: 'MA',
        occupation: 'U.S. congresswoman'
    },
    {
        firstName: 'Luke',
        lastName: 'Skywalker',
        city: 'Anchorhead',
        state: 'Tatooine',
        occupation: 'jedi knight'
    },
    {
        firstName: 'Leia',
        lastName: 'Organa',
        city: 'Imperial City',
        state: 'Alderaan',
        occupation: 'bad ass rebel princess'
    },
    {
        firstName: 'Jason',
        lastName: 'Tatum',
        city: 'Boston',
        state: 'MA',
        occupation: 'professional basketball player'
    }
];

app.use('/', express.static('views')); 

app.get('/', (req, res) => {
    res.render('contacts.ejs', { contacts: listOfContacts });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));