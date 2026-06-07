const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    console.log({
        email,
        password
    });

    // TODO:
    // Integrate Supabase Auth

    window.location.href =
        "../dashboard/";
});
