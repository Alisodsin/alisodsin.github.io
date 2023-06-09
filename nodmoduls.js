let fmlgiturl = `https://api.github.com/repos/alisodsin/alisodsin.github.io/contents/femaleNames.json`,
    notwantedgiturl = `https://api.github.com/repos/alisodsin/alisodsin.github.io/contents/males.json`,
    msgsgiturl = `https://api.github.com/repos/alisodsin/alisodsin.github.io/contents/messages.json`;

async function fetchJSONAndConvertToSet(url) {
    let x = await fetch(url)
    x = await x.json()
    return new Set(JSON.parse(decodeURIComponent(atob(x.content))))
}
module.exports = {
    fmls: fmlgiturl,
    msgs: msgsgiturl,
    mls: notwantedgiturl,
    fetchJSONAndConvertToSet
}; 