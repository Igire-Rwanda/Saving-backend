import mongoose from "mongoose";
import uniquevalidator from "mongoose-unique-validator";
import mongooseFindAndFilter from "mongoose-find-and-filter";

const signupSchema = new mongoose.Schema({
     name: {
          type: String,
          required: "Your names are required"
     },
     email: {
          type: String,
          required: "your email is required"
     },
     password: {
          type: String,
          required: "password is required"
     },
     phone: {
          type: String,
          required: "phone number is required"
     },
     address: {
          type: String,
          required: "address is required"
     },
})
signupSchema.path("email").validate((val) => {
     var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(val);
     // var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return emailRegex.test(val);
}, "invalid email");
signupSchema.path("phone").validate((val) => {
     var phoneRegex = /^\d{10}$/.test(val);
     return phoneRegex.test(val);
}, "invalid phone");

signupSchema.pre("save", function (next) {
     var user = this;
     if (!user.isModified("password")) return next();
     bcrypt.genSalt(10, function (err, salt) {
          if (err) return next(err);
          bcrypt.hash(user.password, salt, function (err, hash) {
               if (err) return next(err);
               user.password = hash;
               next();
          });
     });
});
signupSchema.methods.comparePassword = function (candidatePassword, cb) {
     bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
          if (err) return cb(err);
          cb(null, isMatch);
     });

};
signupSchema.plugin(mongooseFindAndFilter);
signupSchema.plugin(uniquevalidator);



export default mongoose.models("SignUp", signupSchema)