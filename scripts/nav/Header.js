import { BusinessName } from "./BusinessName.js";


const contentTarget = document.querySelector(".container__header") 
export const Header = () => {
    const businessHTML = BusinessName()

    contentTarget.innerHTML = `

    <h1>${BusinessName()}</h1>
  
    `
}