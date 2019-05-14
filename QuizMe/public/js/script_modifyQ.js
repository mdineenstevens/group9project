$(document).ready(function () {
    $("#CreateQues-btn").click(async function () {
        let data = $("#CreateQues-form").serialize()
        try {
            let result = await axios.post('/QuizMeCreator/modifyQues', data)
            console.log("Here is:", result)
            let response = result.data
            if (response.success === true) {
                location.href = "/QuizMeCreator/searchQuestion"
                return
            }
            throw new Error(response)
        }
        catch (e) {
            if (e.response) {
                $('#error-box-crt').text(e.response.data.error)
            }
            else {
                $('#error-box-crt').text(e.message)
            }
        }

    })

})