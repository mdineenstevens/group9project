$(document).ready(function () {
    $("#register-btn").click(async function () {
        let data = $("#register-form").serialize()
        try {
            let result = await axios.post('/register', data)
            console.log(result)
            let response = result.data
            if (response.success === true) {
                location.href = "/login"
                return
            }
            throw new Error(response)
        }
        catch (e) {
            if (e.response) {
                $('#error-box-reg').text(e.response.data.error)
            }
            else {
                $('#error-box-reg').text(e.message)
            }
        }

    });

    $("#login-btn").click(async function () {
        let data = $("#login-form").serialize()
        try {
            let result = await axios.post('/login', data)
            console.log(result)
            let response = result.data
            if (response.success === true) {
                location.href = "/login"
                return
            }
            throw new Error(response)
        }
        catch (e) {
            if (e.response) {
                $('#error-box-login').text(e.response.data.error)
            }
            else {
                $('#error-box-login').text(e.message)
            }
        }
    });
})