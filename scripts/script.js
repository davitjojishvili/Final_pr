
/*ცვლის main-ზე სურათებს*/

const main = document.querySelector(".main");

const backgrounds = [
    "../img/home_main_back.png",
    "../img/home_main_back_1.png",
    "../img/home_main_back_2.png",
];

let current = 0;

setInterval(() => {

    current = (current + 1) % backgrounds.length;

    main.style.backgroundImage =
    "url('" + backgrounds[current] + "')";
}, 5000);

/* ნაციონალების გაკეთებული კარუსელის ლოგიკა (რო გადავიდეს)*/

const container = document.querySelector('.product-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

const card = document.querySelector('.card');

const gap = 20;

let scrollAmount = card.offsetWidth + gap;

window.addEventListener("resize", () => {
    scrollAmount = card.offsetWidth + gap;
});

nextBtn.addEventListener('click', () => {
    container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});




/*სერვერიდან ინფოს წამოღება*/
const usersContainer = document.getElementById("users");

if(usersContainer){

    async function getUsers(){

        try{

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

            const users = await response.json();

            users.forEach(user => {

                usersContainer.innerHTML += `
                    <div class="user-card">
                        <h3>${user.name}</h3>
                        <p>${user.email}</p>
                    </div>
                `;

            });

        }catch(error){

            console.log("Error:", error);

        }

    }

    getUsers();

}

/*თავში რო დაგაბრუნოს*/
const top_btn = document.getElementById("top_btn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        top_btn.style.display = "block";
    }else{
        top_btn.style.display = "none";
    }

});

top_btn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


/*ორცხობილები DD*/
const cookieBox = document.getElementById("cookieBox");
const acceptCookie = document.getElementById("acceptCookie");

if(cookieBox && acceptCookie){

    if(localStorage.getItem("cookieAccepted")){
        cookieBox.style.display = "none";
    }

    acceptCookie.addEventListener("click", () => {

        localStorage.setItem("cookieAccepted", "true");

        cookieBox.style.display = "none";

    });

}


