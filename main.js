

let array = [
    {fileIcon: "./png.png", fileName: "firstfile.jpg", date:"2012"},
    {fileIcon: "./pdf.png", fileName: "second.jpg", date:"2014"},
    {fileIcon: "./png2.png", fileName: "third.jpg", date:"2018"},
    {fileIcon: "./png.png", fileName: "fourth.jpg", date:"2011"},
    {fileIcon: "./png2.png", fileName: "fifth.jpg", date:"2015"},
    {fileIcon: "./pdf.png", fileName: "sixth.jpg", date:"2017"},
]
let bodyEtt = document.getElementById("bodyEtt")

function functionEtt(){
    array.forEach(file => {

        let container = document.createElement("DIV")
        container.classList.add("containerstyle")

        let itemIcon = document.createElement("IMG")
        itemIcon.className = "box"
        itemIcon.src = file.fileIcon

        let itemName = document.createElement("P")
        itemName.className = "box"

        let itemDate = document.createElement("P")
        itemDate.className = "box"

        // itemIcon.innerHTML=file.fileIcon;
        itemName.innerHTML=file.fileName;
        itemDate.innerHTML=file.date;

        container.appendChild(itemIcon)
        container.appendChild(itemName)
        container.appendChild(itemDate)

        bodyEtt.appendChild(container)
    })
}

functionEtt();