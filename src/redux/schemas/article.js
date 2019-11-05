import { normalize, schema } from 'normalizr'

const source = new schema.Entity('source', {})
const article = new schema.Entity('articles', {
  newsPaper: [source]
})

const normalizedData = normalize(articlesData, { articles: [article] })