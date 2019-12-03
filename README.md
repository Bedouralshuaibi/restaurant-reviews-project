# Restaurant Reviews
---

## To Run the Website
You need you need local web serve.
* In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
* Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8000`.
* Personally I use `python -m SimpleHTTPServer` in terminal.
With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.


### About the Website
Restaurant Reviews website is specific to  NewYork city. you can find all restaurants and all cuisines near to you, or you can be specific and pick, for example, (Brooklyn) and (pizza) then page open with the name of restaurants there and their addresses.
- whenever you choose a restaurant you can click *view details* to see the restaurant-hours, and also reviews + rating from people who visited it.
- * The web-site use **Google API key** to run the maps.
- * It is fully **responsive on different sized displays**
- **accessible for screen reader use.**
- **service worker** is added so the site can open in offline once the user open the site



### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future-proofing JavaScript code.
