import dotenv from 'dotenv'
dotenv.config()

export default {
    port : process.env.PORT  || '4000',
    dbname : process.env.DB_NAME  || 'cafe',
    dbhost : process.env.DB_HOST  || 'localhost',
    user : process.env.DB_USER  || 'a',
    pass : process.env.DB_PASS  || 'jIjRdwT5uLjmCu2L',
}