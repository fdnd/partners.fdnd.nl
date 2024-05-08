<script>

</script>

<section id="studentenwerk">
    <h2>Studentenwerk</h2>

    <div>
        <article>
            <a href="https://lets-jam-webapplicatie-rouge.vercel.app/">
                <h3>The Ocean Cleanup</h3>
                <img src="/img/projecten/release-candidates/the-ocean-cleanup.png" alt="">
                <p>Een dashboard van The Ocean Cleanup met informatie over de verschillende Interceptors en de hoeveelheid opgeruimd plastic.</p>
            </a>
        </article>
    
        <article>
            <a href="https://jalaltoufik.github.io/INK-lets-jam-webapplicatie/">
                <h3>Where the real legends begin</h3>
                <img src="/img/projecten/release-candidates/ink.png" alt="">
                <p>Met deze website wil INK het verhaal uitdragen van jongeren die via voetbal een weg uit de sloppenwijken van Rio de Janeiro weten te vinden.</p>
            </a>
        </article>
    
        <article>
            <a href="https://fdnd-finalspatwater.netlify.app/">
                <h3>SPATwater</h3>
                <img src="/img/projecten/release-candidates/spatwater.png" alt="">
                <p>De website voor SPATwater; een nieuwe generatie enthousiaste hydrologen die met een technische achtergrond nét wat anders kijken naar ruimtelijke opgaven.</p>
            </a>
        </article>
    
        <article>
            <a href="https://toolgankelijk.vercel.app/">
                <h3>Toolgankelijkheid</h3>
                <img src="/img/projecten/release-candidates/toolgankelijkheid.png" alt="">
                <p>De Toolgankelijkheid applicatie voor Vervoerregio Amsterdam om partners te checken op de toegankelijkheid van hun websites.</p>
            </a>
        </article>
    
        <article>
            <a href="https://lets-jam-webapplicatie-weld.vercel.app/">
                <h3>Visual Thinking</h3>
                <img src="/img/projecten/release-candidates/visual-thinking.png" alt="">
                <p>Een platform die studenten leert om tekenen te gebruiken als communicatiemiddel.</p>
            </a>
        </article>
        
        <article>
            <a href="https://plantswap-webapplicatie.vercel.app/">
                <h3>PlantSwap</h3>
                <img src="/img/projecten/release-candidates/plantswap.png" alt="">
                <p>Een website voor Buurtcampus-Oost in Amsterdam waar je meer informatie kan vinden over de stekjes beschikbaar die beschikbaar zijn in de, door kinderen gemaakte, Stekjeskast. </p>
            </a>
        </article>
    
        <article>
            <a href="https://lets-jam-webapplicatie-five.vercel.app">
                <h3>Platform Grote Thema's</h3>
                <img src="/img/projecten/release-candidates/platform-grote-themas.png" alt="">
                <p>Het platform met werkvormen die helpen om grote thema's bespreekbaar en behapbaar te maken.</p>
            </a>
        </article>

        <article>
            <a href="https://lets-jam-webapplicatie-xi.vercel.app/">
                <h3>UltiTV</h3>
                <img src="/img/projecten/release-candidates/ulti-tv.png" alt="">
                <p>Een dashboard voor commentatoren van UltiTV bij ultimate frisbee wedstrijden.</p>
            </a>
        </article>
        
        <article>
            <a href="https://lets-jam-webapplicatie-lilac.vercel.app">
                <h3>Hallo Strandeiland</h3>
                <img src="/img/projecten/release-candidates/hallo-strandeiland.png" alt="">
                <p>Een website voor het participatie project Hallo Strandeiland, waar toekomstige bewoners ideeën kunen delen over de realisatie van de nieuwe wijk op IJburg.</p>
            </a>
        </article>
    
        <article>
            <a href="https://lets-jam-webapplicatie-phi.vercel.app">
                <h3>Mijn OBA</h3>
                <img src="/img/projecten/release-candidates/mijn-oba.png" alt="">
                <p>Een redesign voor de mijn OBA omgeving</p>
            </a>
        </article>
    </div>
    
</section>

<style>
	#studentenwerk {
        margin:02rem 4rem;
    }

    #studentenwerk div {
        display:flex;
        overflow-x:auto;
        /* scroll-snap-type: x mandatory; */
        margin:0;
        gap:2rem;   
    }
    
    article {
        display:flex;
        padding:0;
        flex:1 0 100%;
        border-radius:0 var(--rounded) var(--rounded);
        scroll-snap-align: center;
        position: relative;
        max-width:80vw;
        overflow:hidden;
    }

    @supports (animation-timeline: scroll()) {
        article {
            view-timeline-name: --extend-info;
            view-timeline-axis: inline;
            view-timeline-inset: 0% 20%;
            animation-range: 25% 50%;

            animation: linear appear both;
            animation-timeline: --extend-info;
        }
            
    }
    article h3 {
        padding:.75rem 1rem 1rem;
        margin-left: 0;
        margin-bottom: 0 !important;
        background-color: var(--color-green);
        color:var(--color-blue);
        font-size: 1.15rem;
        font-weight: 600;
        white-space: nowrap;
        border-radius:var(--rounded) var(--rounded) 0 0
    }
    article a {
        display:flex;
        flex-direction: column;
        align-items:flex-start;
        text-decoration: none;
        overflow:hidden;
    }
    @supports (animation-timeline: scroll()) {
        article a {
            animation: linear appear both;
            animation-timeline: --extend-info;
        }
    }

    
    article a:hover {
        text-decoration: none;
    }
    article a::after {
        display:none;
    }

    article img {
        margin-top: -0.5rem;
        border-radius:0 var(--rounded) 0 0;
        z-index:2;
    }

    article p {
        background:  var(--color-green);
        color: var(--color-blue);
        padding:1rem;
        border-radius:0 0 var(--rounded) var(--rounded);
        align-self: center;
        justify-self: center;
        max-width:30rem;
        font-size: .9em;
        width:100%;
    }

    article footer ul a {
        background:  var(--color-purple);
        color: var(--color-blue);
        padding:.5rem;
        font-size: .9em;
        border-radius:var(--rounded);
    }
    article footer ul a:hover,
    article footer ul a:focus-visible {
        background:  var(--color-green);
    }

	@media (min-width:50em) {
        article p {
            background:  var(--color-green);
            color: var(--color-blue);
            padding:1rem;
            border-radius:var(--rounded);
            align-self: flex-start;
            z-index:10;
            max-width:30rem;
            position:absolute;
            bottom:2rem;
            right:2rem;
        }

        @supports (animation-timeline: scroll()) {
            article p {
                animation: linear slide-left both;
                animation-timeline: --extend-info;
            }

            article ul {
                animation: linear slide-right both;
                animation-timeline: --extend-info;
            }
        } 
    }


    /* animations */
    @keyframes appear {
        0% {
            opacity:.5;
            scale:.9;
        }
        50% {
            opacity:1;
            scale:1;
        }
        100% {
            opacity: .1;
            scale:.9;
        }
    }

    @keyframes slide-left {
        10% {
            translate:100% 0
        }
        50% {
            translate:0 0
        }
        90% {
            translate:-100% 0
        }
    }

    @keyframes slide-right {
        0% {
            translate:-100% 0;
        }
        50% {
            translate:0 0;
        }
        100% {
            translate:100% 0;
        }
    }
</style>
