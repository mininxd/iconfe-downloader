import "./hover.js";


var repoUrl = "https://api.github.com/repos/andregans/iconfe/contents/SVG";

fetch(repoUrl).then(res => {
  return res.json();
}).then(data => {
  
  totalIcons.innerHTML = data.length;
  // Making Icon List
  data.forEach((item) => {
    // create Element
    let  gridItem = document.createElement("div");
    let  gridItemBottom = document.createElement("div");
    let  downloadContainer = document.createElement("div");
    let  svgDown = document.createElement("button");
    let  pngDown = document.createElement("button");
    let svgHref = document.createElement("a");
    let pngHref = document.createElement("a");
    let icons = document.createElement("img");
    let itemName = document.createElement("p");
    
    // add Class
    gridItem.classList.add("grid-item")
    icons.classList.add("icon")
    gridItemBottom.classList.add("grid-item-bottom")
    itemName.classList.add("item-name")
    downloadContainer.classList.add('download-container')
    svgDown.classList.add('button','is-small','is-dark')
    pngDown.classList.add('button','is-small','is-dark')
    
    // icon images
    icons.src = item.download_url
    gridItem.appendChild(icons)
    
    // download button
      // svg button
    svgHref.setAttribute("href", item.html_url)
    svgDown.innerText = `SVG`
    svgHref.append(svgDown)
     // png button
    var pngURL = item.download_url.replaceAll("SVG", "PNG").replaceAll("svg","png");
    pngDown.innerText = `PNG`;
    pngHref.setAttribute("href", pngURL);
    pngHref.download = item.name;
    pngHref.append(pngDown)
    // append on download Container
    downloadContainer.append(svgHref);
    downloadContainer.append(pngHref);
    
    //List Item including image and button
    itemName.innerText = item.name.replaceAll(".svg", "")
    gridItem.append(gridItemBottom);
    gridItemBottom.append(itemName);
    gridItemBottom.append(downloadContainer);
    itemContainer.appendChild(gridItem);
  })
  

}).catch(e => {console.log(e)})

