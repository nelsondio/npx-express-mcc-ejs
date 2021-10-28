import { Router } from 'express';
import { BadRequestError } from '../utils/errors';

const router = Router();

router.get('/', async (req, res, next) => {
	const users = await req.context.models.User.find({})
	.catch((error) => next(new BadRequestError(error)),
	);
	return res.send(users);
});

router.get('/:userId', async (req, res, next) => {
	const oneUser = await req.context.models.User.findById(
		req.params.userId,
	).catch((error) => next(new BadRequestError(error)));
	return res.send(oneUser);
});

export default router;
