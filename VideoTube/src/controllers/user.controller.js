import { AsyncHandler } from "../utils/AsyncHandler.js";

const registerUser = AsyncHandler(async (req, res) => {
    res.status(200).json({
        message: "hi postman"
    })
})

export { registerUser }