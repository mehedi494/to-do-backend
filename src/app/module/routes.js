const  express = require('express');
const { Controller } = require('./controller');
const router = express.Router()

router.post(
  '/add-task',
  /* validateRequest(UserValidation.createStudentZodSchema), */
  /* auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), */
  Controller.createContacts
);
router.get(
  '/',
  /* validateRequest(UserValidation.createStudentZodSchema), */
  /* auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), */
  Controller.getAllContacts
);
router.get(
  '/:id',
  /* validateRequest(UserValidation.createStudentZodSchema), */
  /* auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), */
  Controller.getSingleContact
);
router.patch(
  '/:_id',
  /* validateRequest(UserValidation.createStudentZodSchema), */
  /* auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), */
  Controller.updateContact
);
router.delete(
  '/:_id',
  /* validateRequest(UserValidation.createStudentZodSchema), */
  /* auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), */
  Controller.deleteContact
);



// set Favorrite 

module.exports.Routes =router;