const express = require('express');
const controller = require('../controllers/blague.controller');
const router = express.Router();

/**
 * @swagger
 * /api/blagues:
 *   get:
 *     summary: Récupérer toutes les blagues
 *     responses:
 *       200:
 *         description: Liste des blagues
 */
router.get('/', controller.getAll);

/**
 * @swagger
 * /api/blagues/random:
 *   get:
 *     summary: Récupérer une blague aléatoire
 *     responses:
 *       200:
 *         description: Une blague
 */
router.get('/random', controller.random);

/**
 * @swagger
 * /api/blagues/{id}:
 *   get:
 *     summary: Récupérer une blague par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Blague trouvée
 *       404:
 *         description: Blague non trouvée
 */
router.get('/:id', controller.getById);

/**
 * @swagger
 * /api/blagues:
 *   post:
 *     summary: Ajouter une blague
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *               reponse:
 *                 type: string
 *     responses:
 *       201:
 *         description: Blague créée
 */
router.post('/', controller.add);

module.exports = router;
