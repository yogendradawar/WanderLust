# WanderLust 🏡✈️

A comprehensive travel accommodation platform built with the MERN stack, inspired by Airbnb. Discover unique stays, list your properties, and connect travelers with memorable experiences around the world.

## 🌟 Features

### 🏠 **Property Management**
- Create, edit, and delete property listings
- Upload multiple images with Cloudinary integration
- Detailed property descriptions and amenities
- Real-time availability updates
- Property categorization (villas, cabins, apartments, etc.)

### 👤 **User Authentication & Authorization**
- Secure user registration and login
- Password hashing and encryption for security
- User profile management
- Host and guest role differentiation
- Session management with passport.js

### 🔍 **Search & Discovery**
- Advanced search and filtering system
- Location-based property search
- Interactive maps with Mapbox integration
- Category-wise property browsing
- Real-time search results

### ⭐ **Review & Rating System**
- User reviews and ratings for properties
- Host and property rating system
- Review moderation and management
- Authentic feedback from verified bookings

### 🗺️ **Interactive Maps**
- Mapbox integration for location visualization
- Property location mapping
- Nearby attractions and amenities
- Route planning and directions

## 🛠️ Built With

### **Backend Technologies**
- **Node.js** - Server-side JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database for data storage
- **Mongoose** - MongoDB object modeling

### **Frontend Technologies**
- **EJS** - Embedded JavaScript templating
- **CSS3** - Styling and responsive design
- **JavaScript (ES6+)** - Client-side scripting
- **Bootstrap** - Responsive UI framework

### **Authentication & Security**
- **Passport.js** - Authentication middleware
- **Passport Local** - Local authentication strategy
- **Passport Local Mongoose** - Mongoose-specific authentication

### **File Upload & Storage**
- **Multer** - File upload handling
- **Cloudinary** - Image hosting and optimization

### **Additional Packages**
- **Joi** - Data validation
- **Connect Flash** - Flash messages
- **Connect Mongo** - Session storage
- **Cookie Parser** - Cookie handling
- **Dotenv** - Environment variables
- **Express Session** - Session management

## 🚀 Live Demo
[View Live Demo](https://wanderlust-vv2u.onrender.com/)

## ⚙️ Installation & Setup

### **Prerequisites**
- Node.js (version 18+ recommended)
- MongoDB (Local or MongoDB Atlas)
- Cloudinary account for image storage
- Mapbox account for maps integration

## ⚙️ Installation & Setup
undefined
1. Clone the repository
   ```bash
   git clone https://github.com/yogendradawar/WanderLust.git
2. Navigate to project directory
   ```bash
   cd WanderLust
3. Install dependencies
   ```bash
   npm install
4. **Set up environment variables**
Create a `.env` file in the root directory:

### **Database**
    ATLASDB_URL=mongodb://127.0.0.1:27017/wanderlust
### **or for MongoDB Atlas:**
    ATLASDB_URL=mongodb+srv://username:password@cluster.mongodb.net/wanderlust
    

### Cloudinary Configuration ****
      CLOUD_NAME=your_cloud_name
      CLOUD_API_KEY=your_api_key
      CLOUD_API_SECRET=your_api_secret


### **Session Secret**
    SECRET=your_session_secret


### **Mapbox Token**
    MAPBOX_TOKEN=your_mapbox_token


### **Server Configuration**
    PORT=8080

5. Start the development server
   ```bash
    npm start


6. **Access the application**
Open your browser and visit: `http://localhost:8080`

## 🏗️ Project Structure

```plaintext
WanderLust/
├── models/
│ ├── listing.js # Property listing schema
│ ├── review.js # Review schema
│ └── user.js # User schema
├── routes/
│ ├── listings.js # Property routes
│ ├── reviews.js # Review routes
│ └── users.js # User authentication routes
├── views/
│ ├── layouts/
│ ├── listings/
│ ├── users/
│ └── includes/
├── public/
│ ├── css/
│ ├── js/
│ └── images/
├── middleware/
│ └── middleware.js # Custom middleware
├── utils/
│ ├── ExpressError.js # Error handling
│ └── wrapAsync.js # Async wrapper
├── cloudConfig.js # Cloudinary configuration
├── schema.js # Joi validation schemas
├── app.js # Main application file
└── package.json
```


## 🎯 Key Features Implemented

### **Core Functionality**
✅ **User Authentication System**
- Secure registration and login
- Password encryption and hashing
- Session management

✅ **Property Management**
- CRUD operations for listings
- Image upload and storage
- Property categorization

✅ **Search & Filter System**
- Location-based search
- Advanced filtering options
- Real-time results

✅ **Review & Rating System**
- User reviews and ratings
- Review validation and moderation

✅ **Interactive Maps**
- Property location visualization
- Mapbox integration
- Location-based features

### **Technical Implementation**
✅ **MVC Architecture**
- Organized code structure
- Separation of concerns
- Scalable architecture

✅ **Error Handling**
- Custom error classes
- Async error handling
- User-friendly error messages

✅ **Data Validation**
- Server-side validation with Joi
- Client-side form validation
- Data sanitization

✅ **Security Features**
- Password hashing
- Session security
- Input validation and sanitization

## 🌐 API Endpoints

### **Authentication**
- `GET /register` - User registration page
- `POST /register` - Create new user account
- `GET /login` - User login page
- `POST /login` - Authenticate user
- `GET /logout` - User logout

### **Listings**
- `GET /listings` - Get all listings
- `GET /listings/new` - Create new listing form
- `POST /listings` - Create new listing
- `GET /listings/:id` - Get specific listing details
- `GET /listings/:id/edit` - Edit listing form
- `PUT /listings/:id` - Update listing
- `DELETE /listings/:id` - Delete listing

### **Reviews**
- `POST /listings/:id/reviews` - Add review to listing
- `DELETE /listings/:id/reviews/:reviewId` - Delete review

## 🚀 Deployment

The application is deployed on **Render** with the following configuration:

### **Environment Setup**
- **Database**: MongoDB Atlas for production database
- **Image Storage**: Cloudinary for media files
- **Maps**: Mapbox for location services
- **Hosting**: Render for application deployment

### **Deploy Your Own**
1. Fork this repository
2. Create accounts on MongoDB Atlas, Cloudinary, and Mapbox
3. Set up environment variables on Render
4. Connect your GitHub repository to Render
5. Deploy automatically with each push

## 🔧 Configuration

### **MongoDB Setup**
 For local development
ATLASDB_URL=mongodb://127.0.0.1:27017/wanderlust

 For production (MongoDB Atlas)
ATLASDB_URL=mongodb+srv://username:password@cluster.mongodb.net/wanderlust


### **Cloudinary Setup**
1. Create account at cloudinary.com
2. Get your cloud name, API key, and API secret
3. Add to .env file

### **Mapbox Setup**
1. Create account at mapbox.com
2. Generate access token
3. Add to .env file

## 🎯 Future Enhancements

- [ ] Real-time messaging between hosts and guests
- [ ] Advanced booking system with calendar integration
- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Mobile application (React Native)
- [ ] Multi-language support
- [ ] Social media login integration
- [ ] Advanced analytics dashboard
- [ ] Email notifications and confirmations
- [ ] Wishlist and favorites functionality
- [ ] Host verification system

## 🛡️ Security Features

- **Password Security**: Bcrypt hashing with salt
- **Session Security**: Secure session management
- **Input Validation**: Server-side validation with Joi
- **XSS Protection**: Input sanitization
- **CSRF Protection**: Cross-site request forgery prevention
- **Authentication**: Passport.js middleware

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Yogendra Dawar**
- **Email**: yogendradawar6@gmail.com
- **LinkedIn**: [Yogendra Dawar](https://www.linkedin.com/in/yogendradawar/)
- **GitHub**: [@yogendradawar](https://github.com/yogendradawar)

## 🙏 Acknowledgments

- Thanks to the open-source community for amazing libraries
- Inspired by Airbnb's user experience design
- Special thanks to all contributors and feedback providers
- MongoDB, Express.js, and Node.js communities for excellent documentation

---
⭐ Star this repository if you found it helpful!

## 📚 Learning Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Guide](https://expressjs.com/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Mapbox API Documentation](https://docs.mapbox.com/)
- [Cloudinary Documentation](https://cloudinary.com/documentation)

