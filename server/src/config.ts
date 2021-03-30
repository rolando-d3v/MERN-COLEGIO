import dotenv from 'dotenv'
dotenv.config()

export default {
    port : process.env.PORT  || '4000',
    
    db: {
        name : process.env.DB_NAME  || 'videos-app',
        host : process.env.DB_HOST  || 'localhost',
        user : process.env.DB_USER  || 'abraham',
        pass : process.env.DB_PASS  || 'jIjRdwT5uLjmCu2L',
    },
    secret : process.env.SECRET || 'TOP_SECRET'
}