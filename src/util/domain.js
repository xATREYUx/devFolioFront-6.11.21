export default process.env.NODE_ENV === "development"
  ? "http://localhost:5000"
  : // "https://us-central1-devport-express-backend.cloudfunctions.net/app"
    process.env.NODE_ENV === "production" && "https://folioback.web.app";
// "https://auth-skeleton-backend.herokuapp.com";
