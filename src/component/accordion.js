import "../scss/_accordion.scss";
import { NORRIS_API } from "./norrisAPI";

class Accordion extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.template;
    this._bindItems();
  }

  get template() {
    return `
<div class="accordion">
    <dl>
    </dl>
 </div>
`;
  }
  get dl() {
    return document.querySelector("dl");
  }
  get dts() {
    return document.querySelectorAll("dt");
  }

  get items() {
    return [
      {
        sectionID: Math.random(),
        title: "How to write to mobile first css",
        content: "https://zellwk.com/blog/how-to-write-mobile-first-css/"
      },
      {
        sectionID: Math.random(),
        title: "Promises Basic",
        content: "https://javascript.info/promise-basics"
      },
      {
        sectionID: Math.random(),
        title: "Thanks",
        content: "Thanks for you time"
      }
    ];
  }

  _addClickEvent(elementId) {
    let section = this._getSectionById(elementId);

    section.addEventListener("click", () => {
      this._closeOpenItems(elementId);
      this._openSection(section);
    });
  }

  _bindItems() {
    this.items.forEach(item => {
      this._addContent(item);
    });

    NORRIS_API.getChuckNorris().then(data => this._addContent(data));
  }

  _openSection(item) {
    let content = item.nextElementSibling;
    content.classList.toggle("accordion__content--open");
  }

  _closeOpenItems(id) {
    this.dts.forEach(item => {
      if (item.id !== id) {
        item.classList.remove("accordion__title--open");
        item.nextElementSibling.classList.remove("accordion__content--open");
      }
    });
  }

  _addContent(item) {
    const model = this._getModel(item);
    const section = this._mergeModelOnTemplate(model);
    this.dl.insertAdjacentHTML("afterend", section);
    this._addClickEvent(model.sectionID);
  }

  _getSectionById(id) {
    return document.getElementById(id);
  }
  _getModel(response) {
    return {
      sectionID: response.sectionID ? response.sectionID : Math.random(),
      title: response.title ? response.title : "Did you know? ",
      content: response.content ? response.content : response.value
    };
  }

  _mergeModelOnTemplate(section) {
    return `<dt id='${section.sectionID}' class='accordion__title'>${section.title}</dt>
                <dd class="accordion__content">
                <p>${section.content}</p>
                </dd>
                `;
  }
}

window.customElements.define("edgar-accordion", Accordion);
