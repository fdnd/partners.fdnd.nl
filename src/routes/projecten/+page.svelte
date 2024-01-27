<script>
    import { Block, CollapsingColumns } from "@fdnd/components"
    import BulletIcon from "$lib/components/icons/bullet.svelte"
    export let data
</script>

<Block class="blue-on-green rounded title-outset-left bleed" tag="section">
    <h2>Projecten</h2>

    <p>Studenten werken, 4 sprints van elk semester, doorlopend aan projecten voor echte opdrachtgevers. In twee jaar ontwerpen en ontwikkelen studenten, aan de hand van agile methodes, een betekenisvol en bruikbaar eindproduct. <a href="#semesters-en-sprints">Lees hier meer over de semesters en sprints</a>.</p>

    <!-- <CollapsingColumns>
        <Block tag="div" class="">
            <h3>2023 - 2024</h3>

            <ul>
                <li><BulletIcon /><a href="/">Dashboard The Ocean Cleanup</a></li>
                <li><BulletIcon /><a href="/">Buurtplatform De Hallen</a></li>
                <li><BulletIcon /><a href="/">Hallo Strandeiland</a></li>
                <li><BulletIcon /><a href="/">SPATwater.nl</a></li>
                <li><BulletIcon /><a href="/">Mijn Funda</a></li>
                <li><BulletIcon /><a href="/">Toolgankelijkheid</a></li>
                <li><BulletIcon /><a href="/">Platform Visual Thinking</a></li>
                <li><BulletIcon /><a href="/">Commentary Tool UltiTV</a></li>
            </ul>
        </Block>
    
        <Block tag="div" class="">
            <h3>2022 - 2023</h3>
            <ul>
                {#each data.projects as project}
                    <li>
                        <BulletIcon />
                        <a
                            href="projecten/{project.slug}"
                            data-sveltekit-preload-data
                        >
                            {project.title}
                        </a>
                    </li>
                {/each}
            </ul>
        </Block>
    </CollapsingColumns>     -->
</Block>

<CollapsingColumns>
    <Block class="rounded blue-on-green title-outset-left" tag="section" >
        <h2 id="semesters-en-sprints">Semesters & Sprints</h2>
        <p>
            In de semester en sprints zit een opbouw van toenemende complexiteit en afnemende sturing. Zo krijgen studenten steeds meer grip op hun eigen ontwikkeling en werken, aan de hand van een <a href="#backlog">Backlog</a> in toenemende mate zelfstandig aan de projecten.
        </p>

        <h3>
            <a href="https://programma.fdnd.nl/static-web">Semester 1: Static Web</a>
        </h3>
        <p>In het  eerste semester ontwerpen en bouwen de studenten statische websites. Hier worden de fundamenten voor het project gelegd met focus op het implementeren van de huisstijl, Toegankelijkheid en de flow van de website.</p>
        
        <h3>
            <a href="https://programma.fdnd.nl/data-driven-web">Semester 2: Data-Driven Web</a>
        </h3>
        <p>In het tweede semester werken de studenten verder aan het project, alleen nu op basis van dynamische data. De studenten leren hoe ze op de server data kunnen ophalen uit een API en dit vervolgens te renderen naar HTML.</p>
        
        <h3>
            <a href="https://programma.fdnd.nl/workflow-tooling-frameworks">Semester 3: semester</a>
        </h3>
        <p> In het derde semester leren de studenten werken met frameworks en wordt het project afgerond. De studenten werken toe naar een robuste, schaalbare en overdraagbare website die opgebouwd is uit componenten.</p>

        <p><a href="https://programma.fdnd.nl/">Bekijk hier het FDND programma</a></p>
    </Block>



    <Block class="rounded green-on-blue title-outset-left" tag="section">
        <h2 id="backlog">Backlog</h2>
        <p>De voortgang van het project wordt bijgehouden in een backlog. Voor elke sprints worden user stories en de hand van de user stories werken de studenten aan de projecten.</p>


        <p>Omdat we de voortgang van projecten op deze manieren bijhouden kunnen we heel gericht projecten laten aansluiten bij andere programma's van andere opleidingen bij de HvA, bijvoorbeeld bij de <a href="https://everythingweb.org/">Minor Web Design & Development</a> bij CMD Amsterdam.</p>
    </Block>

    <Block class="rounded green-on-blue title-outset-left" tag="section">
        <h2>Sprint reviews</h2>
        <p>Elke sprint presenteren de studenten hun werk in een sprint review. Tijdens de review wordt de backlog bekeken en waar nodig aangepast, zodat het duidelijk is waar de volgende sprint aan gewerkt kan worden.</p>
    </Block>


</CollapsingColumns>

<Block tag="section">
    <h2 id="studentenwerk">Studentenwerk</h2>

    <!-- <ul class="scroll">
        <li><a href="/"><img src="/img/projecten/arexan.png" alt="Arexan @Simplicate" /></a></li>
        <li><a href="/"><img src="/img/projecten/demi.png" alt="Demi @The Ocean Cleanup" /></a></li>
        <li><a href="/"><img src="/img/projecten/ivar.png" alt="Ivar @Correspondent" /></a></li>
        <li><a href="/"><img src="/img/projecten/jalal.png" alt="Jalal @TheOcean Cleanup"/></a></li>
        <li><a href="/"><img src="/img/projecten/luuk.png" alt="Luuk @Vervoerregio" /></a></li>
        <li><a href="/"><img src="/img/projecten/milan.png" alt="Milan @INK" /></a></li>
        <li><a href="/"><img src="/img/projecten/ralph.png" alt="Ralp @PlantSwap" /></a></li>
        <li><a href="/"><img src="/img/projecten/roelie.png" alt="Roelie @IO" /></a></li>
        <li><a href="/"><img src="/img/projecten/sanne.png" alt="Sanne @The Ocean Cleanup" /></a></li>
        <li><a href="/"><img src="/img/projecten/stefan.png" alt="Stefan @Correspondent" /></a></li>
        <li><a href="/"><img src="/img/projecten/thomas.png" alt="Thomas @UltiTV" /></a></li>
        <li><a href="/"><img src="/img/projecten/tom.png" alt="Tom @Schiphol" /></a></li>
    </ul> -->

    <article>
        <a href="/">
            <h3>The Ocean Cleanup - Dashboard</h3>
            <img src="/img/projecten/release-candidates/the-ocean-cleanup.png" alt="">
            <p></p>
        </a>
    </article>

    <article>
        <a href="/">
            <h3>INK Where the real legends begin</h3>
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
            <h3>Vervoerregio Amsterdam Toolgankelijkheid</h3>
            <img src="/img/projecten/release-candidates/toolgankelijkheid.png" alt="">
            <p></p>
        </a>
    </article>

    <article>
        <a href="/">
            <h3>Visual Thinking Platform</h3>
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
            <h3>Platform Grote Thema's</h3>
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
            <h3>Mijn OBA redesign</h3>
            <img src="/img/projecten/release-candidates/mijn-oba.png" alt="">
            <p></p>
        </a>
    </article>
</Block>

<style>
    #studentenwerk {
        margin:2rem -1rem;
    }

    #studentenwerk ~ article h3 {
        padding: 1rem;
        margin-left: 2rem;
        margin-bottom: 0 !important;
        background-color: var(--color-green);
        color:var(--color-blue)
    }
    article   {
        padding:2rem 0 4rem;
        margin:0 -3rem
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
</style>