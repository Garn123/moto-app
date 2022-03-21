const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, required: false, trim: true },
    country: { type: String, required: false, trim: true },
    logo: { type: String, required: false, trim: true },
    models: [{ type: mongoose.Schema.Types.ObjectId, ref: 'models', required: false, trim: true }],
},
    {
        timestamps: true
    });

const Brand = mongoose.model('brands', brandSchema);
module.exports = Brand;