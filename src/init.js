import consoleFun from './console.js';
import errorFun from './error.js';
export default function init() {
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
        .slog-list-red{
            color:#800000
        }
        .slog-list-error{
            color: #F37777;
            font-size:12px;
        }
        .slog-list-blue{
            color:	#191970
        }
        .slog-list-blue-light{
            color:#4682B4;
        }
        em{
            color: #9370DB
        }
        .light{
            background:#FFF;
        }
        `
        var style = document.createElement("style");
        style.innerHTML = cssString
        document.querySelector("body").appendChild(style)
        var f = document.createElement("DIV");
        f.setAttribute('id','slog')
        document.querySelector("body").appendChild(f)
        let mainHtml = document.querySelector('#slog')
    //   let msglistDom = document.querySelector('#slog-list')
      let domBody = `
            <button class="slog-button" id="slog-btn">调试</button>
            <div class="slog-bg box-hide" id="slog-bg">
                <div class="slog-list-box" id="slog-box">
                    <div class="slog-list-title" id="slog-list-title">
                        <div class="slog-list-title-item light" data-name="slog-list-all" >all</div>
                        <div class="slog-list-title-item" data-name="slog-list-log">log</div>
                        <div class="slog-list-title-item" data-name="slog-list-error">error</div>
                    </div>
                    <div class="slog-list" id="slog-list-all"></div>
                    <div class="slog-list hide" id="slog-list-log"></div>
                    <div class="slog-list hide" id="slog-list-error"></div>
                </div>
            </div>
            
      `
        mainHtml.innerHTML=domBody
        window.allList=[]
        window.consoleList=[]
        window.errorList=[]
        var btn = document.querySelector('#slog-btn')
        var bg = document.querySelector('#slog-bg')
        var box = document.querySelector('#slog-box')
        
        
        btn.addEventListener("click", function(e){
            document.querySelector('#slog-bg').className = 'slog-bg'
            document.querySelector('#slog-btn').className = 'slog-button hide';
            // setTimeout(()=>{
                let msglistTitle = document.querySelector('#slog-list-title')
                msglistTitle.addEventListener("click", function(event){
                    [...document.querySelectorAll(`.slog-list-title-item`)].map(item=>item.className = 'slog-list-title-item');
                    [...document.querySelectorAll(`.slog-list`)].map(item=>item.className = 'slog-list hide')
                    document.querySelector(`#${event.target.dataset.name}`).className = 'slog-list';
                    event.target.className = 'slog-list-title-item light';
                });
            // },1000)

        });
        
        bg.addEventListener("click", function(e){
            document.querySelector('#slog-bg').className = 'slog-bg box-hide';
            document.querySelector('#slog-btn').className = 'slog-button ';
        });
        box.addEventListener("click", function(e){
            e.stopPropagation();
        });
        consoleFun();
        errorFun();

}