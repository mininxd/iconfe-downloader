import "./hover.js";


var repoUrl = "https://api.github.com/repos/andregans/iconfe/contents/SVG";

fetch(repoUrl , {
  headers: {
    /* don't worry about my token, this token not scoped to any my information,
    this token only increase rate limit of restAPI
    im appreciate when you change it :>
    
    read more :
    https://docs.github.com/en/rest/rate-limit/rate-limit?apiVersion=2022-11-28
    https://docs.github.com/en/rest/authentication/authenticating-to-the-rest-api?apiVersion=2022-11-28
    */
    'Authorization': `token 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`,
  /*                       */
    'Accept': 'application/vnd.github+json,application/vnd.github.diff',
    'X-GitHub-Api-Version': '2022-11-28'
  }
}).then(res => {
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
    svgHref.setAttribute("href", item.download_url)
    svgDown.innerText = `SVG`;
    svgHref.append(svgDown);
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

