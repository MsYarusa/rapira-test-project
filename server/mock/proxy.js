import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'

import 'dotenv/config'

const MOCK_PATH = `http://localhost:4010`
const PROXY_PORT = process.env.API_MOCK_PROXY_PORT || 3000

/*
  Прокси сервер проксирует вопросы для мок сервера.
  Это необходимо так как мок сервер на основе Prism не умеет обрабатывать параметры.
  Таким образом мы добавляем возможность получать данные в зависимости от параметров.
*/

const app = express()

// Проксирует получение комментариев для поста
app.get('/blog/comments', (req, res, next) => {
  const { post_id } = req.query

  req.headers['prefer'] = `example=getAllCommentsByPost_${post_id}`

  next()
})

// Проксирует получение аватаров пользователей
app.get('/users/avatar/:id', (req, res, next) => {
  const { id } = req.params

  req.headers['prefer'] = `example=getUserAvatarById_${id}`

  next()
})

// Проксирует получение изображение для постов
app.get('/blog/posts/image/:id', (req, res, next) => {
  const { id } = req.params

  req.headers['prefer'] = `example=getPostImageById_${id}`

  next()
})

app.use(
  '/',
  (req, res, next) => {
    // Симулируем задержку ответа
    setTimeout(next, 2000)
  },

  createProxyMiddleware({
    target: MOCK_PATH,
    changeOrigin: true,
    logger: console,
  }),
)

app.listen(PROXY_PORT, () => {
  console.log(`Прокси сервер запущен на http://localhost:${PROXY_PORT}`)
})
