function getItems(){
    db.collection("products").get().then((querySnapshot) => {
        let products = [];
        querySnapshot.forEach((doc) => {
            products.push({
                // image: doc.data().image,
                name: doc.data().name,
                // price: doc.data().price,
            })
        });
        // generateItems(products)
        console.log(products)
    
    });
}

getItems()