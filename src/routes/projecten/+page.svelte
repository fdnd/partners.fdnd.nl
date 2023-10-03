<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<header class="rounded green-on-blue">
    <div>
        <h2>Samenwerken aan projecten bij FDND</h2>

        <p><a href="https://fdnd.nl/">FDND</a> is een 2-jarige, praktijgerichte HBO opleidingen, waarin aan projecten werken voor echte opdrachtgevers is ingebed in het onderwijs.</p>
    </div>
    
    
</header>

<section class="rounded green-on-blue" id="projecten">
    <h2>Projecten</h2>
    <h3>2023 - 2024</h3>

    <ul>
        <li>...</li>
    </ul>

    <h3>2022 - 2023</h3>
    <ul>
		{#each data.projects as project}
		<li>
			<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-code-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
				<path d="M10 12h-1v5h1" />
				<path d="M14 12h1v5h-1" />
				<path d="M14 3v4a1 1 0 0 0 1 1h4" />
				<path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
			</svg>
			<a href="projecten/{project.slug}" data-sveltekit-preload-data>
				{project.title}
			</a>
		</li>
		{/each}
	</ul>

    <figure>
        <img src="/img/review-sprint-9.jpeg" alt="Review sprint 12" class="rounded">
        <figcaption>Studenten werken samen aan projecten</figcaption>
    </figure>
    
</section>

<section class="rounded blue-on-green" id="semesters-en-sprints">
    <h2>Werkwijze</h2>
	<h3>Semesters & Sprints</h3>
    <p>Elk semester bestaat uit 6 sprints van ieder 3 weken. Tijdens de middelste 4 sprints van de eerste 3 semesters itereren studententeams aan de hand van een backlog op de projecten.</p>
    <figure>
        <img src="/img/projecten-sprints.png" alt="Projecten sprints" class="rounded">

        <figcaption>Semesters en sprints (in de paars gearceerde sprints werken de studenten aan doorlopende projecten)</figcaption>
    </figure>
    <p>In totaal werken de studententeams dus 12 sprints van ieder 3 weken aan de projecten. Er zit een opbouw in de semesters in complexiteit van de te bouwen web applicatie; In het <a href="https://programma.fdnd.nl/static-web">eerste semester</a> starten de studenten met het ontwerpen en bouwen van statische websites. In het <a href="https://programma.fdnd.nl/data-driven-web">tweede semester</a> is het uitgangspunt van de website dynamische data uit een API. Tenslotte in het <a href="https://programma.fdnd.nl/workflow-tooling-frameworks">derde semester</a> wordt het project afgerond naar een robuste gebruiksvriendelijke toepassing.</p>
    
    <a href="https://programma.fdnd.nl/">Bekijk hier het FDND programma</a>

	<h3>Backlog</h3>
    <p>De voortgang van het project wordt bijgehouden in een backlog. Voor elke sprints worden user stories klaargezet in de backlog. Aan de hand van de user stories werken de studenten aan de projecten. Omdat we de voortgang van projecten op deze manieren bijhouden kunnen we heel gericht projecten laten aansluiten bij andere programma's van andere opleidingen bij de HvA. </p>
    <figure>
        <img src="/img/backlog.png" alt="Voorbeeld van een backlog bij FDND">
        <figcaption>Backlog met user stories en taken</figcaption>
    </figure>
    

	<h3>Sprint reviews</h3>
    <p>Elke sprint presenteren de studenten hun werk in een sprint review. Tijdens de review wordt de backlog bekeken en waar nodig aangepast, zodat het duidelijk is waar de volgende sprint aan gewerkt kan worden.</p>

    <figure>
        <img src="/img/review-sprint-12.jpeg" alt="Review sprint 9" class="rounded">
        <figcaption>
            Studenten presenteren het werk bij de opdrachtgever en krijgen feedback.
        </figcaption>
    </figure>
    
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
    section ul,
    section ul li {
        list-style:none !important;
        margin-left:0;
    }
    section ul {
        margin-bottom: 3rem;
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
