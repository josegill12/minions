const express = require('express');
const app = express();
const morgan = require('morgan');
const authRoutes = require("./controllers/authController");
const tripsController = require("./controllers/tripsController");
const session = require('express-session');

app.use(
    session({ secret: "some secret", cookie: { maxAge: 60000 } })
);

const cors = require('cors');
require('dotenv').config();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(authRoutes);
app.use("/trip", tripsController);

app.get('/', (req, res) => {
    res.json({ message: "Finals suck" });
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});