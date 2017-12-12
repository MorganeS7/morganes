'use strict';

var mongoose = require('mongoose'),
    Skill = mongoose.model('Skills'),
    Website = mongoose.model('Websites'),
    Contact = mongoose.model('Contacts');

exports.list_all_skills = function(req, res, next) {
  Skill.find(req.query)
        .exec(function (err, skill) {
        if (err) next(err);
        res.json(skill);
    });
};

exports.list_all_websites = function(req, res) {
  Website.find({}, function(err, website) {
    if (err)
      res.send(err);
    res.json(website);
  });
};

exports.create_a_contact = function(req, res) {
    var data = JSON.parse(req.body)
    var Contact = new Contact();
    Contact.firstName = data.firstName;
    Contact.lastName = data.lastName;
    Contact.tel = data.tel;
    Contact.email = data.email;
    Contact.comments = data.comments;
    Contact.save(function(err, task) {
        if (err)
          res.send(err);
        res.json(contact);
    });
};