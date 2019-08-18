import {
    LitElement, html, customElement, property
} from 'lit-element';

@customElement('header-elem')
export class HeaderElem extends LitElement {
    @property({type: String}) heading:string='default heading';
    @property({type: String}) description:string='default description';

    render(){
        return html`
        <style>
        .header {
            padding: 30px;
            text-align: center;
            background: #c8e7fd;
        }
        .header h1 {
            font-size: 50px;
        }
        </style>
        <div class="header">
        <h1>${this.heading}</h1>
        <p>${this.description}</p>
        </div>
        `;
    }
}
