/**
 * Plutôt que créer et connecté un Client
 * On va plutôt créer un "pool" de client et
 * laisser notre module manager les connexions
 * de plusieurs client en fonction des besoins.
 *
 * Le package pg étant bien fait, pas besoin de changer aurtre chose.
 * l'objet de pool à aussi une méthode query donc le reste de notre code
 * continuera de fonctionner
 *
 * Comme pour Client les informations de connexion
 * sont lu soit directement à partir de l'env soit donnée en paramêtre
 */
const debug = require('debug')('SQL:log');
const { Pool } = require('pg');

const config = {
  connectionString: process.env.DATABASE_URL,
};

if (process.env.NODE_ENV === 'production') {
  // tit truc de config pour la version en prod sur heroku
  // ça nous évitera des messages d'erreurs concernant ssl
  config.ssl = {
    rejectUnauthorized: false,
  };
}

const pool = new Pool(config);

module.exports = {
  originalClient: pool,
  async query(...params) {
    return this.originalClient.query(...params);
  },
};
