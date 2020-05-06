
export default function errorFun() {
    function addDom (msg){
        if(!msg){
            return;
        }
        let node=document.createElement("DIV");
        node.className="slog-list-item";
        node.innerHTML= `
        <div class="slog-list-error">
            <div>异常信息:${msg.errorMessage}</div>
            <div>异常文件路径:${msg.scriptURI}</div>
            <div>异常行号:${msg.lineNo}</div>
            <div>异常列号:${msg.columnNo}</div>
            <div>异常堆栈信息:${msg.error}</div>
        </div>
        `;
        // node.addEventListener("click",childrenDomClick);
        
        return  node
    }
    
    onerror = function(errorMessage, scriptURI, lineNo, columnNo, error) {
        let msg={
            errorMessage:errorMessage,
            scriptURI:scriptURI,
            lineNo:lineNo,
            columnNo:columnNo,
            error:error
        }
        
        let mainHtml = document.querySelector('#slog-list-error');
        mainHtml.appendChild(addDom(msg)) 
        let allHtml = document.querySelector('#slog-list-all');
        allHtml.appendChild(addDom(msg)) 
        // console.log(a)
        // console.log('errorMessage: ' + errorMessage); // 异常信息
        // console.log('scriptURI: ' + scriptURI); // 异常文件路径
        // console.log('lineNo: ' + lineNo); // 异常行号
        // console.log('columnNo: ' + columnNo); // 异常列号
        // console.log('error: ' + error); // 异常堆栈信息
        
    };
}

// console.log(a);