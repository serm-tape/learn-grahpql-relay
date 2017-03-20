
import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt
} from 'graphql'

let count = 0

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            count:{
                type: GraphQLInt,
                resolve: () => count
            }
        }
    }),
    mutation: new GraphQLObjectType({
        name: 'RootMutationType',
        fields: {
            updateCount: {
                type: GraphQLInt,
                description: 'update the count',
                resolve: () => {
                    count += 1
                    return count
                }
            }
        }
    })
})

export default schema