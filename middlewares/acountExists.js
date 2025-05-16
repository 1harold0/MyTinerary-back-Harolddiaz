export default async (req, res, next) => {
    try {
        let email = req.body.email
        let account = await User.findOne({
            email: email
        })
        if (account) {
            return res.status(400).json({
                succes: false,
                message: "this user exists"
            })
        }
        next()
    } catch (error) {
        next(error)
    }
}