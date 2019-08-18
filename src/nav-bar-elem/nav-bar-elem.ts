import {
    LitElement, html, customElement, property
} from 'lit-element';
import { Link } from '../common';

@customElement('nav-bar-elem')
export class NavBarElem extends LitElement {
    @property({type: Array}) links:Array<Link> = [];

    render(){
        return html`
        <style>
            .nav-bar {
                overflow: hidden;
                background-color: #3f9bda;
            }
            .nav-bar a {
                float: left;
                display: block;
                color: #f2f2f2;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none;
            }
            .nav-bar a:hover {
                background-color: #ddd;
                color: black;
            }
            /* Responsive layout - when the screen is less than 400px wide, make the navigation links stack on top of each other instead of next to each other */
            @media screen and (max-width: 400px) {
                .nav-bar a {
                    float: none;
                    width: 100%;
                }
            }
        </style>
        <div class="nav-bar">
        ${this.links.map(link => html`<a href="${link.href}" style="${link.style}">${link.text}</a>`)}
        </div>
        `;
    }
}
