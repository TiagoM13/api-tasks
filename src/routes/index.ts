import express from 'express';

const router = express.Router();

router.get('/tasks', (req, res) => {
  res.status(200).send({ message: 'Server started successfully' })
})

export { router }
