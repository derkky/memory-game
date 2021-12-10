import distinctColors from "distinct-colors"
import uniqid from "uniqid"

const generateRandomCards = (n) => {
    const colors = distinctColors({count: n})

    const rgbStrings = colors.map(color => {
        const [r, g, b] = color._rgb 
        const rgbString = `rgb(${r},${g},${b})`
        return rgbString
    })
    
    const cards = rgbStrings.map(rgbString => {
        const card = {id: uniqid(), color: rgbString} 
        return card
    })

    return cards
}

export default generateRandomCards


