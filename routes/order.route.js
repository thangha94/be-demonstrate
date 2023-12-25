const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
  console.log({
    req,
    res,
  })
})

export default router
