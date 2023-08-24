module.exports = (temp, items) => {
    // console.log(temp , items)
    
    let output = temp.replace(/{%DOCKERNAME%}/g, items.containerName)
    output = output.replace(/{%IMAGE%}/g, items.image)
    output = output.replace(/{%DESCRIPTION%}/g, items.description)
    output = output.replace(/{%LINK%}/g, items.link)
    return output
}