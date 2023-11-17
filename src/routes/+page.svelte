<script>
    import Izq_S from "./Izq_S.svelte";
    import Cen_S from "./Cen_S.svelte";
    import Der_S from "./Der_S.svelte";
    import Izq_M from "./Izq_M.svelte";
    import Cen_M from "./Cen_M.svelte";
    import Der_M from "./Der_M.svelte";
    import Izq_B from "./Izq_B.svelte";
    import Cen_B1 from "./Cen_B1.svelte";
    import Cen_B2 from "./Cen_B2.svelte";
    import Der_B from "./Der_B.svelte";
</script>

<div class="grid-container">
    <Izq_S />
    <Cen_S />
    <Der_S />

    <Izq_M />
    <Cen_M />
    <Der_M />

    <Izq_B />
    <Cen_B1 />
    <Cen_B2 />
    <Der_B />
</div>

<style>
    .grid-container {
        display: grid;
        grid-template-columns: repeat(8,minmax(1fr));
        grid-template-rows: repeat(3,1fr);
        column-gap: 10px;
        row-gap: 10px;       
    }
</style>
