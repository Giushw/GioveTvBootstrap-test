var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Home | GioveTv',
    jumbotron: 'NON PERDERTI IL FILM CULT DELLA SETTIMANA'
 });
});
/* GET programmi page. */
router.get('/programmi', function(req, res, next) {
  res.render('programmi', {
    title: 'Programmi | GioveTv',
    jumbotron: 'Cerca il tuo Programma Preferito'
 });
});
/* GET guidatv page. */
router.get('/guidatv', function(req, res, next) {
  res.render('guidatv', {
    title: 'Guida Tv | GioveTv',
    jumbotron: 'I Programmi Della Settimana'
 });
});
/* GET Login page. */
router.get('/login', function(req, res, next) {
  res.render('login', {
    title: 'Login | GioveTv',
    jumbotron: 'Registrati ed accedi al servizio'
 });
});
/* GET FAQ page. */
router.get('/faq', function(req, res, next) {
  res.render('faq', {
    title: 'FAQ | GioveTv',
    jumbotron: 'FAQ'
 });
});
/* GET Assistenza Contatti page. */
router.get('/assistenzacontatti', function(req, res, next) {
  res.render('assistenzacontatti', {
    title: 'Assistenza & Contatti | GioveTv',
    jumbotron: 'Assistenza & Contatti'
 });
});
/* GET Note Legali page. */
router.get('/notelegali', function(req, res, next) {
  res.render('notelegali', {
    title: 'Note Legali | GioveTv',
    jumbotron: 'Note Legali'
 });
});

module.exports = router;
