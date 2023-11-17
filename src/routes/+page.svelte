<script>
    import Elem_01 from "./Elem_01.svelte";
    import Elem_02 from "./Elem_02.svelte";
    import Elem_03 from "./Elem_03.svelte";
    import Elem_04 from "./Elem_04.svelte";
    import Elem_05 from "./Elem_05.svelte";
    import Elem_06 from "./Elem_06.svelte";
    import Elem_07 from "./Elem_07.svelte";
    import Elem_08 from "./Elem_08.svelte";
    import Elem_09 from "./Elem_09.svelte";
    import Elem_10 from "./Elem_10.svelte";
</script>

<div class="grid-container">
    <Elem_01 />
    <Elem_02 />
    <Elem_03 />

    <Elem_04 />
    <Elem_05/>
    <Elem_06 />

    <Elem_07 />
    <Elem_08 />
    <Elem_09 />
    <Elem_10/>
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
