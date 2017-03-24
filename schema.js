
import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
} from 'graphql'
import mdb from './mock.js'

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

const PowerType = new GraphQLObjectType({
    name: 'power',
    fields: {
        atk: {type: GraphQLInt},
        def: {type: GraphQLInt},
        spd: {type: GraphQLInt}
    }
})
const ItemType = new GraphQLObjectType({
    name: 'item',
    fields: {
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        slot: {type: GraphQLString},
        power: {type: PowerType}
    }
})

const UserType = new GraphQLObjectType({
    name: 'user',
    fields: {
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        age: {type: GraphQLString},
        items: {
            type: new GraphQLList(ItemType),
        },
    }
})

const userSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'users',
        fields: {
            users: {
                type: new GraphQLList(UserType),
                resolve: ()=>mdb.users
            }
        }
    })
})

export default userSchema