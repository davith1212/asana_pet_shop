function getImages() {
    axios.get('./assets/data/dogs.json').then(res => {
        res.data.dogs.map((item, index) => {
            $('#images')
            .append(
                `<li 
                    onclick="viewImage('${item.image}')" 
                    style="background-image: url('${item.image}');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat"
                    role="img"
                    aria-label="Cute Puppy Image #${index}"
                >
                </li>`
            )
        })
    })
}