$(document).ready(function () {
    $("#delQues-btn").click(async function () {
        //{{!-- let data = $("#delQues-form").serialize() --}}
        //{{!-- console.log(data) --}}
        try {
            let result = await axios.post('/QuizMeCreator/deleteQues')
            // console.log("Here is:", result)
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