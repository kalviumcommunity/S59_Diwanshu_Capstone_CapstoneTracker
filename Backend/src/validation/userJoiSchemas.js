const Joi = require("joi");

const updateSchema = Joi.object({
    username: Joi.string().min(3).optional(),
    fullname : Joi.string().required(),
    password : Joi.string().required(),
    newPassword : Joi.string().min(6).optional()
});

const userJoiSchema = Joi.object({
  username: Joi.string().min(3).required(),
  fullname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  streak: Joi.number().integer().min(0).required(),
});

const contactSchema = Joi.object({
    email: Joi.string().email().required(),
    fullname : Joi.string().required(),
    message : Joi.string().required()
})

const updateHomework = Joi.object({
    artifactLink : Joi.string().uri().required(),
    videoLink : Joi.string().uri().required(),
    codiumAI : Joi.string().required(),
    actionTakenonFeedback : Joi.string().required()
})

module.exports = {
    updateSchema,userJoiSchema,contactSchema,updateHomework
}

