
// function to run for the hambuger menu and navbar
const checkNavBar =
    $(document).ready(() => {
        const stickNavBar = document.querySelector(".navbar");
        $(window).scroll(() => {
            if (this.scrollY > 0)
                stickNavBar.classList.add("sticky");
            else
                stickNavBar.classList.remove("sticky");
        });

        const menuClick = document.querySelector(".menu-btn");
        const menuList = document.querySelector(".menu-list");
        menuClick.addEventListener("click", () => {
            menuClick.classList.toggle("active");
            menuList.classList.toggle("active");
            console.log("checking");
        })

        document.querySelectorAll(".nav-link").forEach(time =>
            time.addEventListener("click", () => {
                menuClick.classList.remove("active");
                menuList.classList.remove("active");
            }))

    });

// check form input and give users warning
const checkForm =
    $(document).ready(() => {
        let form = document.querySelector('form');
        let check_message = document.getElementById('message');


        form.addEventListener('submit', handleSubmit);

        function handleSubmit(event) {

            //check input is empty or not. 
            if (!isNaN(form.name.value) && !isNaN(form.email.value) && !isNaN(check_message.value)) {
                alert("You can't submit it with an empty form. Please check again!");
                console.warn("You must enter some data to submit this form");
            }
            else {
                let check = 0;
                console.log("======= Form Submission =======");
                //Username
                if (!isNaN(form.name.value)) {
                    console.log("\tUsername   : no submission");
                    check++;
                }
                else
                    console.log("\tUsername   : " + form.name.value);
                //Email
                if (!isNaN(form.email.value)) {
                    console.log("\tEmail      : no submission");
                    check++;
                }
                else
                    console.log("\tEmail      : " + form.email.value)

                if (check_message.value === "") {
                    console.log("\tMessage      : no submission");
                    check++;
                }
                else
                    console.log("\tMessage      : " + check_message.value)
                if (check === 0)
                    alert("Succefully sent the message. See you soon!");
                else
                    alert("Please enter all the information before sending the form!");
            }

            event.preventDefault();
        }

    });