
Basic exercise to refresh Express GET & POST.


## Setup:

- clone
- run `npm i`


## Iteration 1:

- Implement the functionality to list products of different categories (you will need to create a new route).

- Example URL:

`/products/categoryName`


## Iteration 2:

- Implement the functionality to allow filtering `/products` by price.

- Example URL:

`/products?maxPrice=50`

- Note: do it only for the `/products` route (no need to do it for the route defined in Iteration 1)


## Iteration 3:

- Implement a mock login form.

### 3.1: Create a route to render a form

- Create a rout that renders a basic login form for every GET request on the path `/login`

    ```
    app.get('/login', (req, res) => {
        // ...
    })
    ```


### 3.2: Handle POST requests

- Remember to set up bodyParser, adding the following in app.js:

    ```
    const bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({ extended: true }));
    ```

- Then, you'll be able to get information from the POST request with `req.body`. For this example, you can just check that the password is `1234` (pretty safe).


    ```
    if(req.body.password === '1234') {
        res.send("user logged in")
    }
    ```

