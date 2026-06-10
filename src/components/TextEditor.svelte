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
	rows={12}
	class="w-full min-h-72 rounded-2xl border border-[#4b3568] bg-[#120d1f] p-4 font-mono text-sm leading-6 text-[#f7f0e2] shadow-inner outline-none transition placeholder:text-[#8f7fa7] focus:border-[#f2c14e] focus:ring-2 focus:ring-[#8e62ff]/25"
/>