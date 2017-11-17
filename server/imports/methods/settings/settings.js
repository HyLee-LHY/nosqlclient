import { Meteor } from 'meteor/meteor';
import { Settings, Connection } from '/server/imports/core';

Meteor.methods({
  subscribed() {
    Settings.setSubscribed();
  },

  handleSubscriber(email) {
    Settings.subscribe(email);
  },

  checkMongoclientVersion() {
    Settings.checkMongoclientVersion();
  },

  updateSettings(settings) {
    Settings.updateSettings(settings);
  },

  importMongoclient(file) {
    Settings.importSettings(file);
    Connection.importConnections(file);
  },

  saveQueryHistory(history) {
    Settings.saveQueryHistory(history);
  }
});
