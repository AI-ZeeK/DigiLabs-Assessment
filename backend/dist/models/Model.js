import mongoose from "mongoose";
const appSchema = new mongoose.Schema({
    text: {
        type: String,
        minLength: 25,
    },
    image: String,
}, {
    timestamps: true,
});
const App = mongoose.model("App", appSchema);
export default App;
