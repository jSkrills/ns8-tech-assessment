# Technical Assessment

## Overview
I connected this api to a sandbox db within mLab. The credentials and url to access that db should be in the app.ts. If for some reason you want to get into my mLab account to veiw something just let me know and I will provide that also. I am also attempting to share my Postman collection that I used to test the api below. If you are having access problems with either of these please reach out to me. Other than that you should be able to start things up by just running: "npm run dev" at the project root.

[![Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/23618d327166f600c168)

### Assumptions / Future considerations
- I split out the models and controllers because that's how it would likely be separated in a production environment.
  - I would have spit up the routes too but it felt like overkill for one endpoint that I was using to scaffold a user.
- On getitng events by date I chose to go the route of if it's provided as a req then that's what the client is wanting. This is just a personal preference thing for me, I like things written like that. I prefer to be as efficient as possible and not have a bunch of endpoints that are basically doing the same thing.
- If I was making an api in real life it would also be accompanied by automated tests before it was considered complete.
- Also in normal circumstances the db url and passwords would be in a config section that didn't was part of the gitignore file.
  - I would also normally use gitignore in a production environment.

