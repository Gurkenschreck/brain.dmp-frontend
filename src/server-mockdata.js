
var DUMPS = [{
    "id": "1",
    "title": "Somecool note about dolphins",
    "content": "Dolphins are pretty cool m8.",
    "text": "More Information about it.",
    "medianRating": "4.3",
    "authorName": "Ken Kenson",
    "createdOn": "24.12.2016",
    "links": [{
        "rel": "self",
        "href": "/api/v1/dumps/1"
    }, {
        "rel": "author",
        "href": "/api/v1/posters/1"
    }, {
        "rel": "comments",
        "href": "/api/v1/dumps/1/comments"
    }, {
        "rel": "ratings",
        "href": "/api/v1/dumps/1/ratings"
    }, {
        "rel": "favorizations",
        "href": "/api/v1/dumps/1/favorizations"
    }]
}];

var QUESTIONS = [{
    "id": "1",
    "title": "What are dolphins really good at?",
    "text": "I know dolphins are great and all, but what are they good at? More Information about the question",
    "medianRating": "4.3",
    "authorName": "Brock Brockson",
    "createdOn": "24.12.2016",
    "links": [{
        "rel": "self",
        "href": "/api/v1/questions/1"
    }, {
        "rel": "author",
        "href": "/api/v1/posters/2"
    }, {
        "rel": "answers",
        "href": "/api/v1/questions/1/answers"
    }, {
        "rel": "ratings",
        "href": "/api/v1/questions/1/ratings"
    }, {
        "rel": "favorizations",
        "href": "/api/v1/questions/1/favorizations"
    }]
}];

var POSTERS = [{
    "id": "1",
    "username": "Lakupapa",
    "name": "Ken Kenson",
    "email": "lakupapa@mail.tld",
    "joinedOn": "10.12.2016",
    "lastActivity": '28.12.2016',
    "links": [{
        "rel": "self",
        "href": "/api/v1/posters/1"
    }, {
        "rel": "dumps",
        "href": "/api/v1/posters/2/dumps"
    }, {
        "rel": "followers",
        "href": "/api/v1/posters/1/followers"
    }]
}];

module.exports = {
    DUMPS: DUMPS,
    QUESTIONS: QUESTIONS,
    POSTERS: POSTERS
}