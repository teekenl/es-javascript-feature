const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const schema = require('./schema');
const port = process.env.PORT || 4000;

app.use('/graphql',graphqlHTTP({
   schema,
   graphiql:true
}));

const server = app.listen(port, function(err) {
    if(err) console.log(err);
    const host = server.address().address;
    console.log(`The server is listening at http://${host}:${port}`);
});
