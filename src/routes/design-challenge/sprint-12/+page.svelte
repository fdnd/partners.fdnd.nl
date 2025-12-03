<script>
    import { enhance } from '$app/forms'
    
    let { form, data } = $props();

    let loading = $state(false)

    function handleForm({formElement, formData, action, cancel }) {
        loading = true

        return async ({ result, update }) => {
            // fake api post
            await setTimeout(() => {
                update()

                loading = false  
            }, 1000);
        }

        // More Enhancements
        // https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#validating_forms_using_javascript
        // https://superforms.rocks/ form library for SvelteKit
    }
</script>

<section class="image-with-text">
    <figure class="image-container">
        <img src="/img/briefing-bij-fivespark.jpeg" alt="De briefing bij Fivespark" />
        <figcaption class="font-semibold">
            <span class="small-body">De briefing voor de design challenge bij Fivespark.</span>
        </figcaption>
    </figure>

    <div class="text-container">
        <h2 class="large-heading">Design Challenge <br>sprint 12: Proof of Concept</h2>
        <p>Startdatum: <time>01-06-2026</time></p>

        <p>In de sprint <a href="https://programma.fdnd.nl/data-driven-web/proof-of-concept">Proof of Concept</a> gaan studenten voor een opdrachtgever een data-driven online concept prototypen.</p>
        <p>In het eerste semester van de opleiding FDND hebben studenten veel geleerd over Semantische HTML, Layout, Responsive Design, Toegankelijkheid, Interactie en het werken met een huisstijl.</p>
        <p>In het tweede semester hebben studenten geleerd met NodeJS en REST API’s gebruiksvriendelijke websites te maken met Server-Side Rendering, Progressive Enhancement en een focus op User Experience en Performance.</p>
        <p>In deze sprint gaan studenten alles (!) wat ze hebben geleerd toepassen om een opdracht voor een opdrachtgever te maken.</p>
        
        <a href="https://programma.fdnd.nl/"  class="button is-dark"><span>FDND Programma</span></a>
    </div>
</section>

<section class="cta-row">
    <div class="inner">
        <header>
            <h2 class="large-heading">Hoe werkt de design challenge?</h2>
        </header>
        <div class="cta">
            <h3 class="small-heading">Planning</h3>
            
            <ul>
                <li>In 3 weken gaan studenten een opdracht realiseren voor een opdrachtgever.</li>
                <li>Op de maandag in de <strong>1e week</strong> van de sprint krijgen de studenten <strong>een briefing</strong> bij de opdrachtgever. Tijdens de briefing maken de studenten kennis met het bedrijf en wordt besproken wat ze gaan maken.</li>
                <li>Op de donderdag van de <strong>3e week</strong> van de sprint wordt de opdracht bij de opdrachtgever <strong>gepresenteerd</strong> en <strong>opgeleverd</strong>.</li>
            </ul>

            <a href="https://programma.fdnd.nl/data-driven-web/proof-of-concept#sprint-planning" class="button is-dark"><span>Bekijk de planning</span></a>
        </div>

        <div class="cta">
            <h3 class="small-heading">Werkwijze</h3>
            <ul>
                <li>Op basis van een bestaand idee, concept of ontwerp gaan studenten FDND een prototype ontwerpen, maken en testen.</li>
                <li>Studenten werken individueel of in een team aan een project.</li>
                <li>Voor het project is er—via een JSON/REST API—bestaande content zoals teksten, beeldmateriaal, video’s, huisstijl of conceptmateriaal beschikbaar.</li>
                <li>De code voor het project wordt op GitHub bewaard en gepubliceerd.</li>
            </ul>

            <a href="https://github.com/fdnd-task/proof-of-concept/blob/main/docs/INSTRUCTIONS.md" class="button is-dark"><span>Bekijk de studentenopdracht</span></a>
        </div>

        <div class="cta">
            <h3 class="small-heading">Voorbeelden van projecten</h3>
            <ul>
                <li>Een proof of concept voor een feature voor een klant waar geen budget voor is.</li>
                <li>Een dashboard met projecten waaraan wordt gewerkt.</li>
                <li>Een ping-pong score app om bij te houden wie de lunch toernooien wint.</li>
                <li>Een redesign voor een pagina van de eigen agency website (bijvoorbeeld blogs-, vacatures-, teampagina)</li>
            </ul>

            <a href="/design-challenge/sprint-12#studentenwerk" class="button is-dark"><span>Bekijk het studentenwerk</span></a>
        </div>
    </div>
</section>

<section id="aanmelden" class="subscribe cta-row">
    <div class="inner">
        <header>
            <h2 class="large-heading">Meld je aan voor <br>een design challenge</h2>
        </header>

        <!-- Enhance the form with the use:enhance prop -->
        <!-- Custom Enhance form with the use:enhance={handleForm} prop pointing to a custom form handler function -->
        <form action="/design-challenge/sprint-12#aanmelden" method="POST" use:enhance={handleForm}> 
            {#if form?.error}
                <p class="message fail">{form.message}</p>
            {/if}

            <div>
                <fieldset>
                    <legend>Gegevens</legend>
                    <label><span class="medium-body">Naam</span> <input type="text" name="name" minlength="2" required value="{form?.name ?? ''}"  placeholder="Sam Jansen"/></label>
                    <label><span class="medium-body">Email</span> <input type="email" name="email" required value="{form?.email ?? ''}" placeholder="s.jansen@mail.nl"></label>
                </fieldset>

                <fieldset>
                    <legend>Opdracht</legend>
                    <label for="challenge" class="medium-body"><span>Design Challenge idee</span></label>
                    <textarea name="challenge" id="challenge" rows="10" required value="{form?.challenge ?? ''}"></textarea>
                </fieldset>

                <footer>
                    <button>Aanmelden</button>
                    {#if loading}
                        <svg class="loader" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <style>
                                .spinner_qM83{animation:spinner_8HQG .5s infinite; fill:#66e5bf}
                                .spinner_oXPr{animation-delay:.1s}.spinner_ZTLf{animation-delay:.2s}
                                @keyframes spinner_8HQG{0%,57.14%{animation-timing-function:cubic-bezier(0.33,.66,.66,1);transform:translate(0)}28.57%{animation-timing-function:cubic-bezier(0.33,0,.66,.33);transform:translateY(-6px)}100%{transform:translate(0)}}
                            </style>
                            <circle class="spinner_qM83" cx="4" cy="12" r="3"/>
                            <circle class="spinner_qM83 spinner_oXPr" cx="12" cy="12" r="3"/>
                            <circle class="spinner_qM83 spinner_ZTLf" cx="20" cy="12" r="3"/>
                        </svg>
                    {/if}

                    {#if form?.success}
                        <p class="message succes" class:active={form?.success}>Je hebt je aangemeld voor een design challenge</p>
                    {/if}
                </footer>
            </div>

            <div>
                <h3>Design Challenges voor 2024</h3>
                {#each data?.people as person}
                    <p>
                        <strong>{person.name}</strong>
                        {person.challenge}
                    </p>
                {/each}
            </div>
        </form>
    </div>
</section>

<section id="studentenwerk" class="cta-row gallery" style="--background:var(--accent-color-1);">
    <div class="inner">
        <header>
            <h2 class="large-heading">Studentenwerk</h2>
        </header>

        <a href="/" class="cta">
            <figure>
                <img src="/img/design-challenges/sprint-12/badr-io.png" alt="">

                <figcaption class="font-semibold small-body">IO Digital</figcaption>
            </figure>
        </a>

        <a href="/" class="cta">
            <figure>
                <img src="/img/design-challenges/sprint-12/milan-ink.png" alt="">

                <figcaption class="font-semibold small-body">Lama Lama</figcaption>
            </figure>
        </a>

        <a href="/" class="cta">
            <figure>
                <img src="/img/design-challenges/sprint-12/rosa-voorhoede.png" alt="">

                <figcaption class="font-semibold small-body">De Voorhoede</figcaption>
            </figure>
        </a>

        <a href="/" class="cta">
            <figure>
                <img src="/img/design-challenges/sprint-12/sanne-ocean-cleanup.png" alt="">

                <figcaption class="font-semibold small-body">Grrr</figcaption>
            </figure>
        </a>

        <a href="/" class="cta">
            <figure>
                <img src="/img/design-challenges/sprint-12/tom-schiphol.png" alt="">

                <figcaption class="font-semibold small-body">Schiphol</figcaption>
            </figure>
        </a>

        <a href="/" class="cta">
            <figure>
                <img src="/img/design-challenges/sprint-12/duneya-de-correspondent.png" alt="">

                <figcaption class="font-semibold small-body">De Correspondent</figcaption>
            </figure>
        </a>           
    </div>
</section>

<style>
    section.subscribe {
        display:none;
    }

    section.subscribe:target {
        display:block;
    }

    section.subscribe .inner {
        display: flex;
        flex-wrap: wrap;
        max-width: var(--max-width);
        margin: auto;
        gap: var(--padding-side);
        padding: var(--padding-side);
        justify-content: stretch;
    }
    
    form {
        display:grid;
        grid-template-columns: 1fr 1fr;
        gap:1rem;
        width:auto;
    }
    form div {
        width: 100%
    }
    strong {
        font-size: .9em;
        display: block;
    }
</style>