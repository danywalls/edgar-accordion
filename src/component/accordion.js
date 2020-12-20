import { NORRIS_API} from "./norrisAPI";

window.onload = function () {
   NORRIS_API.getChuckNorris().then(({ value}) => {
    
    const dynamicdd = document.createElement("dd")
    dynamicdd.innerHTML = `<p>${value}</p>`

    const dynamicdt = document.createElement("dt");

    dynamicdt.innerText = "chucknorris";
    document.querySelector("dl").appendChild(dynamicdt);
    document.querySelector("dl").appendChild(dynamicdd);
  })

}

