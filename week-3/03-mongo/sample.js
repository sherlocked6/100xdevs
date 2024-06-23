const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://saichandusambangi:h3VEciOpvN2VJ9a4@cluster0.pf9i2p0.mongodb.net/userappnew');

const User = mongoose.model('Users', { name: String, email: String, password: String });

const user = new User({ name: 'chad', email: 'chad@gmail.com', password: 'pass' });
user.save()


