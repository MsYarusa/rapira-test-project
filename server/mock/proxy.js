import express from 'express'
import fs from 'fs'
import cors from 'cors'
import { createProxyMiddleware } from 'http-proxy-middleware'
import path from 'path'
import 'dotenv/config'
import { fileURLToPath } from 'url'

const MOCK_PATH = `http://localhost:4010`
const PROXY_PORT = process.env.API_MOCK_PROXY_PORT || 3000

/*
  Прокси сервер проксирует вопросы для мок сервера.
  Это необходимо так как мок сервер на основе Prism не умеет обрабатывать параметры.
  Таким образом мы добавляем возможность получать данные в зависимости от параметров.
*/

const app = express()
app.use(cors())

// Проксирует получение комментариев для поста
app.get('/blog/comments', (req, res, next) => {
  const { post_id } = req.query

  req.headers['prefer'] = `example=getAllCommentsByPost_${post_id}`

  next()
})

let currentCommentId = 100

app.post('/blog/comments', (req, res, next) => {
  currentCommentId += 1

  return res.status(201).send({ id: currentCommentId })
})

// Получение изображений

const FILENAME = fileURLToPath(import.meta.url)
const DIRNAME = path.dirname(FILENAME)

function handleImageResponse(imagePath, res) {
  fs.access(imagePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(`Файл изображения не найден: ${imagePath}`)

      return res
        .status(404)
        .send({ error_message: 'Изображение не найдено', error_code: 404 })
    }

    let mimeType = 'image/jpeg'

    if (imagePath.endsWith('.png')) {
      mimeType = 'image/png'
    }

    res.set('Content-Type', mimeType)
    res.sendFile(imagePath)
  })
}

// Проксирует получение аватаров пользователей

const USER_AVATARS_DIR = 'data/users/avatars'
const USER_AVATARS_EXTENSION = 'png'

app.get('/users/avatar/:id', (req, res, next) => {
  const { id } = req.params

  req.headers['prefer'] = `example=getUserAvatarById_${id}`

  const imagePath = path.resolve(
    DIRNAME,
    `${USER_AVATARS_DIR}/${id}.${USER_AVATARS_EXTENSION}`,
  )

  handleImageResponse(imagePath, res)

  next()
})

// Проксирует получение изображение для постов

const POST_IMAGES_DIR = 'data/blog/posts/images'
const POST_IMAGES_EXTENSION = 'jpg'

app.get('/blog/posts/image/:id', (req, res, next) => {
  const { id } = req.params

  const imagePath = path.resolve(
    DIRNAME,
    `${POST_IMAGES_DIR}/${id}.${POST_IMAGES_EXTENSION}`,
  )

  handleImageResponse(imagePath, res)
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
