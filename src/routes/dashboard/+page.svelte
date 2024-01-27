    
<section>
    <h2>Studiejaar 2024 2025</h2>

    <h3>Semester 2</h3>
    <ul>
        <li><a href="/dashboard/projects/s2-2425">Projecten</a></li>
        <li><a href="/dashboard/design-challenges/s2-2425">Design Challenges</a></li>
        <li><a href="/dashboard/events/s2-2425">Evenementen</a></li>
    </ul>

    <h3>Semester 1</h3>
    <ul>
        <li><a href="/dashboard/projects/s1-2425">Projecten</a></li>
        <li><a href="/dashboard/design-challenges/s1-2425">Design Challenges</a></li>
        <li><a href="/dashboard/events/s1-2425">Evenementen</a></li>
    </ul>
</section>

<section class="current">
    <h2>Studiejaar 2023 2024</h2>

    <div>
        <h3>Semester 2</h3>
        <ul>
            <li><a href="/dashboard/projects/s1-2324">Projecten</a></li>
            <li><a href="/dashboard/design-challenges/s2-2324">Design Challenges</a></li>
            <li><a href="/dashboard/events/s2-2324">Evenementen</a></li>
        </ul>
    </div>

    <div>
        <h3 class="now">Semester 1</h3>
        <ul>
            <li><a href="/dashboard/projects/s1-2324">Projecten</a></li>
            <li><a href="/dashboard/design-challenges/s1-2324">Design Challenges</a></li>
            <li><a href="/dashboard/events/s1-2324">Evenementen</a></li>
        </ul>
    </div>

    
</section>

<section>
    <h2>Studiejaar 2022 2023</h2>

    <h3>Semester 2</h3>
    <ul>
        <li><a href="/">Projecten</a></li>
        <li><a href="/">Design Challenges</a></li>
        <li><a href="/">Evenementen</a></li>
    </ul>

    <h3>Semester 1</h3>
    <ul>
        <li><a href="/">Projecten</a></li>
        <li><a href="/">Design Challenges</a></li>
        <li><a href="/">Evenementen</a></li>
    </ul>
</section>

    
<style>
section {
    margin-left:1rem;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items: start;
    justify-content:start;
    padding:0 1rem 2rem;
    margin-bottom: 1rem;
    gap:1rem 2rem;
}
:not(section.current) h2 ~ * {
    display:none;
}
h2 {
    margin-left:-1rem;
    padding:.5rem !important;
    flex-basis:100%;
    flex-grow:1;
    color: var(--color-blue);
    background-color: var(--color-white);
    border-radius: var(--rounded);
}
section.current h2 {
    background-color: var(--color-green);
    border-radius: var(--rounded);
}
div {
    display:flex;
    flex-direction: column;
}
</style>

    



