const { Router } = require('express');

const {
    validaName,
    validaId
} = require('../middlewares');

const {
    getMessage,
    postMessage
} = require('../controllers/message');


const router = Router();


router.get('/:id', validaId, getMessage);

router.post('/', validaName, postMessage);



module.exports = router;