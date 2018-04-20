'use strict';

exports.passportLdap = {
  server: {
    // 例如: ldap://localhost:389
    // 使用 ldapjs 创建 ldapjs server
    url: 'ldap://localhost:389',
    // dn       例如： cn=admin,ou=users,dc=example,dc=com
    bindDN: '',
    // 连接密码   例如: 'test123456'
    bindCredentials: '',
    // 起始位置 例如: 'dc=example,dc=com'
    searchBase: '',
    // 查询条件 例如：过虑条件为 objectClass=user 并且 (mail=username 或 userPrincipalName=username)
    searchFilter: '(&(objectClass=user)(|(mail={{username}})(userPrincipalName={{username}})))',
    // 属性过滤 例如：[ 'userPrincipalName', 'name', 'cn', 'dn', 'givenName', 'sn', 'displayName', 'mail' ]
    searchAttributes: [ 'userPrincipalName', 'name', 'cn', 'dn', 'givenName', 'sn', 'displayName', 'mail' ],
    // 是否重连
    reconnect: true,
    // 是否缓存
    cache: true,
    // 显示原始数据
    includeRaw: false,
  },
  passReqToCallback: true,
};
