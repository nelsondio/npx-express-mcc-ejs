import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
	console.log((req.context.models.Message));
	console.log((req.context.models.User));
//	return res.send(Object.values(req.context.models.Message));
	return res.send("/messages GET route hit");
});

router.get('/:messageId', (req, res) => {
	return res.send(req.context.models.Message[req.params.messageId]);
});

router.post('/', (req, res) => {
	const id = uuidv4();
	const message = {
		id,
		text: req.body.text,
		userId: req.context.me.id,
	};
	req.context.models.messages[id] = message;
	return res.send(message);
});
router.delete('/:messageId', (req, res) => {
	const {
		[req.params.messageId] : message,
		...otherMessages
	} = req.context.models.messages;
	req.context.models.messages = otherMessages;
	return res.send(message);
});

export default router;
