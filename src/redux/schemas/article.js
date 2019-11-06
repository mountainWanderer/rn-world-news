import { schema } from 'normalizr'

const source = new schema.Entity(
    'sources',
    {}
)

const article = new schema.Entity(
    'articles',
    { source: source },
    {
        idAttribute: (value, parent, key) => {
            /**
             * Do this because the article object from 
             * API doesn't have ID field
             */
            let dateAndUrl = `${value['publishedAt']}-${value['url']}`
            let hashedDateAndUrl = dateAndUrl
            //TODO trasform string in hash
            return hashedDateAndUrl
        },
        mergeStrategy: (entityA, entityB) => ({
            ...entityA,
            ...entityB
        }),
        processStrategy: (value, parent, key) => {
            let obj = Object.assign({}, value)
            let {
                id = '',
                name = ''
            } = value.source

            if (id === '' || id === null) {
                obj['source'] = {
                    id: name !== '' ? name.replace(/\s+/g, '') : 'Anonymous',
                    name: name !== '' ? name.replace(/\s+/g, '') : 'Anonymous'
                }
            }
            
            return obj
        }
    }
)

export {
    article
}