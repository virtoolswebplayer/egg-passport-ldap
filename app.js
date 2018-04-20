'use strict';
const debug = require('debug')('egg-passport-local');
const LdapStrategy = require('passport-ldapauth').Strategy;

module.exports = app => {
  const config = app.config.passportLdap;
  app.passport.use(new LdapStrategy(config, (req, ldapResult, done) => {
    const user = Object.assign({ provider: 'ldap' }, ldapResult);

    debug('get user: %j', user);

    // let passport do verify and call verify hook
    app.passport.doVerify(req, user, done);
  }));
};
