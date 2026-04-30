<!-- TextEditor.svelte -->
<script lang="ts">
	let { value = $bindable() } = $props();

	// Explicitly handle the input event
	function handleInput(event: Event) {
		const target = event.target as HTMLTextAreaElement;
		value = target.value;
		console.log('TextEditor updating value to:', target.value); // Debug
	}
</script>

<textarea
	value={value}
	oninput={handleInput}
	rows={5}
	class="w-full p-2 border rounded font-mono"
/>