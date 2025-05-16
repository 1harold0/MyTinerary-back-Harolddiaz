import joi from "joi"

const schema = joi.object({
    email: joi.string().email().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: joi.string().min(8).required().messages(
        {
            'string.pattern.base': 'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.',
            'string.min': 'Password must be at least 6 characters long.',
            'string.empty': 'Password is required.'
        }),

})
export default schema