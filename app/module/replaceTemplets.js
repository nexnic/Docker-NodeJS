module.exports = (temp, items) => {
    let output = temp.replace(/{%DOCKERNAME%}/g, items.dockername)
    output = output.replace(/{%IMAGE%}/g, items.image)
    output = output.replace(/{%DESCRIPTION%}/g, items.description)
    return output
}