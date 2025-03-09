async function predictJob() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const company_profile = document.getElementById("company_profile").value;

    const response = await fetch("http://127.0.0.1:5000/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, company_profile }),
    });

    const result = await response.json();
    document.getElementById("result").innerText = 
        result.probability > 0.5 
        ? `Fake Job (${(result.probability * 100).toFixed(2)}%)`
        : `Real Job (${(result.probability * 100).toFixed(2)}%)`;
}
