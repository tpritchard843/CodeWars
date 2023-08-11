function gimme(arr) {
    return arr.indexOf([...arr].sort((a,b) => a-b)[1]);
}