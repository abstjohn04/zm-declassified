const HOME_LINK = "/index";
const CONTENTS_LINK = "/contents";
const GITHUB_LINK = "https://github.com/abstjohn04/zm-declassified";
const CONTACT_LINK = "https://thedrewshow.dev/contact";

class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }
    connectedCallback() {
        this.render()
    }
    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/css/declassified.css">
        <center>
            <div class="title-container">
                <a href="${HOME_LINK}" style="text-decoration: none;">
                    <div class="title">ZM Declassified</div>
                </a>
                <hr>
                <div class="links">
                    <a href="${CONTENTS_LINK}">contents</a>
                    <a href="${GITHUB_LINK}">Github</a>
                    <a href="${CONTACT_LINK}">contact</a>
                </div>
            </div>
        </center>
        `;
    }
}

class Footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }
    connectedCallback() {
        this.render()
    }
    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/css/declassified.css">
        <div class="footer">
            <hr>
            <div class="footer-content" style="display: flex; justify-content: space-between;">
                <div>ZM Declassified</div>
                <div>Andrew St. John &bull; 2026</div>
            </div>
        </div>
        `;
    }
}

customElements.define("zm-header", Header);
customElements.define("zm-footer", Footer);
