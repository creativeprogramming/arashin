/*
 * Arashin
 * 
 * The configuration file, this class the application parameters
 *
 * 
 */

// EXPORT THE PARAMS THAT THE APP USES
module.exports = {

   // DATABASE
   redis_host: '127.0.0.1', // the redis database host
   redis_port: 6379, // the redis database port

   // TODO: check to remove mongo config
   mongodb_ip:    '127.0.0.1', // the mongodb host
   mongodb_port:  27017, // the mongodb port

   // COOKIE AND SESSIONS
   cookie_secret: '0acbd5c92bd99ba02bad5bab985a26c5',
   client_host:   'localhost', // the client host
   client_port:   '3000', // the client port

   // Comment this options if you want http connection
   /*https_options: { //HTTPS Options
    private_key: __dirname + '/certs/privatekey.pem', // the HTTPS private key
    certificate: __dirname + '/certs/certificate.pem', // the HTTPS certificate
    },
    */

   realtime:           false, // If true, enable socket.io for realtime application
   realtime_redis_lib: './node_modules/socket.io/lib/stores/redis', // Path where socket.io can find redis library

   // Mapping the vhost and sites: domain -> site name references
   vhost:              {
      "localhost":         'default',
      "www.marcellop.com": 'pinco'
   },

   // Error for site not found or other
   server_error:       "Sorry, server error, please contact: "
};
