const getCss = document.getElementById('getCSS')
const getJs = document.getElementById('getJS')
const getHtml = document.getElementById('getHTML')
const getXml = document.getElementById('getXML')

getCss.onclick = () => {
    // console.log('点击了');
    //创建HttpQequest对象
    const request = new XMLHttpRequest()  //readstate = 0
    //调用对象的open方法open(method,url)
    request.open("GET","./style.css")  //readstate = 1
    //监听成功or失败
    request.onreadystatechange = ()=>{
        if (request.readyState === 4){
            if (request.status >= 200 && request.status < 300){
                //创建style标签
                const style = document.createElement('style')
                //写入内容
                style.innerHTML = request.response
                //插入道body中
                document.head.appendChild(style)
            }else {
                alert('加载CSS失败了')
            }
        }       
    }
    request.send()  //readstate = 2   //4:开始下载  //5：下载完成
}

getJs.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open("GET","2.js")
    request.onreadystatechange = ()=>{
        if (request.readyState === 4){
            if (request.status >= 200 && request.status < 300){
                const script = document.createElement('script')
                script.innerHTML = request.response
                document.body.appendChild(script)
            }else {
                alert('加载JS失败了')
            }
        }
    }
    request.send()
}

getHtml.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open("GET","3.html")
    request.onreadystatechange = ()=>{
        if (request.readyState === 4){
            if (request.status >= 200 && request.status < 300){
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)            
            }else {
                alert('加载HTML失败了')
            }
        }
    } 
    request.send()
}

getXml.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/4.xml");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
          const dom = request.responseXML
          const text = dom.getElementsByTagName("warning")[0].textContent
          console.log(text.trim())
        }
    };
    request.send()
};

getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("get", "/5.json");
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        // console.log(typeof request.response);
        // console.log(request.response);
        const bool = JSON.parse(request.response);
        console.log(typeof bool);
        console.log(bool);
      }
    };
    request.send();
  };

    
let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", `/page${n+1}`);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response);
            array.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item.id;
                xxx.appendChild(li);
            });
            n+=1
        }
    };
    request.send();
};