<!--<script lang="ts">-->
<!--	import { Steps } from '@skeletonlabs/skeleton-svelte';-->
<!--	import TextEditor from '../../components/TextEditor.svelte';-->
<!--	import {addQuestion,folderStructure} from '../../stores/store.svelte';-->

<!--	const steps = [-->

<!--		{ title: 'Tekst zadatka', content: 'Unesite tekst zadatka' },-->
<!--		{ title: 'Resenje (kod)', content: 'Then do that.' },-->
<!--		{ title: 'Resenje (algoritam)', content: 'Almost done...' },-->
<!--	];-->

<!--	let q = $state({folderName:"",question:"", answerCode:"", answerAlgorithm:""})-->
<!--	let step = $state(0);-->

<!--	// Check if we're on the last step (0-indexed: step 2 is last content step)-->
<!--	const isLastStep = $derived(step === steps.length - 1);-->

<!--	// Submit function-->
<!--	function handleSubmit() {-->
<!--		console.log('Submitting data:', q);-->
<!--		// Add your API call or form submission logic here-->
<!--		// Example: fetch('/api/questions', { method: 'POST', body: JSON.stringify(q) })-->
<!--	}-->

<!--	// Handle next/submit click-->
<!--	function handleNextOrSubmit() {-->
<!--		if (isLastStep) {-->
<!--			handleSubmit();-->
<!--		} else {-->
<!--			// Navigate to next step-->
<!--			step = step + 1;-->
<!--		}-->
<!--	}-->

<!--	// addQuestion({folderName:"PrviNekiTamo",question:"NekoPitanje", answerCode:"lalalal", answerAlgorithm:{}})-->
<!--</script>-->

<!--<div class="p-15 h-screen w-full">-->
<!--	<Steps {step} onStepChange={(details) => (step = details.step)} count={steps.length} class="w-full">-->
<!--		<Steps.List>-->
<!--			{#each steps as item, index}-->
<!--				<Steps.Item {index}>-->
<!--					<Steps.Trigger>-->
<!--						<Steps.Indicator>{index + 1}</Steps.Indicator>-->
<!--						{item.title}-->
<!--					</Steps.Trigger>-->
<!--					{#if index < steps.length - 1}-->
<!--						<Steps.Separator />-->
<!--					{/if}-->
<!--				</Steps.Item>-->
<!--			{/each}-->
<!--		</Steps.List>-->

<!--		&lt;!&ndash; Step 1 Content &ndash;&gt;-->
<!--		<Steps.Content index={0}>-->
<!--&lt;!&ndash;			<TextEditor bind:value={q.question} />&ndash;&gt;-->
<!--			<form class="w-full max-w-md space-y-4 p-4">-->
<!--				<fieldset class="space-y-4">-->

<!--					&lt;!&ndash; Select &ndash;&gt;-->
<!--					<label class="label">-->
<!--						<span class="label-text">Izaberite blaket</span>-->
<!--						<select class="select">-->
<!--							{#each folderStructure as root}-->
<!--								{#each root.children as folder}-->
<!--									<option value={q.folderName}>-->
<!--										&lt;!&ndash;{#each folder.children as file}&ndash;&gt;-->
<!--										&lt;!&ndash;	<option value={file.id}>{file.name}</option>&ndash;&gt;-->
<!--										&lt;!&ndash;{/each}&ndash;&gt;-->
<!--										{folder.id}-->
<!--									</option>-->
<!--								{/each}-->
<!--							{/each}-->
<!--						</select>-->
<!--					</label>-->
<!--					&lt;!&ndash; Textarea &ndash;&gt;-->
<!--					<label class="label">-->
<!--						<span class="label-text">Tekst zadatka</span>-->
<!--						<textarea class="textarea rounded-container" rows="4" bind:value={q.question-->
<!--						} placeholder="Unesite tekst zadatka"-->
<!--						></textarea>-->
<!--					</label>-->
<!--				</fieldset>-->
<!--				<fieldset class="flex justify-end">-->
<!--					&lt;!&ndash; Button &ndash;&gt;-->
<!--&lt;!&ndash;					<button type="button" class="btn preset-outlined-surface-300-700">Submit</button>&ndash;&gt;-->
<!--				</fieldset>-->
<!--			</form>-->
<!--		</Steps.Content>-->

<!--		&lt;!&ndash; Step 2 Content &ndash;&gt;-->
<!--		<Steps.Content index={1}>-->
<!--			<TextEditor bind:value={q.answerCode} />-->
<!--		</Steps.Content>-->

<!--		&lt;!&ndash; Step 3 Content &ndash;&gt;-->
<!--		<Steps.Content index={2}>-->
<!--			<textarea bind:value={q.answerAlgorithm} />-->
<!--		</Steps.Content>-->

<!--		<Steps.Content index={steps.length}>All done!</Steps.Content>-->

<!--		<div class="flex justify-between items-center gap-2">-->
<!--			<Steps.PrevTrigger class="btn preset-filled">Back</Steps.PrevTrigger>-->

<!--			&lt;!&ndash; Conditional button: either Next or Submit &ndash;&gt;-->
<!--			{#if !isLastStep}-->
<!--				<Steps.NextTrigger class="btn preset-filled">Next</Steps.NextTrigger>-->
<!--			{:else}-->
<!--				<button-->
<!--					class="btn preset-filled"-->
<!--					onclick={handleSubmit}-->
<!--				>-->
<!--					Submit-->
<!--				</button>-->
<!--			{/if}-->
<!--		</div>-->
<!--	</Steps>-->
<!--</div>-->
<script lang="ts">
	import { Steps } from '@skeletonlabs/skeleton-svelte';
	import TextEditor from '../../components/TextEditor.svelte';
	import { addQuestion, folderStructureStore } from '../../stores/store.svelte';

	const steps = [
		{ title: 'Tekst zadatka', content: 'Unesite tekst zadatka' },
		{ title: 'Resenje (kod)', content: 'Then do that.' },
		{ title: 'Resenje (algoritam)', content: 'Almost done...' },
	];

	let q = $state({ folderName: "", question: "", answerCode: "", answerAlgorithm: "" });
	let step = $state(0);

	// Check if we're on the last step (0-indexed: step 2 is last content step)
	const isLastStep = $derived(step === steps.length - 1);

	// Submit function
	function handleSubmit() {
		console.log('Submitting data:', q);

		// Call addQuestion with the data
		addQuestion({
			folderName: q.folderName,  // This will be the folder ID (e.g., "OP_2024_01_K")
			question: q.question,
			answerCode: q.answerCode,
			answerAlgorithm: q.answerAlgorithm
		});

		// Optional: Reset form or show success message
		alert('Pitanje je uspešno dodato!');

		// Optional: Reset form and go back to first step
		// q = { folderName: "", question: "", answerCode: "", answerAlgorithm: "" };
		// step = 0;
	}

	// Handle next/submit click
	function handleNextOrSubmit() {
		if (isLastStep) {
			handleSubmit();
		} else {
			// Navigate to next step
			step = step + 1;
		}
	}
</script>

<div class="p-15 h-screen w-full">
	<Steps {step} onStepChange={(details) => (step = details.step)} count={steps.length} class="w-full">
		<Steps.List>
			{#each steps as item, index}
				<Steps.Item {index}>
					<Steps.Trigger>
						<Steps.Indicator>{index + 1}</Steps.Indicator>
						{item.title}
					</Steps.Trigger>
					{#if index < steps.length - 1}
						<Steps.Separator />
					{/if}
				</Steps.Item>
			{/each}
		</Steps.List>

		<!-- Step 1 Content -->
		<Steps.Content index={0}>
			<form class="w-full max-w-md space-y-4 p-4">
				<fieldset class="space-y-4">

					<!-- Select -->
					<label class="label">
						<span class="label-text">Izaberite folder</span>
						<select class="select" bind:value={q.folderName}>
							<option value="" disabled selected>-- Izaberite folder --</option>
							{#each $folderStructureStore as root}
								{#each root.children as folder}
									<option value={folder.id}>
										{folder.name}
									</option>
								{/each}
							{/each}
						</select>
					</label>

					<!-- Textarea -->
					<label class="label">
						<span class="label-text">Tekst zadatka</span>
						<textarea
							class="textarea rounded-container"
							rows="4"
							bind:value={q.question}
							placeholder="Unesite tekst zadatka"
						></textarea>
					</label>
				</fieldset>
			</form>
		</Steps.Content>

		<!-- Step 2 Content -->
		<Steps.Content index={1}>
			<TextEditor bind:value={q.answerCode} />
		</Steps.Content>

		<!-- Step 3 Content -->
		<Steps.Content index={2}>
			<textarea bind:value={q.answerAlgorithm} rows="10" class="w-full p-2 border rounded" />
		</Steps.Content>

		<Steps.Content index={steps.length}>All done!</Steps.Content>

		<div class="flex justify-between items-center gap-2">
			<Steps.PrevTrigger class="btn preset-filled">Back</Steps.PrevTrigger>

			<!-- Conditional button: either Next or Submit -->
			{#if !isLastStep}
				<Steps.NextTrigger class="btn preset-filled">Next</Steps.NextTrigger>
			{:else}
				<button
					class="btn preset-filled"
					onclick={handleSubmit}
				>
					Submit
				</button>
			{/if}
		</div>
	</Steps>
</div>