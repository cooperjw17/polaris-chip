import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.headerTitle = "title";
    this.imageSrc = "";
    this.description = "description";
  
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .card {
        font-size: 1em;
        display: inline-flex;
        border: 2px solid grey;
        padding: 8px;
        margin: 8px;
        opacity: .8;
        background-color: Green;
        transition: .6s all ease-in-out;
      }
      .card-image {
        width: 200px;
        height: 100%;
      }
      .card-text {
        width: 300px;
        padding: 0 8px 8px 8px;
        color: black;
        background-color: white;
        margin: 0 0 0 8px;
        height: 300px;
        overflow: auto;
      }
      .card-title {
        position: sticky;
        top: 0;
        background-color:rgb(250, 249, 249);
        text-align: center;
        font-size: 2em;
        padding: 8px 8px 16px;
        margin: 0 -8px;
      }
      .card:hover,
      .card:focus-within {
        opacity: 1;
        outline: 2px solid green;
        outline-offset: 16px;
      }
    `;
  }

  render() {
    return html`<h2>Controls</h2>
<div class="control-wrapper">
  <button class="duplicate">Clone Card</button>
  <button id="namechange">Change Name</button>
  <button id="pic-change">Change pic.</button>
  <button id="bg-change">Change 
    background</button>
  <button id="delete">Delete</button>
  <button href="https://hax.psu.edu" class="card-details">Details</button>
</div>
<div id="cardlist">
  <div class="card">
    <img class="card-image" alt="Github profile photo of the prof" src= ${this.imageSrc} />
    <div class="card-text">
      <h3 class="card-title">${this.headerTitle}</h3>
      <div class="card-details">
        <p>
        ${this.description}
        </p>
    `;
  }

  static get properties() {
    return {
      headerTitle: { type: String },
      imageSrc: { type: String },
      description: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
