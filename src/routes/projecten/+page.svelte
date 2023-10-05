<script>
    import { Block, CollapsingColumns } from "@fdnd/components"
    export let data
</script>

<Block class="rounded blue-on-green " tag="header">
    <h2>Samenwerken aan projecten bij FDND</h2>

    <p>
        <a href="https://fdnd.nl/">FDND</a> is een 2-jarige, praktijgerichte HBO
        opleidingen, waarin aan projecten werken voor echte opdrachtgevers is ingebed
        in het onderwijs.
    </p>

    <figure>
        <img
            src="/img/review-sprint-9.jpeg"
            alt="Review sprint 12"
            class="rounded"
        />
        <figcaption>
            Studenten werken in teams samen aan échte projecten voor échte
            opdrachtgevers
        </figcaption>
    </figure>
</Block>

<CollapsingColumns>
    <Block class="rounded green-on-blue" tag="section">
        <h2>Projecten</h2>
        <h3>2023 - 2024</h3>

        <ul>
            <li>...</li>
        </ul>

        <h3>2022 - 2023</h3>
        <ul>
            {#each data.projects as project}
                <li>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-file-code-2"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 12h-1v5h1" />
                        <path d="M14 12h1v5h-1" />
                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                        <path
                            d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"
                        />
                    </svg>
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

    <Block class="rounded blue-on-green" tag="section">
        <h2>Semesters & Sprints</h2>
        <p>
            Elk semester bestaat uit 6 sprints van ieder 3 weken. Tijdens de
            middelste 4 sprints van de eerste 3 semesters itereren
            studententeams aan de hand van een backlog op de projecten.
        </p>
        <p>
            In totaal werken de studententeams dus 12 sprints van ieder 3 weken
            aan de projecten. Er zit een opbouw in de semesters in complexiteit
            van de te bouwen web applicatie; In het <a
                href="https://programma.fdnd.nl/static-web">eerste semester</a
            >
            starten de studenten met het ontwerpen en bouwen van statische
            websites. In het
            <a href="https://programma.fdnd.nl/data-driven-web"
                >tweede semester</a
            >
            is het uitgangspunt van de website dynamische data uit een API.
            Tenslotte in het
            <a href="https://programma.fdnd.nl/workflow-tooling-frameworks"
                >derde semester</a
            > wordt het project afgerond naar een robuste gebruiksvriendelijke toepassing.
        </p>

        <p>
            <a href="https://programma.fdnd.nl/"
                >Bekijk hier het FDND programma</a
            >
        </p>

        <figure>
            <img
                src="/img/projecten-sprints.png"
                alt="Projecten sprints"
                class="rounded"
            />

            <figcaption>
                Semesters en sprints (in de paars gearceerde sprints werken de
                studenten aan doorlopende projecten)
            </figcaption>
        </figure>
    </Block>

    <Block class="rounded blue-on-green" tag="section">
        <h2>Backlog</h2>
        <p>
            De voortgang van het project wordt bijgehouden in een backlog. Voor
            elke sprints worden user stories klaargezet in de backlog. Aan de
            hand van de user stories werken de studenten aan de projecten. Omdat
            we de voortgang van projecten op deze manieren bijhouden kunnen we
            heel gericht projecten laten aansluiten bij andere programma's van
            andere opleidingen bij de HvA.
        </p>
        <figure>
            <img
                src="/img/backlog.png"
                alt="Voorbeeld van een backlog bij FDND"
            />
            <figcaption>Backlog met user stories en taken</figcaption>
        </figure>
    </Block>

    <Block class="rounded blue-on-green" tag="section">
        <h2>Sprint reviews</h2>
        <p>
            Elke sprint presenteren de studenten hun werk in een sprint review.
            Tijdens de review wordt de backlog bekeken en waar nodig aangepast,
            zodat het duidelijk is waar de volgende sprint aan gewerkt kan
            worden.
        </p>

        <figure>
            <img
                src="/img/review-sprint-12.jpeg"
                alt="Review sprint 9"
                class="rounded"
            />
            <figcaption>
                Studenten presenteren het werk bij de opdrachtgever en krijgen
                feedback.
            </figcaption>
        </figure>
    </Block>
</CollapsingColumns>

<Block class="rounded pink-on-blue" tag="section">
    <h2 id="studentenwerk">Studentenwerk</h2>

    <ul>
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

<style>
    ul {
        display:flex;
        overflow-x: scroll;
        margin-bottom: 0;
        gap:2rem
    }
    ul img {
        min-width:30rem;
        aspect-ratio: 2/1;
    }
</style>
