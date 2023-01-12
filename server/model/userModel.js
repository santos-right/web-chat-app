const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 5,
        max: 20,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        max: 255,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 12,
    },
    isAvatarImageSet: {
        type: Boolean,
        default: false,
    },
    avatarImage: {
        type: String,
        default: "",
    },
});

module.exports = mongoose.model("Users", userSchema);