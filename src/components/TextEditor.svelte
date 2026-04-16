<script lang="ts">
	import Monaco from 'svelte-monaco';

	let code = `var i = 1;`
</script>

<Monaco
	bind:value={code}
	options={{ language: 'javascript', automaticLayout: true }}
	theme="vs-dark"
	on:ready={(event) => console.log('Editor is ready', event.detail)}
/>

<!-- You can see the live, two-way binding in action -->
<textarea bind:value={code} rows={5} />