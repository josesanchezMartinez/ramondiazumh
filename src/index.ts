import express from 'express';
import morgan from 'morgan'; 
import indexRoutes from './routes/index';

// Initialization
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

// Routes
app.use('/api', indexRoutes)

// Start Server
app.listen(app.get('port'), () => {
    console.log('Server on por',app.get('port'))
})