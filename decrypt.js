(_=>{_=async a=>{A="toString",B=CryptoJS,D=location;alert(a.length>64?"":B.AES.decrypt("[DATA HERE]",D.protocol+"//"+D.hostname+D.pathname+[...new Uint8Array(await crypto.subtle.digest("SHA-512",new TextEncoder().encode(a)))].map(b=>b[A](16).padStart(2,"0")).join(""))[A](B.enc.Utf8))},C=document,e=C.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.min.js";e.onload=$=>{_(prompt())};C.body.appendChild(e)})()
