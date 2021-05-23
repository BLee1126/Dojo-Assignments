var likes = 0;

function plusLike() {
    likes++
    document.getElementById("displayLikes").innerText = `${likes} Like(s)`
}