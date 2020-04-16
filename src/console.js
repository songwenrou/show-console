
export default function consoleFun() {
    
   
    // addHtml(111)
    // addHtml(222)
    
   
    if (console) {
        
        var _console = {
            log: console.log,
        };
        let mainHtml = document.querySelector('#slog-list');
        let unsentList = []
        function addList(arg){
            let node=document.createElement("DIV");
            unsentList.push(arg)
            
            if(mainHtml){
                // node.innerHTML=JSON.stringify(arg);
                // node.className="slog-list-item";
                // mainHtml.appendChild(node)
                unsentList.forEach(item => {
                    let node=document.createElement("DIV");
                    // _console.log(item)
                    node.className="slog-list-item";
                    node.innerHTML=addDom(item);
                    node.addEventListener("click",childrenDomClick);
                    // setTimeout(()=>{
                    // },100)
                    mainHtml.appendChild(node) 
                    
                });
                unsentList = []
            }
             
            allList.push(JSON.stringify(arg));
            consoleList.push(JSON.stringify(arg));

        }
        function addDom (item){
            _console.log(item)
            return  Object.values(item).reduce((domStr, i)=>{
                let aa = (i)=>{
                    if(type(i) == 'Object'){
                    
                        return domStr +''+ Object.entries(i).reduce((itemDomStr, arr , index)=>{
                            // return itemDomStr + '<div class="slog-list-child"><div class="slog-list-child-index">'+index+'</div>'+ arr[0] +':'+ '<em>> Object</em>' + aa(arr[1])+'</div>' 
                            return `${itemDomStr}<div class="slog-list-child"  onclick="childrenDomClick()"><div class="slog-list-child-index">${index}</div>${arr[0]}:${aa(arr[1])}</div>`
    
                        },'<em> Object </em>: '+JSON.stringify(i))
    
                    }else{
                        return domStr + i + '<br/>'
                    }
                    
 
                }
                return domStr+aa(i)
                // if(type(i) == 'Object'){
                    
                //     return domStr + Object.entries(i).reduce((itemDomStr, arr , index)=>{
                //         return itemDomStr + '<div class="slog-list-child">>&nbsp;'+index+':&nbsp;'+ arr[0] +':'+ aa(arr[1])+'</div>'

                //     },'[Object] <br/>')

                // }else{
                //     return domStr + i + '<br/>'
                // }
                
            },'')
            
        }
        // function easyAdd(){
            // let listDom = document.querySelector('#slog-list')
           
        // }
        function type (i){
            return Object.prototype.toString.call(i).slice(8,-1)
        }
        function addObjectDom(e){

            // let c = ``
            // for(let i in e){
            //     c+=`<li>${addHtml(e[i])}</li>`
            // }
            // let d = `<div data-params="{[1,2,3]}" class="slog-item">
            //             >${type(e)}
            //             <ul style="display: none;">
            //                 ${c}
            //             </ul>
            //         </div>`

                    // let node=document.createElement("DIV");
                    // let textnode=node.insertAdjacentHTML(d);
                    // node.appendChild(textnode)
                    // mainHtml.appendChild(node) 
                    // var element = document.getElementsByTagName('p')[0];
                    // var txt = document.createTextNode('新增文本内容'); //创建文本节点
                    // element.appendChild(txt); //添加文本节点
        }
        function addHtml(arg){
            // for ( let item in arg){
            //     _console.log(type(item))
            //     // console.log(item)  
            //     // type(item) 
            //     // // let itemHtml='<li>'+type(arg[item])+' </li>';
            //     // let node=document.createElement("LI");
            //     // let textnode=document.createTextNode(type(arg[item]));
            //     // node.appendChild(textnode)
            //     // mainHtml.appendChild(node)
            //     if (type(arg[item]) == 'Array') {
            //         addObjectDom(arg[item])
            //     } else if (type(arg[item]) == 'Object') {
                    
            //     }else {
            //         let node=document.createElement("LI");
            //         let textnode=document.createTextNode(type(arg[item]));
            //         node.appendChild(textnode)
            //         mainHtml.appendChild(node)  
            //     }

            // }
        }

        
        console.log = function() {
            addList(arguments)
            _console.log.apply(this, Array.prototype.slice.call(arguments, 0));
        }
        console.error = function() {
        // // 做自己的处理
        // let itemHtml='<li>111'+JSON.stringify(Object.values(arguments))+'</li>';
        // log.appendChild(itemHtml)
        // log.innerHTML=itemHtml;
        _console.log( JSON.stringify(Object.values(arguments)))
        // Object.values(arguments)
        // // 调用原方法输出
        _console.log.apply(this, Array.prototype.slice.call(arguments, 0));
        }


        
        function childrenDomClick(e){
        let dom 
        // console.log(e.target.className)
        if(e.target.className == 'slog-list-item' || e.target.className == 'slog-list-child'){
            dom = e.target;
        }
        // if(e.target.className == 'slog-list-child'){
        //     dom = e.target;
        // }

        if(e.target.className == ''){
            console.log(e.target.parentNode)
        }
        // console.log()
        dom.setAttribute('showchild', dom.getAttribute("showchild") == 't'? 'f' : 't')
        }

        // var btn = document.querySelector('.slog-item')
        // btn.addEventListener("click", function(e){
        //     // document.getElementById("demo").innerHTML = "Hello World";
        //     // = 'block'
        //     // _console.log(e.target.children[0].style.display )
        // });
        // warn、debug、error同理
    }  
}
