module.exports = ({ env }) => ({
  auth: {
    secret: " Gxemt / JO8B9y8J7nUsPotg ==",
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
})