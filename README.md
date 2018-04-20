# 用法

> config/config.default.js
```js
  // passportLdap 配置参考： https://github.com/vesse/passport-ldapauth
  
  module.exports = appInfo => {
    const config = {};
    config.passportLdap = {
        server: {
          url: 'ldap://localhost:389',
          bindDN: 'cn=admin,ou=users,dc=exmaple,dc=com',
          bindCredentials: 'Test123',
          searchBase: 'dc=example,dc=com',
        },
        usernameField: 'name',
        passwordField: 'pass',
        passReqToCallback: true
      };
  }
```

> config/plugin.js
```js
exports.passportLdap = {
  enable: true,
  package: 'egg-passport-ldap',
};
```

> app.js

```js
 app.passport.verify(async (ctx, user) => {
    ctx.logger.debug('passport.verify', user);
    return user;
  });
```

> router.js

```js
const ldapStrategy = app.passport.authenticate('ldapauth');
router.post('/passport/ldap', ldapStrategy);
```