import dotenv from 'dotenv'
dotenv.config()

export default {
    port : process.env.PORT  || '4000',

    db: {
        name : process.env.DB_NAME  || 'cafe',
        host : process.env.DB_HOST  || 'localhost',
        user : process.env.DB_USER  || 'a',
        pass : process.env.DB_PASS  || 'jIjRdwT5uLjmCu2L',
    }
}