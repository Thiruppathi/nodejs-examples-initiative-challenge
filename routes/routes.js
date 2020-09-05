const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController.js');

// Routes
router.get('/', appController.home);
router.get('/dependencies', appController.dependencies);
router.get('/minimum-secure', appController.minimumSecure);
router.get('/latest-releases', appController.latestReleases);

module.exports = router;
