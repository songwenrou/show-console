
export default function consoleFun() {
    if (console) {
        var _console = {
            log: console.log,
        };
        let mainHtml = document.querySelector('#slog-list-log');
        let allHtml = document.querySelector('#slog-list-all');
        let unsentList = []
        function addList(arg){
            let node=document.createElement("DIV");
            unsentList.push(arg)
            allList.push({
                type:'console',
                data:arg
            })
            // if(mainHtml){
                unsentList.forEach(item => {
                    
                    allHtml.appendChild(addDom(item)) 
                    mainHtml.appendChild(addDom(item)) 
                });
                unsentList = []
            // }
             
            allList.push(JSON.stringify(arg));
            consoleList.push(JSON.stringify(arg));

        }
        function addDom (item){
            let node=document.createElement("DIV");
                    // _console.log(item)
                    node.className="slog-list-item";
                    node.innerHTML= Object.values(item).reduce((domStr, i)=>{
                        let aa = (i)=>{
                            if(type(i) == 'Object' || type(i) == 'Array'){
                            
                                return domStr +''+ Object.entries(i).reduce((itemDomStr, arr , index)=>{
                                    return `${itemDomStr}<div class="slog-list-child"><span class="slog-list-red">${arr[0]}</span>:${aa(arr[1])}</div>`
            
                                },`<span class="slog-list-blue-light"><em> ${type(i)} </em>: ${JSON.stringify(i)}</span>`)
            
                            }else if(i){
                                return `${domStr}<span class="slog-list-blue"><span class="slog-list-blue-light"><em> ${type(i)} </em></span>${i}</span><br/>`
                            }
                            // _console.log(i)
         
                        }
                        return domStr+aa(i)
                    },'');
                    node.addEventListener("click",childrenDomClick);
                    // let allnode = JSON.parse(JSON.stringify(node))

                    
            return  node
        }
        function type (i){
            return Object.prototype.toString.call(i).slice(8,-1)
        }

        
        console.log = function() {
            addList(arguments)
            _console.log.apply(this, Array.prototype.slice.call(arguments, 0));
        }
        console.error = function() {
        _console.log( JSON.stringify(Object.values(arguments)))
        // // 调用原方法输出
        _console.log.apply(this, Array.prototype.slice.call(arguments, 0));
        }


        function findFatherDom(childDom){
            if(childDom.parentNode.className == 'mainHtmlitem' || childDom.parentNode.className == 'slog-list-child'){
                return childDom.parentNode
            }
            if(childDom.getAttribute('id')=='slog' ){
                return ''
            }
            return findFatherDom(childDom.parentNode)
        }
        function childrenDomClick(e){
        let dom 
        if(e.target.className == 'slog-list-item' || e.target.className == 'slog-list-child'){
            dom = e.target;
        }
 
        if(e.target){
            dom = findFatherDom(e.target)
        }
        if(!dom) return
        dom.setAttribute('showchild', dom.getAttribute("showchild") == 't'? 'f' : 't')
        }
    }  
}
