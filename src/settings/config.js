import dotenv from "dotenv";

dotenv.config();

export const settingDotEnv = () => {
  return {
    port: process.env.PORT,
    db: {
      host: process.env.URL_DB,
      localhost: process.env.DB_LOCALHOST,
    },
  };
};
