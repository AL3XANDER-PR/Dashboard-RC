// console.log(process.env.NODE_ENV !== 'production');
export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://nodejs-production-b648.up.railway.app/api"
    : "http://localhost:3007/api";
