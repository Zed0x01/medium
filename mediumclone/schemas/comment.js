export default {
    name:'comment',
    title:'Comment',
    type:'document',
    fields:[
        {
            name:'name',
            type:'string'
        },
        {
            title:'Approved',
            name:"approved",
            type:'boolean',
            description:"Comments will not shown on site until be approved"
        },
        {
            name:'email',
            type: 'string',
        },
        {
            name:'comment',
            type: "string"
        },
        {
            name:'post',
            type: 'reference',
            to:{type: 'post',title:'Post'}
        }

    ]
}