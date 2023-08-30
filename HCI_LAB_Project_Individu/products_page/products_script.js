var LIST_PRODUCT = [{
    id: 0,
    name: "Whole Almonds", 
    size: "(King Size)",
    description: "This HERSHEY''S Milk Chocolate with Almonds King Size Candy Bar is more than just a candy bar. It's a chance to stop and savor life’s sweeter side. Each bite is filled with crunchy whole almonds and classic HERSHEY’S Milk Chocolate.",
    price: "IDR 45,000"
}, {
    id: 1,
    name: "Special Dark",
    size: "(King Size)",
    description: "It's called 'special' for a reason. This HERSHEY'S SPECIAL DARK Mildly Sweet Chocolate Candy Bar is perfect for anyone who prefers an intense chocolate flavor.",
    price: "IDR 50,000"
}, {
    id: 2,
    name: "Cookies 'n' Cream",
    size: "(King Size)",
    description: "If you like cookies and cream ice cream, then you’ll LOVE the delicious combination of crunchy chocolate cookie bits and smooth white creme. HERSHEY'S COOKIES 'N' CREME Candy Bars pack this classic flavor combo into each delicious bite.",
    price: "IDR 50,000"
}, {
    id: 3,
    name: "Milk Chocolate",
    size: "(Standard Bar)",
    description: "There’s happy, and then there’s HERSHEY'S Happy. Made of delicious, gluten-free chocolate, this HERSHEY'S Milk Chocolate Bar makes life delicious!",
    price: "IDR 30,000"
}, {
    id: 4,
    name: "Milk Chocolate",
    size: "(Snack Size)",
    description: "There’s happy, and then there’s HERSHEY'S Happy. Made of delicious, gluten-free chocolate, this HERSHEY'S Milk Chocolate Bar makes life delicious! Hershey's Milk Chocolate Snack Size Bars. Individually wrapped snack size candy, Perfect for everyday snacking. Hershey's Milk Chocolate Snack Size Bars is a gluten-free and kosher chocolate candy bar.",
    price: "IDR 60,000"
}, {
    id: 5,
    name: "Milk Chocolate",
    size: "(World's Largest)",
    description: "No, you’re not dreaming, but this 5-pound candy bar of HERSHEY'S Milk Chocolate goodness is a chocolate lover’s dream come true! Give five pounds of candy bar love as a gift, or start dropping hints for one for yourself, anytime!",
    price: "IDR 300,000"
}];

console.log(LIST_SKILLS);

function handleClickByIdx(idx) {
    document.getElementById("modal").style.display = 'block';
    document.getElementById("modal_title").innerHTML = LIST_PRODUCT[idx].name;
    document.getElementById("modal_size").innerHTML = LIST_PRODUCT[idx].size;
    document.getElementById("modal_description").innerHTML = LIST_PRODUCT[idx].description;
    document.getElementById("modal_price").innerHTML = LIST_PRODUCT[idx].price;

    switch(idx){
        case 0: {
            document.getElementById("modal_img_1").style.display = 'block';
            break;
        }
        case 1: {
            document.getElementById("modal_img_2").style.display = 'block';
            break;
        }
        case 2: {
            document.getElementById("modal_img_3").style.display = 'block';
            break;
        }
        case 3: {
            document.getElementById("modal_img_4").style.display = 'block';
            break;
        }
        case 4: {
            document.getElementById("modal_img_5").style.display = 'block';
            break;
        }
        case 5: {
            document.getElementById("modal_img_6").style.display = 'block';
            break;
        }
    }
}

function closeButton() {
    document.getElementById("modal").style.display = 'none';
    document.getElementById("modal_title").innerHTML = "";
    document.getElementById("modal_size").innerHTML = "";
    document.getElementById("modal_description").innerHTML = "";
    document.getElementById("modal_price").innerHTML = "";
    hideAllImages();
}

function hideAllImages(){
    document.getElementById("modal_img_1").style.display = 'none';
    document.getElementById("modal_img_2").style.display = 'none';
    document.getElementById("modal_img_3").style.display = 'none';
    document.getElementById("modal_img_4").style.display = 'none';
    document.getElementById("modal_img_5").style.display = 'none';
    document.getElementById("modal_img_6").style.display = 'none';
}