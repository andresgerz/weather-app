import { Router } from 'express';
const router = Router();

import * as authCtrl from '../controllers/auth.controller';
import { verifySignup } from '../middlewares';


router.post(
  '/signup', 
  [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExited],
  authCtrl.signUp
  );


router.post('/signin', authCtrl.signIn);

export default router;