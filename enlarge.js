const imgList = document.getElementsByClassName("certImg")
for (i = 0; i < imgList.length; i++) {
    const img = imgList[i]
    img.addEventListener("click", (e) => {
        var enlarge = false, vertical = false
        for (j = 0; j < e.target.classList.length; j++) {
            if (e.target.classList[j] === "enlarge") enlarge = true
            if (e.target.classList[j] === "certImgVertical") vertical = true
        }
        if (enlarge && vertical) img.className = "certImg certImgVertical"
        else if (enlarge && !vertical) img.className = "certImg"
        else if (!enlarge && vertical) img.className = "certImg enlarge certImgVertical"
        else img.className = "certImg enlarge"
    })
}