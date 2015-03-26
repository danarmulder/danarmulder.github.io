App.Project = DS.Model.extend({
  name: DS.attr( 'string' ),
  image: DS.attr('string'),
  description: DS.attr('string'),
  link: DS.attr('string'),
  technologies: DS.attr('string')
});

App.Project.FIXTURES = [{
    id: 1,
    name: "Bootstrap Labs - Intern",
    image: "images/Dealflow.png",
    description: "Worked on an internal project to create an investment management platform similar to AngelList.  For this project I learned a new stack, Meteor.js to develop on a pre-existing codebase.  Meteor uses Mongo as a database and is a platform designed for asynchronous data transfer between server and client.  Helped to zero-in on data structure and create a network-based management application.",
    link: "http://bootstraplabs.com/",
    technologies: "Meteor, MongoDB"
}, {
  id: 2,
  name: "Feelit.co - Intern",
  image: "images/feelit.png",
  description: "Social media mobile-based app.  Created an online web registration for their app using rails, AJAX and rest client to make calls to their pre-existing database of 100k+ users.  Connected to the Facebook API for validating registration.  Also designed the web application to coordinate with existing styles and assets.",
  link: "http://feelit.co/",
  technologies: "Rails, AJAX, JQuery, Facebook API"
}, {
  id: 3,
  name: "Puppy Play Date",
  image: "images/unipug.jpg",
  description: "First version was created on Rails and the front end using Javascript and Google Api.  A second version was created using test-driven development, again on Rails.  Postgresql Database consists of single table inheritance to store users preferences for other users they would like to connect to or block.    Users can log in, upload photos, message each other, search for other users.  Messaging system uses Event Machine with websockets to create a live chat.",
  link: "",
  technologies: "Rails, Google API, AJAX, Jquery, Backbone, Unit testing"
}, {
  id: 4,
  name: "3D Gem Game",
  image: "images/rubygem.png",
  description: "Created a simple click-event game in 3D in javascript.",
  link: "http://danarmulder.github.io/Ruby-gem-game/",
  technologies: "JQuery, Three.js"
}, {
  id: 6,
  name: "Gcamp",
  image: "images/gcamp.png",
  description: "Remake of Basecamp.  Created with Ruby on Rails.  App has users who can have projects, which can have tasks, projects can also have members who also own the project.",
  link: "https://fast-bastion-7542.herokuapp.com/",
  technologies: "Ruby on Rails"
}, {
  id: 5,
  name: "Food Truck App",
  image: "images/foodtruck.png",
  description: "Ember one page food truck app that connects to SF.GOV's API for data on mobile food permit as well as our own API, in which we crowd source information on food trucks in SF.",
  link: "https://intense-citadel-3135.herokuapp.com/trucks",
  technologies: "AJAX, Ember.js, Rails, Mapbox API"
}];
