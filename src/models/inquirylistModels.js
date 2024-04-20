import mongoose from "mongoose";

const inquirylistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        trim: true
    },
    comments: {
        type: String
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
}, { timestamps: true });

const Inquirylist = mongoose.models.Inquirylist || mongoose.model('Inquirylist', inquirylistSchema);

export default Inquirylist;
