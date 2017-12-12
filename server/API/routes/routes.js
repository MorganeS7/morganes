'use strict';
module.exports = function(app) {
  var controller = require('../controllers/controller');

  app.route('/skills')
    .get(controller.list_all_skills);

  app.route('/websites')
    .get(controller.list_all_websites);

  app.route('/contact')
    .post(controller.create_a_contact);
};