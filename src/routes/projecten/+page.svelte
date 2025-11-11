<script>
    export let data

    // const { sites } = data
</script>

<section class="image-with-text">
    <figure class="image-container">
        <img src="/img/review-sprint-9.jpeg" alt=" Martijn Nieuwenhuizen, senior Frontend Developer bij Grrrr, geeft les aan tweedejaars studenten" class="rounded" />
        <figcaption class="font-semibold">
            <span class="small-body">Studenten geven elkaar feedback op gemaakt werk</span>
        </figcaption>
    </figure>

    <div class="text-container">
        <h2 class="large-heading">FDND projecten</h2>

        <p>Studenten werken doorlopend aan projecten voor echte opdrachtgevers. In twee jaar ontwerpen en ontwikkelen studenten betekenisvolle, robuuste en toegankelijke websites.</p>
        <p>Wij werken onder andere samen met: <a href="https://www.funda.nl/">Funda</a>, <a href="https://www.fabrique.nl/">Fabrique</a>, <a href="https://www.oba.nl/">OBA</a>, <a href="https://www.schiphol.nl/">Schiphol</a>, <a href="https://www.vervoerregio.nl/">Vervoerregio Amsterdam</a>, <a href="https://www.voorhoede.nl/">Voorhoede</a>, <a href="https://dutchdigitalagencies.com/">Dutch Digital Agencies</a>, <a href="https://www.deloitte.com/nl/nl.html">Deloitte</a>, <a href="https://www.futureready.design/">Future Ready Design</a>, <a href="https://www.wearetriple.com/nl/">Triple</a>,  <a href="https://www.avl.nl/">Antonie van Leeuwenhoek</a>, ...</p>
    </div>
</section>

<section class="cta-row portfolio" id="huidige-projecten">
    <div class="inner">
        <header class="sr-only">
            <h2 class="large-heading">FDND Agency</h2>

            <p>De projecten waar studenten bij FDND Agency aan werken.</p>


        </header>

        <article class="cta">
            <header>
                <h3>Toolgankelijk</h3>
                <p>Vervoer Regio Amsterdam</p>
            </header>
            
            <p>Een dashboard voor de Vervoerregio Amsterdam om de toegankelijkheid van de websites van de aangesloten vervoerders in kaart te brengen.</p>

            <img src="/img/projecten/signature/toolgankelijk.png" alt="Toolgankelijk dashboard van de Vervoerregio Amsterdam">

            <ul>
                <li>
                    <a href="https://toolgankelijk.dev.fdnd.nl/">
                        <span>Live website (staging)</span>
                    </a>
                </li>

                <li>
                    <a href="https://github.com/fdnd-agency/toolgankelijk/">
                        <span>GitHub Codebase</span>
                    </a>
                </li>
                
            </ul>
        </article>

        <article class="cta">
            <header>
                <h3>Oncollaboration</h3>
                <p>Antoni van Leeuwenhoek</p>
            </header>
            
            <p>Een kennisdelingsplatform tussen Nederland en Indonesië, met betrekking tot innovatie van de behandeling van kanker.</p>

            <img src="/img/projecten/signature/oncollaboration.png" alt="Kennsidelingsplatform Antoni van Leeuwenhoek">

            <ul>
                <li>
                    <a href="https://oncollaboration.dev.fdnd.nl/">
                        <span>Live website (staging)</span>
                    </a>
                </li>

                <li>
                    <a href="https://github.com/fdnd-agency/oncollaboration">
                        <span>GitHub Codebase</span>
                    </a>
                </li>
                
            </ul>
        </article>

        <article class="cta">
            <header>
                <h3>Bieb in Bloei</h3>
                <p>Buurtcampus Oost</p>
            </header>
            
            <p>Een website voor de Buurtcampus Oost met informatie over de duurzame projecten van de Buurtcampus in de wijk.</p>

            <img src="/img/projecten/signature/biebinbloei.png" alt="Biebinbloei website">

            <ul>
                <li>
                    <a href="https://biebinbloei.nl/">
                        <span>Live website</span>
                    </a>
                </li>

                <li>
                    <a href="https://github.com/fdnd-agency/biebinbloei.nl">
                        <span>GitHub Codebase</span>
                    </a>
                </li>
                
            </ul>
        </article>
        
        <!-- Netlify projecten -->
        <!-- {#each sites as site}
            <div class="cta">
                <h3 class="small-heading">{site.name}</h3>
                
                {#if site.screenshot_url !== null}
                    <img src="{site.screenshot_url}" alt="{site.name}">
                {/if}

                <ul>
                    <li>
                        <a href="{site.live_url}">
                            <span>Live site</span>
                        </a>
                    </li>

                    <li>
                        <a href="{site.github_url}">
                            <span>Github Repository</span>
                        </a>
                    </li>
                    
                </ul>
            </div>
        {/each} -->
    </div>
      
    <a href="https://github.com/fdnd-agency/" class="button is-accent-2 is-full-color">
        <span>Bekijk alle projecten op GitHub</span>
    </a>
</section>

<section class="cta-row">
    <div class="inner">
        <header>
            <h2 class="large-heading">Semesters & sprints</h2>
            <p>Elk semester werken de studenten in meerdere sprints van 3 weken aan een opdracht voor een opdrachtgever. In de semester en sprints zit een opbouw van toenemende complexiteit en afnemende sturing. Zo krijgen studenten steeds meer grip op hun eigen ontwikkeling én wordt in de loop van twee jaar een volledige website of web applicatie ontworpen en ontwikkeld.</p>
        </header>
        
        <div class="cta">
            <h3 class="small-heading">Semester 1:<br>Static Web</h3>
            <p class="medium-body font-medium">In het  eerste semester ontwerpen en bouwen de studenten statische websites. Hier worden de fundamenten voor het project gelegd met focus op het implementeren van de huisstijl, Toegankelijkheid en de flow van de website.</p>
            
            <a class="button is-dark" href="https://programma.fdnd.nl/static-web">
                <span>Semester 1:<br>Static Web</span>
            </a>
        </div>
        <div class="cta">
            <h3 class="small-heading">Semester 2:<br>Data-Driven Web</h3>
            <p class="medium-body font-medium">In het tweede semester werken de studenten verder aan het project, alleen nu op basis van dynamische data. De studenten leren hoe ze op de server data kunnen ophalen uit een API en dit vervolgens te renderen naar HTML.</p>
            <a class="button is-dark" href="https://programma.fdnd.nl/data-driven-web">
                <span>Semester 2:<br>Data-Driven Web</span>
            </a>
        </div>
        <div class="cta">
            <h3 class="small-heading">Semester 3:<br>Workflow, Tooling & Frameworks</h3>
            <p class="medium-body font-medium">In het derde semester leren de studenten werken met frameworks en wordt het project afgerond. De studenten werken toe naar een robuste, schaalbare en overdraagbare website die opgebouwd is uit componenten.</p>
            <a class="button is-dark small-body" href="https://programma.fdnd.nl/workflow-tooling-frameworks">
                <span>Semester 3:<br>Workflow, Tooling & Frameworks</span>
            </a>
        </div>
    </div>
</section>

<section class="image-with-text">
    <figure class="image-container">
        <img src="/img/backlog.png" alt="Taken en user stories staan in een backlog" class="rounded" />
        <figcaption class="font-semibold">
            <span class="small-body">Taken en user stories staan in een backlog.</span>
        </figcaption>
    </figure>

    <div class="text-container">
        <h2 class="large-heading">Backlog</h2>

        <p>Omdat we de voortgang van projecten in een backlog bijhouden op GitHub, kunnen we heel gericht projecten laten aansluiten bij andere programma's van andere opleidingen bij de HvA, bijvoorbeeld bij de Minor Web Design & Development bij CMD Amsterdam.</p>

        <a href="https://github.com/orgs/fdnd-agency/projects" class="button is-accent-1 is-full-color">
            <span>Bekijk de projecten boards op GitHub</span>
        </a>

        <a href="https://everythingweb.org/" class="button is-accent-2 is-full-color">
            <span>Minor Web Design & Development</span>
        </a>
        

    </div>
</section>

<section class="image-with-text is-reversed">
    <figure class="image-container">
        <img src="/img/review-sprint-12.jpeg" alt="Sprint review met de opdrachtgever" class="rounded" />
        <figcaption class="font-semibold">
            <span class="small-body">Sprint review met de opdrachtgever.</span>
        </figcaption>
    </figure>

    <div class="text-container">
        <h2 class="large-heading">Sprint reviews</h2>

        <p>Elke sprint presenteren de studenten hun werk in een sprint review. Tijdens de review wordt de backlog bekeken en waar nodig aangepast, zodat het duidelijk is waar de volgende sprint aan gewerkt kan worden.</p>
        <p>Naast het doorlopend werken aan projecten voor echte opdrachtgevers, werken studenten in <a href="/design-challenge/sprint-6">sprint 6</a> en <a href="/design-challenge/sprint-12">sprint 12</a> van de opleiding aan een design challenge voor een agency. In drie weken ontwerpen en bouwen de studenten een proof of concept en presenteren dit bij de opdrachtgever.</p> 
        <p>Het is voor studenten een eerste kennismaking met het werkveld en kans om een kijkje in de keuken van een agency te nemen.</p>

    </div>
</section>



<style>
    .cta-row.portfolio {
        gap:0
    }
    .portfolio .cta {
        padding:0;
        background:none;
        display:flex;
    }
    .portfolio .cta h3 {
        text-transform: capitalize;
        margin-bottom: 0;
        /* font-weight: normal; */
    }
    .portfolio .cta img {
        width: 100%;
        aspect-ratio:3 / 2;
        margin-bottom: 0;
        border-radius: 1rem;
        border:1px solid var(--blue);
        margin-top: auto;
    }
    .portfolio .cta ul {
        display: flex;
        justify-content: start;
        list-style: none;
        gap: 1rem;
        padding:0;
        margin-bottom: 2rem;
    }
    section > a {
        justify-self: center;
    }
    a {
        text-decoration: underline;
    }
    a:hover {
        text-decoration: none;
    }

</style>
