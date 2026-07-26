
function getproducts(perameter = localStorage.getItem("para")) {
    document.querySelector('b').innerText = JSON.parse(localStorage.getItem('cartItems')).length;
    document.querySelector('.dropdown').value = perameter;

    if (perameter == "price low to high") {
        const products = JSON.parse(localStorage.getItem('products'));
        for (const key in products) {
            products[key].sort((a, b) => { return a.price - b.price });
        }
        localStorage.setItem('products', JSON.stringify(products));
        location.href = "index.html";

    } else if (perameter == "price high to low") {
        const products = JSON.parse(localStorage.getItem('products'));
        for (const key in products) {
            products[key].sort((a, b) => { return b.price - a.price });
        }
        localStorage.setItem('products', JSON.stringify(products));
        location.href = "index.html";
    }

    if (perameter == "price low to high") {
        const products = JSON.parse(localStorage.getItem('products'));
        for (const key in products) {
            products[key].sort((a, b) => { return a.price - b.price });
        }
        localStorage.setItem("filterdata", JSON.stringify(products));

    } else if (perameter == "price high to low") {
        const products = JSON.parse(localStorage.getItem('products'));
        for (const key in products) {
            products[key].sort((a, b) => { return b.price - a.price });
        }
        localStorage.setItem("filterdata", JSON.stringify(products));

    } else if (perameter.length == 0) {
        localStorage.setItem("filterdata", localStorage.getItem("products"));
    } else {
        const products = JSON.parse(localStorage.getItem('products'));
        for (const key in products) {
            console.log(key);
            var temp = products[key].filter((data) => {
                return data.company.toLowerCase().includes(perameter.toLowerCase());
            });
            products[key] = temp;
        }
        localStorage.setItem("filterdata", JSON.stringify(products));
    }

    const products = JSON.parse(localStorage.getItem("filterdata"));

    for (const key in products) {

        let section = document.createElement('section');
        let h2 = document.createElement('h2');

        h2.append(key);
        section.appendChild(h2);

        let main = document.createElement('main');

        for (const element of products[key]) {
            let div = document.createElement('div')
            let h3 = document.createElement('h3');
            let img = document.createElement('img');
            let h4 = document.createElement('h4');
            let h5 = document.createElement('h5');
            let p = document.createElement('p');
            let button = document.createElement('button');

            h3.append(element.company);
            h4.append(element.model);
            h5.append(element.price);
            p.append(element.description);
            img.src = element.image;
            button.append("Add To Cart");

            div.appendChild(h3);
            div.appendChild(img);
            div.appendChild(h4);
            div.appendChild(h5);
            div.appendChild(p);
            div.appendChild(button)

            main.appendChild(div);
        }

        section.appendChild(main);
        document.querySelector('.wrapper').appendChild(section);
    }
}

getproducts();
document.querySelector('.dropdown').onchange = function (e) {
    localStorage.setItem("para", e.target.value);
    location.href = "index.html"
}

document.addEventListener('click', function (e) {
    if (e.target.tagName == "BUTTON") {
        var cartData = JSON.parse(localStorage.getItem('cartItems'))
        cartData.push(e.target.parentElement.children[2].innerText);
        console.log(cartData);
        localStorage.setItem("cartItems", JSON.stringify(cartData));
    } else if (e.target.tagName == "SPAN") {
        location.href = "cart.html"
        return;
    }
    location.href = "index.html"
});