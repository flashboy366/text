const typeInput = (input, action) => {
    // Filter out and ignore new line inputs
    if (action.text.slice(-1) !== '\n') {
        input = action.text
    }
    return input
}

export default typeInput