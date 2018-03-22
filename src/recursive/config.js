const PEEPS = [
    {
        id:0,
        name:"Michelle",
        friends:[1,2,3]
    },{
        id:1,
        name:"Sean",
        friends:[0,3]
    },{
        id:2,
        name:"Kim",
        friends:[0,1,3]
    },{
        id:3,
        name:"David",
        friends:[1,2]
    }
];


const find = function(id){
    return PEEPS.find(function(p){
        return p.id == id
    })
}

export default find