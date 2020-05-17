module.exports = (text) => {
    let array = text.split(' at ')
    const task = array[0]
    const start = array[2]
    const location = array[1].split(' ')[0]
    const date = array[1].split(' ')[2]
    const result = {
        task,
        start,
        location,
        date
    }
    
    return result
}