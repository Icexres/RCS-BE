# RCS Backend Setup Guide

## Prerequisites
- Node.js (v18 or higher)
- PostgreSQL (installed locally or via Docker)
- pgAdmin (optional, for GUI database management)

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd RCS-BE
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Database
1. Create a PostgreSQL database named `rcs`
2. Copy `.env.example` to `.env` and update with your database credentials:
```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=rcs
DB_USER=postgres
DB_PASSWORD=your_password
PORT=8000
```

### 4. Run Migrations (Create Tables)
```bash
npx sequelize-cli db:migrate
```

This will create all the necessary tables in your database.

### 5. Seed Database (Add Sample Data)
```bash
npx sequelize-cli db:seed:all
```

This will add sample restaurants to your database.

### 6. Start the Server
```bash
npm start
```

The server should now be running on `http://localhost:8000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/user/:userId` - Get user by ID

### Restaurants
- `GET /api/restaurants` - Get all restaurants (public)
- `GET /api/restaurants/:id` - Get restaurant by ID (public)
- `POST /api/restaurants` - Create restaurant (admin only)

### Testing with Postman

#### Admin Headers (for protected routes):
```
Content-Type: application/json
user-id: <your-admin-user-id>
user-role: admin
```

## Database Commands

### Run migrations
```bash
npx sequelize-cli db:migrate
```

### Undo last migration
```bash
npx sequelize-cli db:migrate:undo
```

### Run seeders
```bash
npx sequelize-cli db:seed:all
```

### Undo seeders
```bash
npx sequelize-cli db:seed:undo:all
```

## Troubleshooting

### Database Connection Error
- Make sure PostgreSQL is running
- Check your `.env` file has correct database credentials
- Verify database `rcs` exists in PostgreSQL



## Project Structure
```
RCS-BE/
├── server/
│   ├── config/          # Database configuration
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Auth middleware
│   ├── models/          # Sequelize models
│   ├── routes/          # API routes
│   └── services/        # Business logic
├── migrations/          # Database migrations
├── seeders/            # Sample data seeders
└── package.json
```
