const express = require('express')
const {vistaPrincipal, vistaTables, vistaNotifications, vistaIcons, vistaMap, vistaRtl, vistaTypograhpy, vistaUpgrade, vistaUser} = require ('../controllers/PageControllers')
const router = express.Router()

router.get('/', vistaPrincipal)
router.get('/tables', vistaTables)
router.get('/notifications', vistaNotifications)
router.get('/icons', vistaIcons)
router.get('/map', vistaMap)
router.get('/rtl',  vistaRtl)
router.get('/typography', vistaTypograhpy)
router.get('/upgrade', vistaUpgrade)
router.get('/user', vistaUser)

module.exports = {routes: router}