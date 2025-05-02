document.addEventListener('DOMContentLoaded', () => {
   
    const forgiveBtn = document.getElementById('forgive-btn');
    if (forgiveBtn) {
        forgiveBtn.addEventListener('click', () => {
            showPage2();
        });
    }

 
    const cheatCodeInput = document.getElementById('cheat-code');
    const hintBtn = document.getElementById('hint-btn');
    const hintBoxes = document.querySelectorAll('.hint-box');
    let hintsShown = 0;

    if (hintBtn) {
        hintBtn.addEventListener('click', () => {
            if (hintsShown < hintBoxes.length) {
                hintBoxes[hintsShown].classList.add('show');
                hintsShown++;
            }
        });
    }

    if (cheatCodeInput) {
        cheatCodeInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                const code = cheatCodeInput.value.trim().toUpperCase();
                if (code === 'TURTLE') {
                    showPage3();
                } else {
                    // Optional: Shake the input or flash it red to indicate wrong code
                    cheatCodeInput.classList.add('wrong-code');
                    setTimeout(() => {
                        cheatCodeInput.classList.remove('wrong-code');
                    }, 500);
                }
            }
        });
    }

    // Page 3: Location selection
    const locationOptions = document.querySelectorAll('.location-option');
    if (locationOptions.length) {
        locationOptions.forEach((option, index) => {
            if (index !== 2) { // Skip the third option (index 2)
                option.addEventListener('click', () => {
                    showPage4();
                });
            }
        });
    }
});

function showPage2() {
    document.body.innerHTML = `
        <div class="container">
            <h1>Date? With your fav person?</h1>
            <div class="cheat-code-section">
                <input type="text" id="cheat-code" class="cheat-code-input" placeholder="enter cheat code">
                <div class="hint-section">
                    <button id="hint-btn">hint?</button>
                    <div class="hint-container">
                        <div class="hint-box">It's related to GTA 5</div>
                        <div class="hint-box">It's an animal</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.className = 'page2';
    

    if (!document.querySelector('meta[name="viewport"]')) {
        const meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
        document.head.appendChild(meta);
    }
    
 
    const cheatCodeInput = document.getElementById('cheat-code');
    const hintBtn = document.getElementById('hint-btn');
    const hintBoxes = document.querySelectorAll('.hint-box');
    let hintsShown = 0;

    hintBtn.addEventListener('click', () => {
        if (hintsShown < hintBoxes.length) {
            hintBoxes[hintsShown].classList.add('show');
            hintsShown++;
        }
    });

    cheatCodeInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const code = cheatCodeInput.value.trim().toUpperCase();
            if (code === 'TURTLE') {
                showPage3();
            } else {
              
                cheatCodeInput.classList.add('wrong-code');
                setTimeout(() => {
                    cheatCodeInput.classList.remove('wrong-code');
                }, 500);
            }
        }
    });
}

function showPage3() {
    document.body.innerHTML = `
        <div class="container">
            <h1 class="choose">choose your location</h1>
            <p class="subtitle">aukaat mein choose kar</p>
            <div class="location-options">
                <div class="location-option">
                    <img src="images/Arcade.jpg" alt="Arcade">
                </div>
                <div class="location-option">
                    <img src="images/Korean Food.jpeg" alt="Restaurant">
                </div>
                <div class="location-option">
                    <img src="images/Aquarium aesthetic.jpeg" alt="Aquarium">
                </div>
            </div>
        </div>
    `;
    document.body.className = 'page3';
    
   
    if (!document.querySelector('meta[name="viewport"]')) {
        const meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
        document.head.appendChild(meta);
    }
    
    
    const locationOptions = document.querySelectorAll('.location-option');
    locationOptions.forEach((option, index) => {
        if (index !== 2) { 
            option.addEventListener('click', () => {
                showPage4();
            });
        }
    });
}

function showPage4() {
    document.body.innerHTML = `
        <div class="container">
            <h1 class="date-text">YAYYY YOU ARE OFFICIALLY ON A DATE!</h1>
            <div class="date-details">
                dress well<br>
                saturday , 9:00 am<br>
                bus stop ke paas
            </div>
        </div>
    `;
    document.body.className = 'page4';
    

    if (!document.querySelector('meta[name="viewport"]')) {
        const meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
        document.head.appendChild(meta);
    }
}