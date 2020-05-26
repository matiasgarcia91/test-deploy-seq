## REST: REpresentational State Transfer

A standard of how developers agreed to set up their APIs.

2. Operations as HTTP methods.
1. Clean and meaningul URLs.
1. Respond with adequate status codes.

CRUD => Create, Read, Update, Delete

1. operations as HTTP methods
   HTTP Methods: =>
   GET (read),
   POST (Create),
   [PUT PATCH](Update),
   DELETE (delete)

2. Clean meaningful URLs:

Fetch user by id:
another endpoint: create a user, update a user

`/getUserById`
`/creteUser`
`/updateUser`

app.post(`/users`)
app.get(`/users`) -> get all users
app.get(`/users/1`) -> get user by id
app.get(`/users/1/list`)
app.post(`/sendEmail`) => RPC endpoints (remote procedure call)
app.update(`/users/1`)

3. Respond with appropiate status codes:

200-299: Here you go!
300-399: Redirection -> Go away!
400-499: you screwed up.
500-599: I screwed up.

1. 200 -> good
2. 404 -> not there
