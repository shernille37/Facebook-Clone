## Facebook Clone

> Facebook Clone where you can post real time with Firebase

## Features
- User authentication with Firebase Google Provider
- Post what in your mind
- Real time post update with Firebase Firestore

## Usage

- Create a [Firebase](https://firebase.google.com/) account with FireStore and obtain your `SECRET KEYS`

Add a `.env` file in the `frontend/` and add the following

```
NODE_ENV=development
PORT=5000
MONGO_URI= YOUR MONGO URI
JWT_SECRET= YOUR JWT SECRET
STRIPE_SECRET_KEY= YOUR STRIPE SECRET KEY
CLIENT_URL=http://localhost:3000
SERVER_URL=http://localhost:8000
CLOUDINARY_NAME= YOUR CLOUDINARY NAME
CLOUDINARY_API_KEY= YOUR CLOUDINARY API KEY
CLOUDINARY_API_SECRET= YOUR CLOUDINARY API SECRET
PAGINATION_LIMIT= YOUR PAGINATION LIMIT

```
