import Joi from "joi";

export const SchemaUser = Joi.object({
  firstName: Joi.string().min(2).max(25).required()  .messages({
    'string.min': 'First name must be at least 2 characters long.',
    'string.max': 'First name cannot exceed 25 characters.',
    'string.empty': 'First name is required.'
  }),
  lastName:  Joi.string().min(2).max(25).required().messages({
    'string.min': 'Last name must be at least 2 characters long.',
    'string.max': 'Last name cannot exceed 25 characters.',
    'string.empty': 'Last name is required.'
  }),
  email:     Joi.string().email().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password:  Joi.string().min(8).required().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_]).+$')).messages(
    {
    'string.pattern.base': 'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.',
    'string.min': 'Password must be at least 6 characters long.',
    'string.empty': 'Password is required.'}),
  photo:     Joi.string().uri().message({
    'string.empty': 'photo is required'
  }),
  country:   Joi.string().required(),
  age:   Joi.number().integer(),
  rol: Joi.string().valid('user', 'admin').optional()
});

