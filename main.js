import Express from "express";

const app = Express()
const port = 3000
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }))

app.get('/:id', (req, res) => {
  res.json({ "sss": req.params.id })
})


const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})