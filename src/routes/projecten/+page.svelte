<script>
    import { Block, CollapsingColumns } from "@fdnd/components"
    import BulletIcon from "$lib/components/icons/bullet.svelte"
    export let data
</script>

<Block class="blue-on-green rounded title-outset-left bleed" tag="section">
    <h2>Projecten</h2>

    <p>Studenten werken, 4 sprints van elk semester, doorlopend aan projecten voor echte opdrachtgevers. In twee jaar ontwerpen en ontwikkelen studenten, aan de hand van agile methodes, een betekenisvol en bruikbaar eindproduct.</p>

</Block>

<CollapsingColumns>
    <Block class="rounded green-on-blue title-outset-left" tag="section" >
        <h2 id="semesters-en-sprints">Semesters & Sprints</h2>
        <p>
            In de semester en sprints zit een opbouw van toenemende complexiteit en afnemende sturing. Zo krijgen studenten steeds meer grip op hun eigen ontwikkeling.
        </p>

        <h3>
            Semester 1: Static Web
        </h3>
        <p>In het  eerste semester ontwerpen en bouwen de studenten statische websites. Hier worden de fundamenten voor het project gelegd met focus op het implementeren van de huisstijl, Toegankelijkheid en de flow van de website. <a href="https://programma.fdnd.nl/static-web">Semester 1: Static Web</a></p>
        
        <h3>
            Semester 2: Data-Driven Web
        </h3>
        <p>In het tweede semester werken de studenten verder aan het project, alleen nu op basis van dynamische data. De studenten leren hoe ze op de server data kunnen ophalen uit een API en dit vervolgens te renderen naar HTML. <a href="https://programma.fdnd.nl/data-driven-web">Semester 2: Data-Driven Web</a></p>
        
        <h3>
            Semester 3: semester
        </h3>
        <p> In het derde semester leren de studenten werken met frameworks en wordt het project afgerond. De studenten werken toe naar een robuste, schaalbare en overdraagbare website die opgebouwd is uit componenten. <a href="https://programma.fdnd.nl/workflow-tooling-frameworks">Semester 3: semester</a></p>

        <a href="https://programma.fdnd.nl/">Bekijk hier het FDND programma</a>
    </Block>

    <Block class="rounded green-on-blue title-outset-left" tag="section">
        <h2 id="backlog">Backlog</h2>
        <p>De voortgang van het project wordt bijgehouden in een backlog. Aan de hand van de epics, user stories en taken werken de studenten aan de projecten.</p>

        <p>Omdat we de voortgang van projecten op deze manier bijhouden, kunnen we heel gericht projecten laten aansluiten bij andere programma's van andere opleidingen bij de HvA, bijvoorbeeld bij de <a href="https://everythingweb.org/">Minor Web Design & Development</a> bij CMD Amsterdam.</p>
    </Block>

    <Block class="rounded green-on-blue title-outset-left" tag="section">
        <h2>Sprint reviews</h2>
        <p>Elke sprint presenteren de studenten hun werk in een sprint review. Tijdens de review wordt de backlog bekeken en waar nodig aangepast, zodat het duidelijk is waar de volgende sprint aan gewerkt kan worden.</p>
        <img src="/img/review-sprint-12.jpeg" alt="">
    </Block>
</CollapsingColumns>

<Block tag="section">
    <h2 id="studentenwerk">Studentenwerk</h2>

    <article>
        <a href="/">
            <h3>The Ocean Cleanup</h3>
            <img src="/img/projecten/release-candidates/the-ocean-cleanup.png" alt="">
            <p></p>
        </a>
    </article>

    <article>
        <a href="/">
            <h3>Where the real legends begin</h3>
            <img src="/img/projecten/release-candidates/ink.png" alt="">
            <p></p>
        </a>
    </article>

    <article>
        <a href="/">
            <h3>SPATwater</h3>
            <img src="/img/projecten/release-candidates/spatwater.png" alt="">
            <p></p>
        </a>
    </article>

    <article>
        <a href="/">
            <h3>Toolgankelijkheid</h3>
            <img src="/img/projecten/release-candidates/toolgankelijkheid.png" alt="">
            <p></p>
        </a>
    </article>

    <article>
        <a href="/">
            <h3>Visual Thinking</h3>
            <img src="/img/projecten/release-candidates/visual-thinking.png" alt="">
            <p></p>
        </a>
    </article>
    
    <article>
        <a href="/">
            <h3>PlantSwap</h3>
            <img src="/img/projecten/release-candidates/plantswap.png" alt="">
            <p></p>
        </a>
    </article>

    <article>
        <a href="/">
            <h3>Grote Thema's</h3>
            <img src="/img/projecten/release-candidates/platform-grote-themas.png" alt="">
            <p></p>
        </a>
    </article>
    <article>
        <a href="/">
            <h3>UltiTV</h3>
            <img src="/img/projecten/release-candidates/ulti-tv.png" alt="">
            <p></p>
        </a>
    </article>
    
    <article>
        <a href="/">
            <h3>Hallo Strandeiland</h3>
            <img src="/img/projecten/release-candidates/hallo-strandeiland.png" alt="">
            <p></p>
        </a>
    </article>

    <article>
        <a href="/">
            <h3>Mijn OBA</h3>
            <img src="/img/projecten/release-candidates/mijn-oba.png" alt="">
            <p></p>
        </a>
    </article>
</Block>

<style>
    :global(.collapsing-columns) {
        margin-top: 2rem;
        gap:2rem !important;
    }
    :global(.collapsing-columns section:first-of-type h3) {
        margin-top:3rem;
    }
    :global(.collapsing-columns section:first-of-type a) {
        display:block;
        margin-top: 1rem;
        font-size: .9em;
    }
    
    #studentenwerk {
        margin:1rem -1rem;
    }

    #studentenwerk ~ article h3 {
        padding: 1rem;
        margin-left: 1rem;
        margin-bottom: 0 !important;
        background-color: var(--color-green);
        color:var(--color-blue);
        border-radius:var(--rounded) var(--rounded) 0 0;
        font-size: 1rem;
        font-weight: bold;
    }
    article   {
        padding:0;
        margin:0 -2rem;
    }
    article a {
        display:flex;
        flex-direction: column;
        align-items:flex-start;
        text-decoration: none;
    }
    article a:hover {
        text-decoration: none;
    }

    article img {
        border-top:.5rem solid rgba(103, 229, 191, .85);
        margin-top: -0.5rem;
    }

    @media (min-width:50em) {
        :global(.collapsing-columns section:first-of-type) {
            grid-row-end: span 3;
            gap:2rem;
        }
        :global(.collapsing-columns section:last-of-type) {
            grid-row-start: span 1;
            grid-column: 2 / 3
        }

        article img {
            max-width: 95vw;
            border-radius: 0 var(--pilled) var(--pilled) 0
        }
    }

    @media (min-width: 80em) {
        article img {
            max-width: 85vw;
        }
    }
</style>