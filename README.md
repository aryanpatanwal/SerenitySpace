# SerenitySpace - Mental Wellness Platform

A full-stack mental wellness application that combines journaling and AI-powered conversational support.

## Features

- 📝 **Journaling**: Private, AI-analyzed journal entries with sentiment tracking
- 🤖 **AI Chatbot**: Compassionate mental health assistant (Tony)
- 📊 **Mood Tracking**: Visual charts and insights from your journal entries
- 🌙 **Dark Mode**: Complete dark/light theme support
- 📱 **Mobile Responsive**: Optimized for all device sizes
- 🔐 **User Authentication**: Secure login/register system
- 🛡️ **Privacy**: User consent for AI analysis

## Tech Stack

### Frontend
- React 18
- Vite
- Chart.js
- CSS3 with responsive design

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- OpenAI API
- JWT Authentication

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Project1
   ```

2. **Install dependencies**
   ```bash
   # Install client dependencies
   cd client
   npm install
   
   # Install server dependencies
   cd ../server
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Client environment
   cd client
   cp env.example .env
   # Edit .env with your API URL
   
   # Server environment
   cd ../server
   cp env.example .env
   # Edit .env with your MongoDB URI, JWT secret, and OpenAI API key
   ```

4. **Start development servers**
   ```bash
   # Start backend (from server directory)
   npm start
   
   # Start frontend (from client directory)
   npm run dev
   ```

## Deployment

### Frontend Deployment (Vercel/Netlify)

1. **Build the application**
   ```bash
   cd client
   npm run build
   ```

2. **Set environment variables**
   - `VITE_API_URL`: Your production API URL

3. **Deploy**
   - Upload the `dist` folder to your hosting service
   - Or connect your repository for automatic deployment

### Backend Deployment (Railway/Heroku/Render)

1. **Set environment variables**
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: A strong random string
   - `OPENAI_API_KEY`: Your OpenAI API key
   - `PORT`: Server port (optional)

2. **Deploy**
   - Connect your repository
   - Set the start command: `npm start`
   - Deploy

### Environment Variables

#### Client (.env)
```
VITE_API_URL=https://your-api-domain.com
```

#### Server (.env)
```
MONGODB_URI=mongodb://localhost:27017/serenityspace
JWT_SECRET=your-super-secret-jwt-key-here
OPENAI_API_KEY=your-openai-api-key-here
PORT=5000
NODE_ENV=production
```

## API Endpoints

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/profile` - Get user profile
- `PUT /api/profile` - Update profile
- `DELETE /api/profile` - Delete account
- `GET /api/journals` - Get journal entries
- `POST /api/journals` - Create journal entry
- `PUT /api/journals/:id` - Update journal entry
- `DELETE /api/journals/:id` - Delete journal entry
- `POST /api/chatbot` - Chat with AI assistant

## Security Features

- JWT token authentication
- Password hashing with bcrypt
- CORS protection
- Input validation
- User consent for AI analysis
- Secure API endpoints

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, please open an issue in the repository. 