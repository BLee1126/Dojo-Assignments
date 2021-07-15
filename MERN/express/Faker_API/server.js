const express = require('express');
const app = express();
const port = 8000;
const faker = require('faker')
app.listen(port, () => console.log(`Running on port ${port}!!` ));

class User {
    constructor(){
        this._id = faker.finance.account;
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company{
    constructor(){
        this._id = faker.company.companySuffix();
        this.name = faker.company.companyName();
        this.address = {
            'street': faker.address.streetAddress(),
            'city': faker.address.cityName(),
            'state': faker.address.state(),
            'zipCode': faker.address.zipCode(),
            'country': faker.address.country()
        }
    }
}

app.get('/', (req, res) => {
    res = (console.log('hello from express!'))
});

app.get('/api/users/new', (req,res) => {
    res.json(new User)
});

app.get('/api/companies/new', (req,res) => {
    res.json(new Company)
});

app.get('/api/user/company', (req,res) => {
    res.json({'user': new User, 'company':new Company})
});