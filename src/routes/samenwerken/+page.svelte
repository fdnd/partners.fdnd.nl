
<header class="rounded green-on-blue">
    <div>
        <h2>FDND Agency</h2>

        <p>De projecten waar we bij FDND aan werken noemen we FDND Agency. <a href="https://fdnd.nl/">FDND</a> is een 2-jarige, praktijgerichte HBO opleidingen, waarin aan projecten werken voor echte opdrachtgevers is ingebed in het onderwijs.</p>
        
    
        <h4>Op deze pagina:</h4>
        <ul>
            <li><a href="#duurzame-samenwerking">Duurzame samenwerking</a></li>
            <li><a href="#semesters-en-sprints">Semesters en sprints</a></li>
            <li><a href="#backlog">Backlog</a></li>
            <li><a href="#sprint-reviews">Sprint reviews</a></li>
            <li><a href="#studentenwerk">Studentenwerk</a></li>
        </ul>
    </div>
	
    
    <img src="/img/review-sprint-9.jpeg" alt="Review sprint 12" class="rounded">
</header>

<section class="rounded green-on-blue" id="duurzame-samenwerking">
    <h2>Duurzame samenwerking</h2>
    <p>FDND studenten werken aan kleine opdrachten (van een sprint) en aan grote projecten (van 3 semesters). De inzet is altijd een duurzame samenwerking.</p>
    <p>Projecten krijgen steeds meer betekenis door samen te kijken waar de mogelijkheden voor voor verdere iteraties liggen, bijvoorbeeld bij andere programma's of opleidingen binnen de HvA.</p>
    <p>De opdrachtgever kan op meerdere manieren aanhaken bij het onderwijs. Er zijn allerhande mogelijkheden voor stages, gastcollege's, talks en co-teaching.</p>
    <p>In een langere samenwerking op meerdere vlakken ontstaat een betekenisvolle, duurzame samenwerking.</p>
</section>

<section class="rounded blue-on-green" id="semesters-en-sprints">
	<h2>Semesters & Sprints</h2>
    <p>Elk semester bestaat uit 6 sprints van ieder 3 weken. Tijdens de middelste 4 sprints itereren studententeams aan de hand van een backlog op de projecten.</p>
    <p>In totaal werken de studententeams, 12 sprints van ieder 3 weken aan de projecten. Er zit een opbouw in de semesters in complexiteit van de te bouwen web applicatie; In het <a href="https://programma.fdnd.nl/static-web">eerste semester</a> starten de studenten met het ontwerpen en bouwen van statische websites. In het <a href="https://programma.fdnd.nl/data-driven-web">tweede semester</a> is het uitgangspunt van de website dynamische data uit een API. Tenslotte in het <a href="https://programma.fdnd.nl/workflow-tooling-frameworks">derde semester</a> wordt het project afgerond naar een robuste gebruiksvriendelijke toepassing.</p>
    Bekijk hier het programma: <a href="https://programma.fdnd.nl/">programma.fdnd.nl</a>
</section>

<section class="rounded green-on-blue" id="backlog">
	<h2>Backlog</h2>
    <p>De voortgang van het project wordt bijgehouden in een backlog. Voor elke sprints worden user stories klaargezet in de backlog. Aan de hand van de user stories werken de studenten aan de projecten. Omdat we de voortgang van projecten op deze manieren bijhouden kunnen we heel gericht projecten laten aansluiten bij andere programma's van andere opleidingen bij de HvA. </p>
    <img src="/img/backlog.png" alt="Voorbeeld van een backlog bij FDND">
</section>

<section class="rounded blue-on-green" id="sprint-reviews">
	<h2>Sprint reviews</h2>
    <p>Elke sprint presenteren de studenten hun werk in een sprint review. Tijdens de review wordt de backlog bekeken en waar nodig aangepast, zodat het duidelijk is waar de volgende sprint aan gewerkt kan worden.</p>

    <img src="/img/review-sprint-12.jpeg" alt="Review sprint 9" class="rounded">
</section>

<section class="rounded purple-on-blue studentwork" id="studentenwerk" >
	<h2>Studentenwerk</h2>
    
    <ul>
        <li><a href="/"><img src="/img/projecten/arexan.png" alt="Arexan @Simplicate"></a></li>
        <li><a href="/"><img src="/img/projecten/demi.png" alt="Demi @The Ocean Cleanup"></a></li>
        <li><a href="/"><img src="/img/projecten/ivar.png" alt="Ivar @Correspondent"></a></li>
        
        <li><a href="/"><img src="/img/projecten/jalal.png" alt="Jalal @TheOcean Cleanup"></a></li>
        <li><a href="/"><img src="/img/projecten/luuk.png" alt="Luuk @Vervoerregio"></a></li>
        <li><a href="/"><img src="/img/projecten/milan.png" alt="Milan @INK"></a></li>
        <li><a href="/"><img src="/img/projecten/ralph.png" alt="Ralp @PlantSwap"></a></li>

        <li><a href="/"><img src="/img/projecten/roelie.png" alt="Roelie @IO"></a></li>
        <li><a href="/"><img src="/img/projecten/sanne.png" alt="Sanne @The Ocean Cleanup"></a></li>
        <li><a href="/"><img src="/img/projecten/stefan.png" alt="Stefan @Correspondent"></a></li>
        <li><a href="/"><img src="/img/projecten/thomas.png" alt="Thomas @UltiTV"></a></li>
        <li><a href="/"><img src="/img/projecten/tom.png" alt="Tom @Schiphol"></a></li>

    </ul>
</section>


<style>
	header {
		padding:2rem;
        grid-area: auto;
        color:#fff;
        max-width:auto;
	}
    header *:after {
        display:none
    }
    section:not(section.studentwork) {
		min-height:auto;
		padding: 1rem 2rem;
	}
    section.studentwork {
        grid-column: 1 / -1;
        max-width:auto;
    }

    section.studentwork h2 {
        margin-bottom: 2rem;
    }

    section.studentwork ul {
        margin:0;
        list-style:none;
        gap:1rem;
        position: relative;
        overflow-x: scroll;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        scroll-snap-type: x mandatory;
        padding-bottom:1.5rem;
    }
    section.studentwork li {
        list-style:none !important;
        scroll-snap-align: start;
        min-width:20rem;
        height:10rem;
        object-fit: cover;
        object-position: left top;
        overflow:hidden;
        background-color: #fff;
        border-radius: var(--rounded);
    }
    section.studentwork a {
        display:block;
    }
    

    @media (min-width: 50rem) {
        header  {
            grid-column: 1 / -1;
            display:grid;
            grid-template-columns: repeat(2, 1fr);
            gap:1rem 
        }

        header img {
            transform: translateX(2rem)
        }
    }

</style>
