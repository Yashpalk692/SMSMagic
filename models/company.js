const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  industry: { type: String, required: true },
  revenue: { type: Number }
});

const Company = mongoose.model('Company', companySchema);