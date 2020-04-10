
export default function consoleFun() {
    
   
    // addHtml(111)
    // addHtml(222)
    
   
    if (console) {
        
        var _console = {
            log: console.log,
        };
        let mainHtml = document.querySelector('#slog')
        function type (i){
            return Object.prototype.toString.call(i).slice(8,-1)
        }
        function addObjectDom(e){

            let c = ``
            for(let i in e){
                c+=`<li>${addHtml(e[i])}</li>`
            }
            let d = `<div data-params="{[1,2,3]}" class="slog-item">
                        >${type(e)}
                        <ul style="display: none;">
                            ${c}
                        </ul>
                    </div>`

                    // let node=document.createElement("DIV");
                    // let textnode=node.insertAdjacentHTML(d);
                    // node.appendChild(textnode)
                    // mainHtml.appendChild(node) 
        }
        function addHtml(arg){
            for ( let item in arg){
                _console.log(type(item))
                // console.log(item)  
                // type(item) 
                // // let itemHtml='<li>'+type(arg[item])+' </li>';
                // let node=document.createElement("LI");
                // let textnode=document.createTextNode(type(arg[item]));
                // node.appendChild(textnode)
                // mainHtml.appendChild(node)
                if (type(arg[item]) == 'Array') {
                    addObjectDom(arg[item])
                } else if (type(arg[item]) == 'Object') {
                    
                }else {
                    let node=document.createElement("LI");
                    let textnode=document.createTextNode(type(arg[item]));
                    node.appendChild(textnode)
                    mainHtml.appendChild(node)  
                }

            }
        }

        
        console.log = function() {
            addHtml(arguments)
            _console.log.apply(this, Array.prototype.slice.call(arguments, 0));
        }
        console.error = function() {
        // // 做自己的处理
        let itemHtml='<li>111'+JSON.stringify(Object.values(arguments))+'</li>';
        // log.appendChild(itemHtml)
        log.innerHTML=itemHtml;
        _console.log( JSON.stringify(Object.values(arguments)))
        // Object.values(arguments)
        // // 调用原方法输出
        _console.log.apply(this, Array.prototype.slice.call(arguments, 0));
        }





        var btn = document.querySelector('.slog-item')
        btn.addEventListener("click", function(e){
            // document.getElementById("demo").innerHTML = "Hello World";
            // = 'block'
            // _console.log(e.target.children[0].style.display )
        });
        // warn、debug、error同理
    }  
    console.log(111)
    console.log(222)  
}
