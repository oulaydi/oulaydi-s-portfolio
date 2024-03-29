const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const educationSchema = new Schema(
    {
        startDate: {
            type: String,
            required: true,
        },
        endDate: {
            type: String,
            required: false,
        },
        degree: {
            type: String,
            required: true,
        },
        institution: {
            type: String,
            required: true,
        },
        institutionLink: {
            type: String,
            required: false,
        },
        institutionDomain: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        },
    }
);

module.exports = mongoose.model("Education", educationSchema);
