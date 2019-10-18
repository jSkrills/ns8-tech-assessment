# Technical Assessment

## Overview
I connected this api to mLab the username is **theOriginalUser** and password is **openSesam3**. That should all fine in the app.ts file in the mongoUrl. Please let me know if you have any connection issues there. I am also attempting to share my Postman collection that I used to test the api for easier testing, also let me know if you have trouble with that.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/23618d327166f600c168)

## Assumptions / Future considerations
-I split out the models and controllers because that's how it would likely be separated in a production environment
  -I would have spit up the routes too but it felt like overkill for one endpoint that I was using to scaffold a user.
-On getitng events by date I chose to go the route of if it's provided as a req then that's what the client is wanting. This is just a personal preference thing for me, I like things written like that. I prefer to be as efficient as possible and not have a bunch of endpoints that are basically doing the same thing.
-If I was making an api in real life it would also be accompanied by automated tests before it was considered complete.

