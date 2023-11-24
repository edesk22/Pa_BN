<!-- +page.svelte -->
<script>

  export let data;
  console.log(data.props.data);

</script>


<h1>Lista de Clientes</h1>

{#each data.props.data as customer}
<p>{customer.CustomerID},{customer.CustomerName}</p>
{/each}

