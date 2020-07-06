# Google Books Search

# Deployed Application: 

Overview
In this activity, you'll create a new React-based Google Books Search app. This assignment requires you to create React components, work with helper/util functions, and utilize React lifecycle methods to query and display books based on user searches. You'll also use Node, Express and MongoDB so that users can save books to review or purchase later.
Instructions


This application requires at minimum 2 pages, check out the following mockup images for each page:


Search - User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.


Saved - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.






Start by using the 07-Ins_Mern example as a base for your application.


Add code to connect to a MongoDB database named googlebooks using the mongoose npm package.


Using mongoose, then create a Book schema.


At a minimum, books should have each of the following fields:




title - Title of the book from the Google Books API


authors - The books's author(s) as returned from the Google Books API


description - The book's description as returned from the Google Books API


image - The Book's thumbnail image as returned from the Google Books API


link - The Book's information link as returned from the Google Books API

Bonus Live Updates to Saved Books


Use React routing and socket.io to create a notification or a component that triggers whenever a user saves an book. Your message should include the title of the saved book.


Say you have multiple browsers open, each one visiting your site. If you save an book in one browser, then all of your browsers should notify you that a new book was saved.


Socket.io NPM package