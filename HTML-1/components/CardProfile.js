class CardProfile extends HTMLElement {
    static get observedAttributes() {
        return ['logo', 'image', 'name', 'position'];
    }

    static get style() {
        return /*css*/`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 1px solid #444;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            max-width: 250px;
            background-color: #1c1c1e;
            color: white;
            overflow: hidden;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .logo-container {
            width: 100%;
            height: auto;
            background-color: #fff;
            padding: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .logo {
            max-width: 80%;
            height: 50px;
        }
        .profile-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 0;
            background-color: #2a2a2e;
            width: 100%;
        }
        .profile-image {
            width: 140px;
            height: 140px;
            border-radius: 10%;
            object-fit: cover;
            border: 2px solid #444;
            margin-bottom: 10px;
        }
        .name {
            font-size: 1.4em;
            font-weight: bold;
        }
        .position-container {
            width: 100%;
            background-color: red;
            padding: 10px 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .position {
            font-size: 1.2em;
            color: white;
            font-weight: bold;
        }
        `;
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = /*html*/`
        <style>${CardProfile.style}</style>
        <div class="logo-container">
            <img class="logo" src="" alt="Company Logo">
        </div>
        <div class="profile-container">
            <img class="profile-image" src="" alt="Profile Image">
            <div class="name"></div>
        </div>
        <div class="position-container">
            <div class="position"></div>
        </div>
        `;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch(name) {
            case 'logo':
                this.shadowRoot.querySelector('.logo').src = newValue;
                break;
            case 'image':
                this.shadowRoot.querySelector('.profile-image').src = newValue;
                break;
            case 'name':
                this.shadowRoot.querySelector('.name').textContent = newValue;
                break;
            case 'position':
                this.shadowRoot.querySelector('.position').textContent = newValue;
                break;
        }
    }
}

customElements.define('card-profile', CardProfile);
