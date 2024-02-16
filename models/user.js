const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, enum: ['ROLE_USER', 'ROLE_ADMIN'], default: 'ROLE_USER' }
});

const User = mongoose.model('User', userSchema);