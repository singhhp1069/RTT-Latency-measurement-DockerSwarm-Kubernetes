var http = require('http');
const {Docker} = require('node-docker-api');
const docker = new Docker({ socketPath: '/var/run/docker.sock' });


module.exports = {

    getNodes : function (callback){
        docker.node.list().then(node =>{
            callback(node);
        })
    },

    getNodeById : function (node_id,callback){
        var node_detail = docker.node.get(node_id);
        node_detail.status().then(result=>{
            callback(result);
        })
    },
    updateNodeAddLable : function (node_id,label_tag,callback){
        var node_detail = docker.node.get(node_id);
            node_detail.status().then(result=>{
                var label = {
                    "version":result.data.Version.Index,
                    "Role": result.data.Spec.Role,
                    "Membership":"accepted",
                    "Availability":result.data.Spec.Availability,
                    "Labels": label_tag
                };
                    node_detail.update(label).then(response=>{
                        var node_detail = docker.node.get(node_id);
                            node_detail.status().then(result=>{
                                callback(result);
                            })
                    })
            }); 
    },

}