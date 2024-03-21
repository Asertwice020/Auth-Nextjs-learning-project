const configEnv = {
  MONGO_URI: String(process.env.MONGO_URI),

  TOKEN_SECRET: String(process.env.TOKEN_SECRET),

  DOMAIN: String(process.env.DOMAIN),
};

export default configEnv;