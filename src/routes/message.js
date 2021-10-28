import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
	const messages = await req.context.models.Message.find({});
	return res.send(messages);
});

router.get('/:messageId', async (req, res) => {
	const one = await req.context.models.Message.findById(req.params.messageId,);
	return res.send(one);
});

router.post('/',  async (req, res, next) => {
	const oneMessage = await req.context.models.Message.create({
		text: req.body.text,
		user: req.context.me.id,
	})
	.catch (next); 
	return res.send(oneMessage);
});
router.delete('/:messageId', async (req, res) => {
	const one2delete = await req.context.models.Message.findById(
		req.params.messageId,
	);
	let result = null;
	if (one2delete) {
		result = await message.remove();
	}
	return res.send(result);
});

export default router;
