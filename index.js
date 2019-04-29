function getImages() {
    axios.get('./assets/data/dogs.json').then(res => {
        console.log(res.data)
    })
}