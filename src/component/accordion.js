import "../scss/_accordion.scss";
import { NORRIS_API } from "./norrisAPI";

class Accordion extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.template;
    this._addToggleBehavior();
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
        title: "Section 1",
        content: "Content 1"
      },
      {
        sectionID: Math.random(),
        title: "Section 1",
        content: "Content 1"
      }
    ];
  }

  _registerOnClickEvent(model) {
    let sectionDOM = this._getDtById(model);

    sectionDOM.addEventListener("click", () => {
      this._closeOpenedItems(model);
      this._openSection(sectionDOM);
    });
  }

  _addToggleBehavior() {
    this.items.forEach(item => {
      this._addContent(item);
    });
    NORRIS_API.getChuckNorris().then(data => {
      this._addContent(data);
    });
  }

  _openSection(item) {
    let content = item.nextElementSibling;
    content.classList.toggle("accordion__content--open");
  }

  _closeOpenedItems(id) {
    this.dts.forEach(item => {
      if (item.id !== id) {
        item.classList.remove("accordion__title--open");
        item.nextElementSibling.classList.remove("accordion__content--open");
      }
    });
  }

  _addContent(content) {
    const model = this._getSectionModel(content);
    const section = this._mergeTemplateInSection(model);
    this.dl.insertAdjacentHTML("afterend", section);
    this._registerOnClickEvent(model.sectionID);
  }

  _getDtById(id) {
    return document.getElementById(id);
  }
  _getSectionModel(response) {
    return {
      sectionID: response.sectionID ? response.sectionID : Math.random(),
      title: response.title ? response.title : "Sabias que ? ",
      content: response.content ? response.content : response.value
    };
  }

  _mergeTemplateInSection(section) {
    return `<dt id='${section.sectionID}' class='accordion__title'>${section.title}</dt>
                <dd class="accordion__content">
                <p>${section.content}</p>
                </dd>
                `;
  }
}

window.customElements.define("edgar-accordion", Accordion);
