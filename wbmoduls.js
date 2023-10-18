let fmls = "https://dodend.000webhostapp.com/femaleNames.json",
    mls = "https://dodend.000webhostapp.com/notwanted.json",
    msgs = "https://dodend.000webhostapp.com/messages.json",
    fmlsGit = `https://api.github.com/repos/alisodsin/alisodsin.github.io/contents/femaleNames.json`,
    mlsGit = `https://api.github.com/repos/alisodsin/alisodsin.github.io/contents/males.json`,
    msgsGit = `https://api.github.com/repos/alisodsin/alisodsin.github.io/contents/messages.json`;

async function fetchJSONAndConvertToSet(url) {
    if (url.includes("github")) {
        let x = await fetch(url)
        x = await x.json()
        return [new Set(JSON.parse(decodeURIComponent(atob(x.content)))), x.sha]
    }
    let x = await fetch(url)
    x = await x.json()
    return new Set(x)
}
function downloadObj(obj, filename) {
    const json = JSON.stringify(obj);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.json`;
    a.click();
    URL.revokeObjectURL(url);
}
async function calculateSetSHA(set) {
    const sortedArray = Array.from(set).sort();
    const setString = JSON.stringify(sortedArray);
    const encoder = new TextEncoder();
    const encodedData = encoder.encode(setString);
    const hashBuffer = await crypto.subtle.digest('SHA-1', encodedData);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex;
}
function generateRandomString() {
    var chars = "abcdefghijklmnopqrstuvwxyz";
    var randomString = "";
    for (var i = 0; i < 8; i++) {
        var randomIndex = Math.floor(Math.random() * chars.length);
        randomString += chars[randomIndex];
    }
    return randomString;
}
async function getAll() {
    let arr = [fmls, mls, msgs]
    let arrr = arr.map(x => fetch(x))
    let data = await Promise.all(arrr).then(e => {
        let ar = []
        e.forEach(x => ar.push(x.json()))
        return Promise.all(ar);
    }).then(e => e).catch(r => r)
    return data;
}
function sleep(n) {
    return new Promise((r, _) => {
        setTimeout(r, n, "done")
    })
}
export {
    fmls,
    fmlsGit,
    msgs,
    msgsGit,
    mls,
    mlsGit,
    fetchJSONAndConvertToSet,
    calculateSetSHA,
    generateRandomString,
    downloadObj,
    getAll,
    sleep
}