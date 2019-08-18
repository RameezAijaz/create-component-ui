import {
    LitElement, html, customElement, property
} from 'lit-element';
import { Link } from '../common';

@customElement('about-elem')
export class AboutElem extends LitElement {
    @property({type: String}) heading:string = "";
    @property({type: String}) imgSrc:string = "";
    @property({type: String}) description:string = "default description";
    @property({type: Array}) socialLinks:Array<Link> = [];

    render(){
        return html`
        <style>
        .about,.follow {
                background-color: white;
                padding: 20px;
                margin-top: 20px;
            }
         .persona-img {
                width: 100%;
                height: 270px;
          }
        </style>
        <div>
        <div class="about">
            <h2>${this.heading}</h2>
            ${this.imgSrc && html`<div class="persona-img"><img width="100%" height="100%" src="${this.imgSrc}"></div>`}
            <p>${this.description}</p>
        </div>
        ${
            this.socialLinks.length > 0 && html`
        <div class="follow">
            <h3>Follow Me</h3>
            ${this.socialLinks.map((link)=>html`
                    <a href="${link.href}" target="_blank"> ${link.text}</a><br/><br/>
            `)}
        </div>`
        }
        </div>
        `;
    }
}
