import consoleFun from './console.js';

(()=>{
    var cssString = `
    .slog-bg{
        background: rgba(0,0,0,0.5);
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        color:#666
    }
    .slog-button{
        background:#07c160;
        box-shadow: 0px 0px 5px #07c160;
        height:30px;
        width:60px;
        color:#fff;
        margin: 0;
        padding: 0;
        border: 1px solid transparent;
        outline: none;
        position: absolute;
        bottom: 100px;
        right: 10px;
        border-radius: 4px;
        
    }
    .slog-list-box{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background:#FFF;
    }
    .slog-list{
        max-height: 75vh;
        min-height:30vh;
        width: 100%;
        overflow-y: scroll;
    }
    .slog-list-item{
        border-bottom: 1px solid #eee;
        padding:5px;
        dispaly:flex;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding-right:30px;
    }
    .slog-list-title{
        display:flex;
        border-bottom: 1px solid #9999;
    }
    .slog-list-title-item{
        padding:5px 10px; 
        border-right: 1px solid #999;
        background:#eee;
    }
    .hide{
        display:none
    }
    .box-hide{
        visibility:hidden
    }
    .slog-list-child{
        padding-left:20px;
        line-height: 30px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        display:none;
    }
    .slog-list-child-index:last-child{
        border-bottom: 1px solid #ccc;
    }
    .slog-list-child-index {
        width: 20px;
        text-align: center;
        border-left: 1px solid #ccc;
        display: inline-block;
        margin-right: 10px;
        color: #ccc;
    }
    .slog-list-item[showchild=t] >.slog-list-child{
        display:block
    }
    .slog-list-child[showchild=t] >.slog-list-child{
        display:block
    }
    `
    var style = document.createElement("style");
    style.innerHTML = cssString
    document.querySelector("body").appendChild(style)
    var f = document.createElement("DIV");
    f.setAttribute('id','slog')
    document.querySelector("body").appendChild(f)

})()
window.slogInit = ()=>{
let mainHtml = document.querySelector('#slog')
let domBody = `
        <button class="slog-button" id="slog-btn">调试</button>
        <div class="slog-bg box-hide" id="slog-bg">
            <div class="slog-list-box" id="slog-box">
                <div class="slog-list-title">
                    <div class="slog-list-title-item">all</div>
                    <div class="slog-list-title-item">log</div>
                    <div class="slog-list-title-item">error</div>
                </div>
                <div class="slog-list"id="slog-list">
                </div>
            </div>
        </div>
        
`
mainHtml.innerHTML=domBody
window.allList=[]
window.consoleList=[]

// console.log(mainHtml)
// window.onload = function(){
    
    var btn = document.querySelector('#slog-btn')
    var bg = document.querySelector('#slog-bg')
    var box = document.querySelector('#slog-box')
    btn.addEventListener("click", function(e){
        document.querySelector('#slog-bg').className = 'slog-bg'
        document.querySelector('#slog-btn').className = 'slog-button hide';

        easyAdd()
    });
    function easyAdd(){
        let listDom = document.querySelector('#slog-list')
        // allList.forEach(item => {
        //     let node=document.createElement("DIV");
        //     node.innerHTML=JSON.stringify(item);
        //     node.className="slog-list-item";
        //     // console.log(listDom)
        //     setTimeout(()=>{
        //         listDom.appendChild(node) 
        //     },100)
              
        // });
    }
    bg.addEventListener("click", function(e){
        document.querySelector('#slog-bg').className = 'slog-bg box-hide';
        document.querySelector('#slog-btn').className = 'slog-button ';
    });
    box.addEventListener("click", function(e){
        // console.log(e)
        // document.querySelector('#slog-bg').className = 'slog-bg hide'
        // document.querySelector('#slog-btn').className = 'slog-button '
        e.stopPropagation();
        // if(e.preventDefault){
            
        // }
        // else{
        // window.event.returnValue == false;
        // }
    });
// }
consoleFun()

}


// let mainHtml = document.querySelector('#slog')
// // let btn=document.createElement("BUTTON");
// // btn.innerText('调试页面');
// var button = document.createElement("input");
// button.setAttribute("type", "button");
// button.setAttribute("value", 111);
// // button.setAttribute("id", id);
// // button.setAttribute("class", class);
// button.style.width = "12%";
// // button.setAttribute("onclick", "function(this.id)");
// mainHtml.appendChild(button)

// console.log(slogInit)
// export default slogInit