

const clientReviews = [
    { clientName: "Carly Digital", clientReview: "“Great experience working with Saeed and very good website design. Will also quickly adjust anything you ask for and English fluency is good too. Thanks again Saeed!”", clientRole: "Web Manager, cameronpink.com" },
    { clientName: "Andre", clientReview: "“Saeed worked very fast and he did exactly what I needed. When I asked for modification he was quick to help and did exactly as I asked, good experience working and I will be back for more!”", clientRole: "CEO, dnbacademy.net" },

]


function drawReviews() {
    const reviewGrid = document.getElementById("reviewGrid");


    reviewGrid.innerHTML = " ";

    if (clientReviews.length === 0) {
        reviewGrid.innerHTML = `<p class="role"> No review found`;
        return;
    }

    clientReviews.forEach(function (clientReview) {
        const reviewCard = document.createElement("div");
        reviewCard.classList.add("review-card");
        reviewCard.innerHTML = `
                    <span class="client-name">${clientReview.clientName}</span>
                    <p class="client-review">${clientReview.clientReview}</p>
                    <span class="client-role">${clientReview.clientRole} </span>
               `;
        reviewGrid.appendChild(reviewCard);

    });

}


function addReview() {

    const clientName = document.getElementById("clientName").value.trim();
    const clientReview = document.getElementById("clientReview").value.trim();
    const clientRole = document.getElementById("clientRole").value.trim();

    if (!clientName || !clientRole || !clientReview) {
        document.getElementById("error").style.display = "block";
        return;

    }

    document.getElementById("error").style.display = "none";
    clientReviews.push({
        clientName: clientName,
        clientReview: clientReview,
        clientRole: clientRole,
    });



    document.getElementById("clientName").value = '';

    document.getElementById("clientReview").value = '';

    document.getElementById("clientRole").value = '';

    drawReviews();



}





drawReviews();
