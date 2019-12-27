const uitemplate = `
<div class="accordion">
<dl>
     <dt>Section 1</dt>
     <dd>
        <p>Section 1 Content...</p>
     </dd>
     <dt>Section 2</dt>
        <dd>
        <p>Section 2 Content...</p>
        </dd>
     <dt>Section 3</dt>
     <dd>
        <p>Section 3 Content...</p>
     </dd>
 </dl>
 </div>
`;

import css from '../scss/_accordion.scss';

import {NORRIS_API} from './norrisAPI';

class Accordion extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = this.template;
        this._addToggleBehavior();
    }

    get dts() {
        return document.querySelectorAll('dt');
    }

    get dds() {
        return document.querySelectorAll('dd');
    }

    get lastElement() {
        return document.querySelector('dd:last-child')
    }

    get template() {
        return uitemplate;
    }

    get sectionID(){
        return parseInt(this.lastElement.previousSibling.previousElementSibling.id) + 1
    }

    _registerOnClickEvent(item, id){
        item.id = id;
        item.addEventListener('click', () => {
            this._closeOpenedItems(item.id)
            item.classList.add('accordion__title--open');
            this._handleRelatedContend(item);
        })
    }


    _addToggleBehavior() {
        this.dts.forEach((item, index) => {
            item.classList.add('accordion__title');
            this._registerOnClickEvent(item, index);
        });

        this.dds.forEach((item, index) => {
            item.classList.add('accordion__content')
        })
        NORRIS_API.getChuckNorris().then((data) => {
            this._addExtraContent(data);
        })

    }

    _handleRelatedContend(item) {
        const content = item.nextElementSibling;
        if (this._isContentOpen(item)) {
            content.classList.toggle('accordion__content--open');
        }
    }

    _isContentOpen(item) {
        return item.classList.contains('accordion__title--open')
    }

    _closeOpenedItems(id) {
        this.dts.forEach((item) => {
            if (item.id !== id) {
                item.classList.remove('accordion__title--open');
                item.nextElementSibling.classList.remove('accordion__content--open')
            }
        })
    }
    
    _addExtraContent(content){
        const model = this._getSectionModel(content);
        let response = this._mergeTemplateInSection(model);
        this.lastElement.insertAdjacentHTML('afterend',response);
        let  a = document.querySelector('dd:last-child');        
        this._registerOnClickEvent(this.lastElement.previousSibling.previousElementSibling,this.sectionID);
    }

    _getSectionModel(response){
        return {
            title: "Sabias que ?",
            content: response.value
        }
    }

    _mergeTemplateInSection(section){
        return `<dt id=${this.sectionID} class='accordion__title'>${section.title}</dt>
                <dd class="accordion__content">
                <p>${section.content}</p>
                </dd>
                `;
    }

}

window.customElements.define('edgar-accordion', Accordion);