const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = require('express');
const schema = require('./schema');

app.use('/graphql',graphqlHTTP({
   schema,
   graphiql:true
}));

const server = app.listen(4000, function(err) {
    if(err) console.log(err);

    console.log(`The server is listening at http://${host}:${port}`);
});
