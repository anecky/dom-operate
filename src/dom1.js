window.dom1 = {
    find(selector,scope){
        return (scope||document).querySelectorAll(selector)
    },
    style(node,name,value){
        if(arguments.length === 3){
            return node.style[name] = value
        }else if(typeof name === String){
            return node.style[name]
        }else if(name instanceof Object){
            let object = name
            for(let key in object){
                node.style[key] = object[key]
            }
        }
    },
    each(nodeList,fn){
        let i=0
        for(i=0;i<nodeList.length;i++){
            fn(null,nodeList[i])
        }
    }
}