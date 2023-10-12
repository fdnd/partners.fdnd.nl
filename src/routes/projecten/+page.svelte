<script>
    import { Block, CollapsingColumns } from "@fdnd/components"
    import BulletIcon from "$lib/components/icons/bullet.svelte"
    export let data
</script>

<Block class="blue-on-green gradient rounded title-outset-left bleed" tag="section">
    <h2>Projecten</h2>

    <p>Studenten werken, 4 sprints van elk semester, doorlopend aan projecten voor echte opdrachtgevers. In twee jaar ontwerpen en ontwikkelen studenten, aan de hand van agile methodes, een betekenisvol en bruikbaar eindproduct. <a href="#semesters-en-sprints">Lees hier meer over de semesters en sprints</a>.</p>

    <CollapsingColumns>
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
                <li><BulletIcon /><a href="/">Cmmentary Tool UltiTV</a></li>
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
    </CollapsingColumns>    
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
        <p> In het derde semester leren de studenten werken met frameworks en wordt het project afgerond. De werken de studenten toe naar een robuste, schaalbare en overdraagbare website die opgebouwd is uit componenten.</p>

        <p><a href="https://programma.fdnd.nl/">Bekijk hier het FDND programma</a></p>
    </Block>

    <Block class="rounded green-on-blue title-outset-right" tag="section">
        <h2 id="backlog">Backlog</h2>
        <p>De voortgang van het project wordt bijgehouden in een backlog. Voor elke sprints worden user stories en de hand van de user stories werken de studenten aan de projecten.</p>
        
        <figure>
            <img
                src="/img/backlog.png"
                alt="Voorbeeld van een backlog bij FDND"
            />
            <figcaption>Backlog met user stories en taken</figcaption>
        </figure>

        <p>Omdat we de voortgang van projecten op deze manieren bijhouden kunnen we heel gericht projecten laten aansluiten bij andere programma's van andere opleidingen bij de HvA, bijvoorbeeld bij de <a href="https://everythingweb.org/">Minor Web Design & Development</a> bij CMD Amsterdam.</p>
    </Block>
</CollapsingColumns>

<CollapsingColumns>
    <Block class="rounded green-on-blue title-outset-left" tag="section">
        <h2>Sprint reviews</h2>
        <p> Elke sprint presenteren de studenten hun werk in een sprint review. Tijdens de review wordt de backlog bekeken en waar nodig aangepast, zodat het duidelijk is waar de volgende sprint aan gewerkt kan worden.</p>
    </Block>

    <figure>
        <img src="/img/review-sprint-12.jpeg" alt="Studenten presenteren het werk bij de opdrachtgever en krijgen feedback." class="rounded"/>
    </figure>
</CollapsingColumns>

<Block class="rounded purple-on-blue" tag="section">
    <h2 id="studentenwerk">Studentenwerk</h2>

    <ul class="gallery">
        <li>
            <a href="/"
                ><img
                    src="/img/projecten/arexan.png"
                    alt="Arexan @Simplicate"
                /></a
            >
        </li>
        <li>
            <a href="/"
                ><img
                    src="/img/projecten/demi.png"
                    alt="Demi @The Ocean Cleanup"
                /></a
            >
        </li>
        <li>
            <a href="/"
                ><img
                    src="/img/projecten/ivar.png"
                    alt="Ivar @Correspondent"
                /></a
            >
        </li>

        <li>
            <a href="/"
                ><img
                    src="/img/projecten/jalal.png"
                    alt="Jalal @TheOcean Cleanup"
                /></a
            >
        </li>
        <li>
            <a href="/"
                ><img
                    src="/img/projecten/luuk.png"
                    alt="Luuk @Vervoerregio"
                /></a
            >
        </li>
        <li>
            <a href="/"
                ><img src="/img/projecten/milan.png" alt="Milan @INK" /></a
            >
        </li>
        <li>
            <a href="/"
                ><img src="/img/projecten/ralph.png" alt="Ralp @PlantSwap" /></a
            >
        </li>

        <li>
            <a href="/"
                ><img src="/img/projecten/roelie.png" alt="Roelie @IO" /></a
            >
        </li>
        <li>
            <a href="/"
                ><img
                    src="/img/projecten/sanne.png"
                    alt="Sanne @The Ocean Cleanup"
                /></a
            >
        </li>
        <li>
            <a href="/"
                ><img
                    src="/img/projecten/stefan.png"
                    alt="Stefan @Correspondent"
                /></a
            >
        </li>
        <li>
            <a href="/"
                ><img src="/img/projecten/thomas.png" alt="Thomas @UltiTV" /></a
            >
        </li>
        <li>
            <a href="/"
                ><img src="/img/projecten/tom.png" alt="Tom @Schiphol" /></a
            >
        </li>
    </ul>
</Block>
