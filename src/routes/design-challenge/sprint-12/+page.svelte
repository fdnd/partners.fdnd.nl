<script>
    import { Block } from '@fdnd/components';
    import { enhance } from '$app/forms';

    let loading = false;

    function handleForm({ formElement, formData, action, cancel, submitter }){
        // `formElement` is this `<form>` element
        // `formData` is its `FormData` object that's about to be submitted
        // `action` is the URL to which the form is posted
        // calling `cancel()` will prevent the submission
        // `submitter` is the `HTMLElement` that caused the form to be submitted

        loading = true;

        return async ({ result, update }) => {
            await setTimeout(() => {
                loading = false
            }, 2000);
            
            // `result` is an `ActionResult` object
            // `update` is a function which triggers the default logic that would be triggered if this callback wasn't set
        };
    }

    
</script>

<Block tag="section">
    <div class="global-hack">
        <Block class="blue-on-green rounded" tag="div">
            <h2>Design Challenge sprint 12: Proof of Concept</h2>
            <p>Startdatum: <time>03-06-2024</time></p>

            <p>In de sprint <a href="https://programma.fdnd.nl/data-driven-web/proof-of-concept">Proof of Concept</a> gaan studenten voor een opdrachtgever een data-driven online concept prototypen.</p>
            <p>In het eerste semester van de opleiding FDND hebben studenten veel geleerd over Semantische HTML, Layout, Responsive Design, Toegankelijkheid, Interactie en het werken met een huisstijl.</p>
            <p>In het tweede semester hebben studenten geleerd met NodeJS en REST API’s gebruiksvriendelijke websites te maken met Server-Side Rendering, Progressive Enhancement en een focus op User Experience en Performance.</p>
            <p>In deze sprint gaan studenten alles (!) wat ze hebben geleerd toepassen om een opdracht voor een opdrachtgever te maken.</p>
            
            <p>Bekijk het <a href="https://programma.fdnd.nl/">programma van Frontend Design & Development</a>.</p>
        </Block>

        <Block class="green-on-blue rounded" tag="div">
            <h3>Planning</h3>
            <ul>
                <p>In 3 weken gaan studenten een opdracht realiseren voor een opdrachtgever.</p>
                <li>Maandag 3 juni 2024 krijgen de studenten een briefing bij de opdrachtgever. Tijdens de briefing maken de studenten kennis met het bedrijf en wordt besproken wat ze gaan maken.</li>
                <li>Donderdag 20 juni wordt de opdracht gepresenteerd aan de opdrachtgever.</li>
            </ul>
        </Block>
        
        <Block class="green-on-blue rounded" tag="div">
            <h3>Werkwijze</h3>
            <ul>
                <li>Op basis van een bestaand idee, concept of ontwerp gaan studenten FDND een prototype ontwerpen, maken en testen.</li>
                <li>Studenten werken individueel of in een team aan een project.</li>
                <li>Voor het project is er—via een JSON/REST API—bestaande content zoals teksten, beeldmateriaal, video’s, huisstijl of conceptmateriaal beschikbaar.</li>
                <li>De code voor het project wordt op GitHub bewaard en gepubliceerd.</li>
            </ul>
        </Block>

        <figure>
            <img src="/img/review-sprint-12.jpeg" alt="" class="rounded">
        </figure>
        
        <Block class="green-on-blue rounded" tag="div">
            <h3>Ideeën en voorbeelden van projecten</h3>
            <ul>
                <li>Een proof of concept voor een feature voor een klant waar geen budget voor is.</li>
                <li>Een feature voor een klant waar geen budget voor is.</li>
                <li>Een quiz tool waarmee je een online quiz kan aanmaken en laten invullen. Misschien wil je de resultaten real-time tonen?</li>
                <li>Een ping-pong score app om bij te houden wie de lunch toernooien wint.</li>
                <li>Een dashboard die toont aan welke projecten er wordt gewerkt en waar werknemers likes en opmerkingen bij kunnen plaatsen.</li>
                <li>...</li>
            </ul>

            <a href="https://programma.fdnd.nl/data-driven-web/proof-of-concept">Lees meer over het programma van sprint 12</a>  
        </Block>

        <Block tag="section" id="studentenwerk">
            <h3>Studentenwerk</h3>
            <ul class="scroll">
                <li><a href="/"><img src="/img/design-challenges/sprint-12/badr-io.png" alt="IO"></a></li>
                <li><a href="/"><img src="/img/design-challenges/sprint-12/milan-ink.png" alt="INK"></a></li>
                <li><a href="/"><img src="/img/design-challenges/sprint-12/rosa-voorhoede.png" alt="De Voorhoede"></a></li>
                <li><a href="/"><img src="/img/design-challenges/sprint-12/sanne-ocean-cleanup.png" alt="The Ocean Cleanup"></a></li>
                <li><a href="/"><img src="/img/design-challenges/sprint-12/tom-schiphol.png" alt="Schiphol"></a></li>
            </ul> 
        </Block>

        <!-- Lijst met opdrachtgevers (logo's) -->

        <!-- Aanmeldformulier -->
        <Block class="green-on-blue rounded" tag="div">
            <form action="/design-challenge/sprint-12" method="POST" use:enhance={handleForm}>

                {#if loading }
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_qM83{animation:spinner_8HQG 1.05s infinite}.spinner_oXPr{animation-delay:.1s}.spinner_ZTLf{animation-delay:.2s}@keyframes spinner_8HQG{0%,57.14%{animation-timing-function:cubic-bezier(0.33,.66,.66,1);transform:translate(0)}28.57%{animation-timing-function:cubic-bezier(0.33,0,.66,.33);transform:translateY(-6px)}100%{transform:translate(0)}}</style><circle class="spinner_qM83" cx="4" cy="12" r="3"/><circle class="spinner_qM83 spinner_oXPr" cx="12" cy="12" r="3"/><circle class="spinner_qM83 spinner_ZTLf" cx="20" cy="12" r="3"/></svg>
                {/if}

                <h2>Meld je aan voor een design challenge</h2>

                <fieldset>
                    <legend>Gegevens</legend>
                    <label><span>Naam</span> <input type="text" name="name" /></label>
                    
                    <label><span>Email</span> <input type="email" name="email"></label>
                    
                </fieldset>

                <fieldset>
                    <legend>Opdracht</legend>
                    <label for="challenge"><span>Design Challenge</span></label>
                    <textarea name="challenge" id="challenge"></textarea>
                </fieldset>

                <button>Aanmelden</button>
            </form>
        </Block>
    </div>
</Block>

<style>
    :global(div.global-hack div),
    figure {
        margin-bottom: 2rem;
        max-width:40em;
    }
    h2 {
        padding-left:0 !important;
    }
    time {
        font-weight: bold;
    }

    ul.scroll li {
        list-style:none;
        margin-left: -1rem;
        
    }

    ul.scroll li a::after {
        display: none;
    }
    ul.scroll li img {
        aspect-ratio: 3 / 2;
        
    }
    
    li {
        display:list-item;
        margin-left:2rem;
        
    }

    /* form styling */
    form {
        position: relative;
    }
    fieldset {
        border:0;
        padding:0;
    }
    legend {
        display: none;
    }
    input, textarea {
        display:block;
        margin-top: .25rem;
        margin-bottom: 1rem;
        border-radius:.5rem;
        border:none;
        padding:.5rem;
    }
    button {
        all:unset;
        background-color: #66e5bf;
        border-radius:.5rem;
        padding:.5rem;
        color:#050542
    }
    textarea {
        width:100%;
        
    }


    svg {
        position: absolute;
        right:1rem;
        top:1rem;
        fill:yellowgreen;
    }
</style>
