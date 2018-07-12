const express = require('express');
const fetch = require('node-fetch');

const app = express();

const description = {
    question: 'Tell me a little bit about yourself?',
    name: 'Tomas Matulis',
    age: '25',
    cellphone: '+37063584444',
    email: 'tomasmatulis0@gmail.com',
    country: 'Lithuania',
    city: 'Vilnius',
    languages: 'Lithuanian, English',
    idol: 'Elon Musk',
    about: 'Decided to pursuit my carrier in IT field.'+
           'Currently interested in Web development and'+
           'Front end. Have a certificate to prove gained'+
           'knowledge of HTML5, CSS3, JavaScript, Bootstrap,'+
           'ES6, React.js, Redux, HTTP, JSON, AJAX, Node.js,'+
           'Express.js, PostgreSQL, RESTful, GitHub.',
    whyIT: 'Because I can use my creativity and knwolendge'+
           'to make something great. My dream is to have a'+
           'flexible job, to be able to work and travel.'

}
const tech = {
    question: 'What exites you about technology?',
    answer: 'It never stops improving, opens new posibilities,'+
            'makes our lifes easier. I like to create and'+
            'although I suck at drawing with code I can create'+
            'eye plesing designs.'
}
const techstack = {
    question: 'What is your prefered technology stack?',
    answer: 'Since I am still new in this field I do not have'+
            'the full picture of my prefered stack, but I would'+
            'prefere newest and the most relevant technologies'+
            'today. As I was thought during recent online course.',
    frontEnd: 'Reacs.js, Bootstrap',
    backEnd: 'Node.js, Express.js, PostgreSQL',
    abilityToLearn: "Oh yes"

}
const hobbies = {
    question: 'What are your favorite hobbies?',
    lifeStyle: 'Working out, healthy diet',
    goals: 'Constant improvement',
    other: 'Investing, stock market, real estate',
    deams: 'Traveling, exploring',
    entertainment: 'All kinds of activities, just love to spend'+
                   'time with friends, movies, basketball...',
    thrills: 'I just love theme parks, like a child. Taking all'+
             'extreme rides, thats me. Jumped out of the plane'+
             'with parasute.'

}

app.set('view engine', 'ejs');

app.get('/aboutme', (req, res) => {
    res.send([description, tech, techstack, hobbies]);
});
app.get('/aboutme/description', (req, res) => {
    res.send(description);
});
app.get('/aboutme/tech', (req, res) => {
    res.send(tech);
});
app.get('/aboutme/techstack', (req, res) => {
    res.send(techstack);
});
app.get('/aboutme/hobbies', (req, res) => {
    res.send(hobbies);
});

app.get('/posts', (req, res) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => res.render('pages/index', {posts}))   
});
app.get('/*', (req, res) => {
    res.send('Not found');
});
app.listen(3000);