const dfs=function(key,arr){
    for(let i=0;i<arr.length;i++){
        //console.log(arr[i].key,key,arr[i].key===key)
        if(arr[i].key===key)
            return arr[i]
        else if(arr[i].children!=undefined){
            let result=dfs(key,arr[i].children)
            if(Object.keys(result).length!=0)
                return result
        }
    }
    return {}
}
export default dfs