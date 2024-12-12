# Cubin.gg

A speedcube timer web application built with React and Node.js. Features include:
- Multiple puzzle support (2x2, 3x3, 4x4)
- Real-time scramble generation with visual representation
- Session statistics (Best time, Ao5, Mean)
- Time history with detailed solve information
- Keyboard controls for precise timing

## Tech Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Axios for API calls

### Backend
- Node.js
- Express
- TypeScript
- Java bridge for TNoodle scramble generation

## Prerequisites
- Node.js (v16 or higher)
- Java Runtime Environment (JRE)
- Yarn package manager

## Project Structure
```
cubin.gg/
├── client/              # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/              # Express backend
│   ├── src/
│   ├── scrambles-0.19.2-all.jar
│   └── package.json
│
└── package.json         # Root package.json
```

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/cubin.gg.git
cd cubin.gg
```

2. Install dependencies
```bash
# Install root dependencies
yarn install

# Install client dependencies
cd client
yarn install

# Install server dependencies
cd ../server
yarn install
```

3. Set up environment variables
```bash
# In client/.env
VITE_API_URL=http://localhost:5000

# In server/.env (if needed)
PORT=5000
HOST=0.0.0.0
```

## Running the Application

From the root directory:

```bash
# Run both frontend and backend
yarn dev

# Run only frontend
yarn client

# Run only backend
yarn server
```

- Frontend will be available at: http://localhost:3000
- Backend will be available at: http://localhost:5000

## Features

### Timer
- Space bar control for starting/stopping
- Millisecond precision
- Visual feedback for timer state

### Statistics
- Best solve time
- Current Average of 5
- Best Average of 5
- Session mean

### Time Management
- View detailed solve information
- Remove individual times
- Clear entire session
- Automatic session saving

## Development

### Frontend Structure
- Components follow a modular architecture
- Hooks for timer and time entry management
- Tailwind for styling
- TypeScript for type safety

### Backend Structure
- Express server with TypeScript
- Service-based architecture for scramble generation
- Java bridge for TNoodle integration
- RESTful API endpoints

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- TNoodle for scramble generation
- World Cube Association for scramble specifications