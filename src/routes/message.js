import { Router } from 'express';
import { BadRequestError } from '../utils/errors';

const router = Router();

router.get('/', async (req, res, next) => {
	const messages = await req.context.models.Message.find({}).catch(
		(error) => next(new BadRequestError(error)),
	);
	return res.send(messages);
});

router.get('/:messageId', async (req, res, next) => {
	const one = await req.context.models.Message.findById(req.params.messageId,)
	.catch((error) => next(new BadRequestError(error)));
	return res.send(one);
});

router.post('/',  async (req, res, next) => {
	const oneMessage = await req.context.models.Message.create({
		text: req.body.text,
		user: req.context.me.id,
	})
	.catch ((error) => next(new BadRequestError(error))); 
	return res.send(oneMessage);
});
router.delete('/:messageId', async (req, res, next) => {
	const one2delete = await req.context.models.Message.findById(
		req.params.messageId,
	)
	.catch((error) => next(new BadRequestError(error)));
	let result = null;
	if (one2delete) {
		result = await one2delete.remove();
	}
	return res.send(result);
});

export default router;
