# Api v1

> Note: this web api interface specification is **not** final. Things may change.


This specification describes the api interfaces the frontend consumes. You can find more
information about the models in *models_v1.js*.

## Overview

This section provides an overview of all required web interfaces. For more information
take a look into the *Detailed Overview* section in this article.

Interfaces marked with * may not be needed.
```js
// News page
* GET     /api/v1/news                    /* Get all news */

// Dumps page and dumps interaction
GET     /api/v1/dumps                   /* Fetch all dumps */
POST    /api/v1/dumps                   /* Create a new dump */

GET     /api/v1/dumps/:dId              /* Fetch a specific dump */
PATCH   /api/v1/dumps/:dId              /* Edit the specific dump */
DELETE  /api/v1/dumps/:dId              /* Delete the specific dump */

* GET   /api/v1/dumps/:dId/comments     /* Get all comments on a dump */
POST    /api/v1/dumps/:dId/comments     /* Create a new comment */
* GET   /api/v1/dumps/:dId/ratings      /* Get all ratings */
POST    /api/v1/dumps/:dId/ratings      /* Rate the dump */
* GET   /api/v1/dumps/:dId/favorizations/* Get all posters who favorized the dump */
POST    /api/v1/dumps/:dId/favorizations/* Favorize the dump */

// Questions page and questions interaction
GET     /api/v1/questions               /* Fetch all questions */
POST    /api/v1/questions               /* Create a new question */

GET     /api/v1/questions/:qId          /* Fetch a specific question */
PATCH   /api/v1/questions/:qId          /* Update a specific question */
DELETE  /api/v1/questions/:qId          /* Delete the question */

* GET   /api/v1/questions/:dId/comments     /* Get all comments on a dump */
POST    /api/v1/questions/:dId/comments     /* Create a new comment */
* GET   /api/v1/questions/:dId/ratings      /* Get all relevancy ratings */
POST    /api/v1/questions/:dId/ratings      /* Rate the relevancy of a question */
* GET   /api/v1/questions/:dId/favorizations/* Get all posters who favorized the dump */
POST    /api/v1/questions/:dId/favorizations/* Favorize the dump */
* GET   /api/v1/questions/:dId/dumps        /* Get all dumps which are linked to this question */
POST    /api/v1/questions/:dId/dumps        /* Link a new dump */


// Posters page and posters interaction
GET     /api/v1/posters                 /* Fetch all posters (user accounts) */

GET     /api/v1/posters/:pId            /* Fetch a specific poster */

GET     /api/v1/posters/:pId/dumps      /* Fetch all dumps of this poster */
* GET   /api/v1/posters/:pId/followers  /* Fetch all followers */
POST    /api/v1/posters/:pId/followers  /* Follow this poster */
```

## Detailed Overvies

TODO: provide details

HTTP-Verb | Interface | Sent | Expected | Purpose
--- | --- | --- | --- | --- 
GET | /api/v1/news | - | ```[{ /* insert news model*/}]``` | -