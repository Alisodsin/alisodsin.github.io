let fmlurl = "https://dodend.000webhostapp.com/femaleNames.json",
    notwantedurl = "https://dodend.000webhostapp.com/notwanted.json",
    messagesurl = "https://dodend.000webhostapp.com/messages.json",
    fmlgiturl = `https://api.github.com/repos/alisodsin/alisodsin.github.io/contents/femaleNames.json`,
    notwantedgiturl = `https://api.github.com/repos/alisodsin/alisodsin.github.io/contents/males.json`,
    msgsgiturl = `https://api.github.com/repos/alisodsin/alisodsin.github.io/contents/messages.json`;

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
    let arr = [fmlurl, notwantedurl, messagesurl]
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
function range(x, y) {
    return {
        [Symbol.iterator]() {
            return {
                current: x,
                last: y,
                next() {
                    return this.current <= this.last ? { done: false, value: this.current++ } : { done: true }
                }
            }
        }
    }
}
function* sequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
}