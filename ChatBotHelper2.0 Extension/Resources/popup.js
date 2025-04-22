document.getElementById("askBtn").addEventListener("click", async function () {
    let question = document.getElementById("question").value;
    let responseBox = document.getElementById("response");

    if (!question) {
        responseBox.innerHTML = "<p>Please enter a question.</p>";
        return;
    }

    responseBox.innerHTML = "<p>Thinking...</p>";

    try {
        let response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // IMPORTANT: Do not hardcode your API key in production. Use environment variables or secure storage.
                "Authorization": "Bearer YOUR_OPENAI_API_KEY_HERE"
            },
            body: JSON.stringify({
                model: "gpt-4",
                messages: [{ role: "user", content: question }]
            })
        });

        let data = await response.json();
        responseBox.innerHTML = `<p>${data.choices[0].message.content}</p>`;
    } catch (error) {
        responseBox.innerHTML = "<p>Error fetching response.</p>";
    }
});
