import {
    LitElement, html, customElement, property
} from 'lit-element';

@customElement('article-elem')
export class ArticleElem extends LitElement {
    @property({type: String}) heading:string = "default heading";
    @property({type: String}) subHeading:string = "default sub-heading";
    @property({type: String}) date:string = "01/08/2019";
    @property({type: String}) imgSrc:string = "";
    @property({type: String}) description:string = "default description";

    render(){
        return html`
        <style>
            .post {
                background-color: white;
                padding: 20px;
                margin-top: 20px;
            }
            .postimg {
                width: 100%;
            }
        </style>
        <div class="post">
            <h2>${this.heading}</h2>
            <h5>${this.subHeading}, ${this.date}</h5>
            ${this.imgSrc && html`<div class="postimg"><img width="100%" height="100%" src="${this.imgSrc}"></div>`}
            <p>${this.description}</p>
        </div>
        `;
    }
}
