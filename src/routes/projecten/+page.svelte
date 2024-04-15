<script>
    import { Block, CollapsingColumns } from "@fdnd/components"
    import StudentWork from "$lib/components/StudentWork.svelte"
    
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
        <p>In het  eerste semester ontwerpen en bouwen de studenten statische websites. Hier worden de fundamenten voor het project gelegd met focus op het implementeren van de huisstijl, Toegankelijkheid en de flow van de website. <a href="https://programma.fdnd.nl/static-web" class="semester">Semester 1: Static Web</a></p>
        
        <h3>
            Semester 2: Data-Driven Web
        </h3>
        <p>In het tweede semester werken de studenten verder aan het project, alleen nu op basis van dynamische data. De studenten leren hoe ze op de server data kunnen ophalen uit een API en dit vervolgens te renderen naar HTML. <a href="https://programma.fdnd.nl/data-driven-web" class="semester">Semester 2: Data-Driven Web</a></p>
        
        <h3>
            Semester 3: semester
        </h3>
        <p> In het derde semester leren de studenten werken met frameworks en wordt het project afgerond. De studenten werken toe naar een robuste, schaalbare en overdraagbare website die opgebouwd is uit componenten. <a href="https://programma.fdnd.nl/workflow-tooling-frameworks" class="semester">Semester 3: Workflow, Tooling & Frameworks</a></p>

        <a href="https://programma.fdnd.nl/" class="program rounded blue-on-green">Bekijk hier het FDND programma</a>
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


<StudentWork />


<style>
    :global(.collapsing-columns) {
        margin-top: 2rem;
        gap:2rem !important;
    }
    :global(.collapsing-columns section:first-of-type h3) {
        margin-top:3rem;
    }
    a.semester {
        display:block;
        margin-top: 1rem;
        font-size: .9em;
    }
    a.program {
        padding:.5rem;
        text-decoration:none;
        margin-top: 2rem;
    }
    a.program:hover {
        background-color: var(--color-purple);
        
    }
    
    @media (min-width:50em) {
        :global(.collapsing-columns:has(#semesters-en-sprints) section:first-of-type) {
            grid-row-end: span 3;
            gap:2rem;
        }
        :global(.collapsing-columns:has(#semesters-en-sprints) section:last-of-type) {
            grid-row-start: span 1;
            grid-column: 2 / 3;
        }
    }
</style>