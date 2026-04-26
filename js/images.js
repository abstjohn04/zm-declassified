const CDN_URL = "https://zm.cdn.thedrewshow.dev";


class Image extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const alt = this.getAttribute("alt");
        const src = CDN_URL + this.getAttribute("src");

        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/css/declassified.css">
        <div class="img">
            <a target="_blank" rel="noopener noreferrer" href="${src}">
                <img src="${src}" alt="${alt}" loading="lazy" />
            </a>
        </div>
        `
    }
}

class ImageLink extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        const src = CDN_URL + this.getAttribute("src");

        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/css/declassified.css">
        <a href="${src}"><slot></slot></a>
        `
    }
}

customElements.define("zm-img", Image);
customElements.define("zm-img-link", ImageLink);
