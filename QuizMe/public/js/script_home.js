$(document).ready(function () {
    $("#register-btn").click(async function () {
        let data = $("#register-form").serialize()
        try {
            let result = await axios.post('/QuizMe/register', data)
            let response = result.data
            if (response.success === true) {
                location.href = "/QuizMe"
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

    })
    $("#login-btn").click(async function () {
        let data = $("#login-form").serialize()
        let data_arr = $("#login-form").serializeArray()
        try {
            let result = await axios.post('/QuizMe/login', data)
            let response = result.data
            if (response.success === true) {
                // console.log(data_arr[0].value)
                if (data_arr[0].value === 'creator') {
                    location.href = "/QuizMeCreator"
                } else if (data_arr[0].value === 'candidate') {
                    location.href = "/QuizMeCandidate"
                }
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

    })
})