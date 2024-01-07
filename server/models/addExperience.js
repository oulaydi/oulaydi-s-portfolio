const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const experienceSchema = new Schema(
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
        company: {
            type: String,
            required: true,
        },
        companyLink: {
            type: String,
            required: false,
        },
        companyDomain: {
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

module.exports = mongoose.model("Experience", experienceSchema);
