const config = {
    db_server : process.env.DB_SERVER || 'localhost',
    db_name: process.env.DB_NAME || 'user_login_tst',

}
module.exports = config;