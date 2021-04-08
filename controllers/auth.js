const jwt = require('jsonwebtoken');
const bcryptJs = require('bcryptjs');

const User = require('../models/User');
const keys = require('../config/keys');


const login = async function(req, res) {
  const person = await User.findOne({email: req.body.email}) 

  if (person) {
    const passwordResult = bcryptJs.compareSync(req.body.password, person.password)
    if(passwordResult) {

      const token = jwt.sign({
        email: person.email,
        userId: person._id
      }, keys.JWT, {expiresIn: 60 * 60})

      res.status(200).json({token: `Bearer ${token}`})

    } else [
      res.status(401).json({massage: 'password not sync'})
    ]
  } else {
    res.status(404).json({massage: 'User not found'})
  }
};

const register = async function(req, res) {
  //Шукаємо юзера з вказаним при реїстрації
  const person = await User.findOne({
    email: req.body.email
  })

  //Якщо знакодимо
  if (person) {
    res.status(409).json({
      massage: 'email in the same registries'
    })
  } else {
    
    const salt = bcryptJs.genSaltSync(10);
    const password = req.body.password;

    const user = new User({
      email: req.body.email,
      password: bcryptJs.hashSync(password, salt)
    })

    try {
      await user.save()
      req.status(201).json({massage: `User Created ${user}`});
    } catch(e) {
      console.err('SOME ERROR');
    }
  }

  user.save().then(() => {console.log('user push');})
}

module.exports = {login, register}