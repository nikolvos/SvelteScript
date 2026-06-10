
<script lang="ts">
	import { Steps } from '@skeletonlabs/skeleton-svelte';
	import TextEditor from '../../components/TextEditor.svelte';
	import { addQuestion, folderStructureStore } from '../../stores/store.svelte';

	const steps = [
		{ title: 'Osnova', description: 'Izbor foldera i opis zadatka.' },
		{ title: 'Kod', description: 'Programsko rešenje zadatka.' },
		{ title: 'Algoritam', description: 'Dodatno objašnjenje ili dijagram toka.' },
	];

	let q = $state({ folderName: '', question: '', answerCode: '', answerAlgorithm: '' });
	let step = $state(0);
	let statusMessage = $state<string | null>(null);

	const currentStep = $derived(steps[step] ?? steps[0]);
	const isLastStep = $derived(step === steps.length - 1);
	const canContinueFromStepOne = $derived(q.folderName.trim().length > 0 && q.question.trim().length >= 20);
	const canSubmit = $derived(
		q.folderName.trim().length > 0 &&
		q.question.trim().length > 0 &&
		q.answerCode.trim().length > 0
	);
	const completion = $derived(Math.round(((step + 1) / steps.length) * 100));
	const questionLength = $derived(q.question.trim().length);
	const selectedFolderLabel = $derived(findFolderLabel(q.folderName));

	function findFolderLabel(folderId: string) {
		for (const root of $folderStructureStore) {
			const folder = root.children?.find((item) => item.id === folderId);
			if (folder) return folder.name;
		}

		return 'Nije izabran';
	}

	function goPrevious() {
		step = Math.max(step - 1, 0);
	}

	function goNextOrSubmit() {
		if (step === 0 && !canContinueFromStepOne) {
			return;
		}

		if (isLastStep) {
			handleSubmit();
			return;
		}

		step = step + 1;
		statusMessage = null;
	}

	function handleSubmit() {
		if (!canSubmit) {
			statusMessage = 'Popunite obavezna polja pre slanja.';
			return;
		}

		addQuestion({
			folderName: q.folderName,
			question: q.question,
			answerCode: q.answerCode,
			answerAlgorithm: q.answerAlgorithm
		});

		statusMessage = 'Zadatak je uspešno dodat.';
		q = { folderName: '', question: '', answerCode: '', answerAlgorithm: '' };
		step = 0;
	}
</script>

<div class="min-h-full w-full bg-linear-to-b from-[#090611] via-[#130d22] to-[#1f142f] px-4 py-6 text-[#f6efd9] sm:px-6 lg:px-8">
	<div class="mx-auto flex max-w-6xl flex-col gap-6">
		<section class="overflow-hidden rounded-3xl border border-[#4b3568] bg-[#120d1f] shadow-2xl shadow-black/40">
			<div class="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
				<div class="space-y-4">
					<div class="inline-flex items-center gap-2 rounded-full border border-[#f2c14e]/20 bg-[#f2c14e]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#f2d48b]">
						Dodavanje zadatka
					</div>
					<h1 class="max-w-3xl text-3xl font-black tracking-tight text-[#fbf5e5] sm:text-4xl lg:text-5xl">
						Dodaj novi zadatak
					</h1>
					<p class="max-w-2xl text-sm leading-7 text-[#d7cde3] sm:text-base lg:text-lg">
						Najvažnija polja su folder i tekst zadatka. Kod i algoritam dolaze nakon toga kao dopuna.
					</p>
					<div class="flex flex-wrap gap-3 text-sm text-[#d7cde3]">
						<span class="rounded-full border border-[#4b3568] bg-[#1a1328] px-3 py-1">Obavezno: folder i opis</span>
						<span class="rounded-full border border-[#4b3568] bg-[#1a1328] px-3 py-1">Opcionalno: algoritam</span>
					</div>
				</div>

				<div class="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
					<div class="rounded-2xl border border-[#4b3568] bg-[#1a1328] p-4 shadow-sm">
						<p class="text-xs uppercase tracking-[0.2em] text-[#c3b3da]">Folder</p>
						<p class="mt-2 text-lg font-semibold text-[#fbf5e5]">{selectedFolderLabel}</p>
					</div>
					<div class="rounded-2xl border border-[#4b3568] bg-[#1a1328] p-4 shadow-sm">
						<p class="text-xs uppercase tracking-[0.2em] text-[#c3b3da]">Korak</p>
						<p class="mt-2 text-lg font-semibold text-[#fbf5e5]">{currentStep.title}</p>
					</div>
					<div class="rounded-2xl border border-[#4b3568] bg-[#1a1328] p-4 shadow-sm">
						<p class="text-xs uppercase tracking-[0.2em] text-[#c3b3da]">Napredak</p>
						<p class="mt-2 text-lg font-semibold text-[#fbf5e5]">{completion}%</p>
					</div>
				</div>
			</div>

			<div class="h-1 bg-[#281b3a]">
				<div class="h-full bg-linear-to-r from-[#f2c14e] via-[#d8a43c] to-[#8e62ff] transition-all duration-300" style={`width: ${completion}%`}></div>
			</div>

			{#if statusMessage}
				<div class="border-t border-[#4b3568] bg-[#1a1328] px-5 py-3 text-sm text-[#f2d48b] sm:px-6">{statusMessage}</div>
			{/if}
		</section>

		<Steps {step} onStepChange={(details) => (step = details.step)} count={steps.length} class="w-full">
			<Steps.List class="flex flex-wrap gap-2 sm:gap-3">
				{#each steps as item, index (item.title)}
					<Steps.Item {index}>
						<Steps.Trigger class={`text-sm sm:text-base ${index < step ? 'opacity-75' : ''}`}>
							<Steps.Indicator>{index + 1}</Steps.Indicator>
							{item.title}
						</Steps.Trigger>
						{#if index < steps.length - 1}
							<Steps.Separator />
						{/if}
					</Steps.Item>
				{/each}
			</Steps.List>

			<div class="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
				<div class="space-y-6">
					<Steps.Content index={0}>
						<section class="rounded-3xl border border-[#4b3568] bg-[#160f24] p-5 shadow-lg shadow-black/25 sm:p-6">
							<div class="mb-5 flex items-start justify-between gap-4">
								<div>
									<p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#f2d48b]">Obavezni unos</p>
									<h2 class="mt-1 text-2xl font-bold text-[#fbf5e5]">Folder i tekst zadatka</h2>
									<p class="mt-2 text-sm leading-6 text-[#d7cde3]">Ovo je osnova zadatka. Bez ovoga nema smislenog unosa.</p>
								</div>
								<div class="rounded-full border border-[#4b3568] bg-[#1a1328] px-3 py-1 text-xs font-medium text-[#d7cde3]">
									{questionLength} znakova
								</div>
							</div>

							<div class="space-y-5">
								<label class="space-y-2">
									<span class="label-text text-sm font-semibold text-[#e6deef]">Izaberite folder *</span>
									<select class="select w-full border border-[#4b3568] bg-[#120d1f] text-[#fbf5e5] outline-none focus:border-[#f2c14e]" bind:value={q.folderName} required>
										<option value="" disabled hidden>-- Izaberite folder --</option>
										{#each $folderStructureStore as root (root.id)}
											{#each root.children as folder (folder.id)}
												<option value={folder.id}>{folder.name}</option>
											{/each}
										{/each}
									</select>
								</label>

								<label class="space-y-2">
									<span class="label-text text-sm font-semibold text-[#e6deef]">Tekst zadatka *</span>
									<textarea
										class="textarea w-full rounded-2xl border border-[#4b3568] bg-[#120d1f] p-4 text-base leading-7 text-[#f7f0e2] shadow-inner outline-none transition placeholder:text-[#8f7fa7] focus:border-[#f2c14e] focus:ring-2 focus:ring-[#8e62ff]/25"
										rows="6"
										bind:value={q.question}
										placeholder="Unesite jasan opis zadatka"
										aria-describedby="question-help"
									></textarea>
									<p id="question-help" class="text-sm text-[#c3b3da]">Što je opis precizniji, lakše će biti kasnije koristiti zadatak.</p>
								</label>
							</div>
						</section>
					</Steps.Content>

					<Steps.Content index={1}>
						<section class="rounded-3xl border border-[#4b3568] bg-[#160f24] p-5 shadow-lg shadow-black/25 sm:p-6">
							<div class="mb-4">
								<p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#f2d48b]">Programsko rešenje</p>
								<h2 class="mt-1 text-2xl font-bold text-[#fbf5e5]">Unesite kod</h2>
								<p class="mt-2 text-sm leading-6 text-[#d7cde3]">Ovde ide završna implementacija. Formatirajte rešenje pregledno i jasno.</p>
							</div>
							<TextEditor bind:value={q.answerCode} />
						</section>
					</Steps.Content>

					<Steps.Content index={2}>
						<section class="rounded-3xl border border-[#4b3568] bg-[#160f24] p-5 shadow-lg shadow-black/25 sm:p-6">
							<div class="mb-4 flex items-start justify-between gap-3">
								<div>
									<p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#f2d48b]">Dopuna</p>
									<h2 class="mt-1 text-2xl font-bold text-[#fbf5e5]">Algoritam ili objašnjenje</h2>
									<p class="mt-2 text-sm leading-6 text-[#d7cde3]">Ovaj deo nije obavezan, ali pomaže da se rešenje lakše razume.</p>
								</div>
								<span class="rounded-full border border-[#4b3568] bg-[#1a1328] px-3 py-1 text-xs font-medium text-[#d7cde3]">Opcionalno</span>
							</div>
							<textarea
								bind:value={q.answerAlgorithm}
								rows="10"
								class="w-full rounded-2xl border border-[#4b3568] bg-[#120d1f] p-4 text-base leading-7 text-[#f7f0e2] shadow-inner outline-none transition placeholder:text-[#8f7fa7] focus:border-[#f2c14e] focus:ring-2 focus:ring-[#8e62ff]/25"
								placeholder="Po želji dodajte algoritam, napomene ili kratko obrazloženje"
							></textarea>
						</section>
					</Steps.Content>

					<Steps.Content index={steps.length}>
						<section class="rounded-3xl border border-[#4b3568] bg-[#160f24] p-6 text-center shadow-lg shadow-black/25 sm:p-8">
							<p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#f2d48b]">Gotovo</p>
							<h2 class="mt-2 text-3xl font-bold text-[#fbf5e5]">Sve gotovo!</h2>
							<p class="mt-3 text-sm text-[#d7cde3]">Ako ste spremni, možete poslati zadatak ili se vratiti na prethodni korak.</p>
						</section>
					</Steps.Content>
				</div>

				<aside class="space-y-4">
					<div class="rounded-3xl border border-[#4b3568] bg-[#160f24] p-5 shadow-lg shadow-black/25">
						<p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#c3b3da]">Trenutni korak</p>
						<h3 class="mt-2 text-xl font-bold text-[#fbf5e5]">{currentStep.title}</h3>
						<p class="mt-2 text-sm leading-6 text-[#d7cde3]">{currentStep.description}</p>
					</div>

					<div class="rounded-3xl border border-[#4b3568] bg-[#160f24] p-5 shadow-lg shadow-black/25">
						<p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#c3b3da]">Status unosa</p>
						<div class="mt-3 space-y-2 text-sm text-[#e6deef]">
							<div class="flex items-center justify-between gap-3"><span>Folder</span><span class="font-medium">{q.folderName ? 'Izabran' : 'Nedostaje'}</span></div>
							<div class="flex items-center justify-between gap-3"><span>Tekst zadatka</span><span class="font-medium">{q.question.trim() ? 'Popunjen' : 'Nedostaje'}</span></div>
							<div class="flex items-center justify-between gap-3"><span>Kod</span><span class="font-medium">{q.answerCode.trim() ? 'Popunjen' : 'Nedostaje'}</span></div>
							<div class="flex items-center justify-between gap-3"><span>Algoritam</span><span class="font-medium">{q.answerAlgorithm.trim() ? 'Dodato' : 'Opcionalno'}</span></div>
						</div>
					</div>
				</aside>
			</div>

			<div class="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
				<button type="button" class="btn preset-filled" onclick={goPrevious} disabled={step === 0}>
					Nazad
				</button>

				<div class="flex flex-col gap-2 sm:flex-row sm:items-center">
					<span class="text-sm text-[#d7cde3]">Korak {step + 1} od {steps.length}</span>
					<button
						type="button"
						class="btn preset-filled"
						onclick={goNextOrSubmit}
						disabled={step === 0 && !canContinueFromStepOne}
					>
						{#if isLastStep}
							Pošalji
						{:else}
							Sledeće
						{/if}
					</button>
				</div>
			</div>
		</Steps>
	</div>
</div>