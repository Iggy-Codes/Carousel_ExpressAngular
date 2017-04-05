
# :dizzy: Carousel :dizzy:

**A Fullstack Carousel Application build with ES6, HTML5, CSS3, AngularJS and ExpressJS**

---

**How to Install**
1. Download the zip or clone the repository
2. Open your terminal and type `npm start` (it installs all npm and bower dependencies)
3. Go to your browser and type `localhost:3000`

**How it works**
1. A request is made to an Express webserver endpoint by the client
2. The server reads a json asynchronously and sends it as a response
3. The json object is read by an Angular application on client side
4. The images and other datas are rendered accordingly on HTML

**Difficulties faced**
1. Streaming a json containing absolute path to image files as its url in the server
2. Randomizing an array of images inside another array of objects received as promise
3. Implementing carousel logic with angular best practices

**Can I use the app as a personal slider?**  

Absolutely. This was made for this very purpose. You just need to do 2 things before you have your own personal image slider.
1. Insert image files inside the img folder located at `server\img`
2. Change the title and image file names inside the db.json file located in `server\data`
3. Note that the title can contain string like *Family*, *Friends*, *Pets* etc. Now inside the images you can write the names of the files that belong to that category.  
 eg.`{  
  "title": "Family Photos",  
  "images": ["me.jpg", "dad.png", "sister_jane.jpg"]  
  }` 