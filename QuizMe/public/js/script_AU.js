$(document).ready(function () {
    $("#update-btn").click(async function () {
        let data = $("#update-form").serialize()
        try {
            let result = await axios.post('/QuizMe/accountUpdate', data)
            let response = result.data
            if (response.success === true) {
                location.href = "/QuizMe"
                return
            }
            throw new Error(response)
        }
        catch (e) {
            if (e.response) {
                $('#error-box-up').text(e.response.data.error)
            }
            else {
                $('#error-box-up').text(e.message)
            }
        }

    })
})