const fetch = require('node-fetch');
const util = require('util');

const parseXML = util.promisify(require('xml2js').parseString);

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} = require('graphql');

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: '...',
    fields: () => ({
        name: {
            type: GraphQLString
        }
    })
});

function translate(lang, str) {
    // Google Translate API is a paid (but dirt cheap) service. This is my key
    // and will be disabled by the time the video is out. To generate your own,
    // go here: https://cloud.google.com/translate/v2/getting_started
    const apiKey =
        'AIzaSyBN-bwtos8sKU6X84wkrdjtCF7uzng6kgQ'
    const url =
        'https://www.googleapis.com' +
        '/language/translate/v2' +
        '?key=' + apiKey +
        '&source=en' +
        '&target=' + lang +
        '&q=' + encodeURIComponent(str)
    return fetch(url)
        .then(response => response.json())
        .then(parsedResponse =>
            parsedResponse
                .data
                .translations[0]
                .translatedText
        )
}

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        description: '...',
        fields: () => ({
            author: {
                type: AuthorType,
                args: {
                    id: {type: {GraphQLInt}}
                },
                resolve: (root, args) => fetch(`https://www.goodreads.com/author/show.xml?id=${args.id}&key=risKm8wwXsIcyEiTktvA`
                ).then(response=>response.text())
                    .then(parseXML)
                    .catch(err=>console.log(err))

            }
        })
    })

});
