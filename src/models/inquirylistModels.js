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
    name: [{
        type: string,
       
    }]
}, { timestamps: true });

const Inquirylist = mongoose.models.Inquirylist || mongoose.model('Inquirylist', inquirylistSchema);

export default Inquirylist;
