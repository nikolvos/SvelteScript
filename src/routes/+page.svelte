<script lang="ts">
	import { resolve } from '$app/paths';
	import SlidingGallery from '../components/SlidingGallery.svelte';

</script>

<div class="relative flex min-h-full w-full flex-col gap-8 overflow-hidden p-4 sm:p-6 lg:p-8">
	<div class="pointer-events-none absolute inset-x-0 top-0 z-0 h-72 bg-linear-to-b from-amber-500/20 via-transparent to-transparent blur-3xl"></div>

	<section class="relative z-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
		<div class="space-y-4">
			<div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100/80 backdrop-blur">
				Priprema za ispite
			</div>
			<h1 class="max-w-3xl text-3xl font-black leading-tight text-amber-100 sm:text-4xl lg:text-6xl">
				Sve što ti treba za ispite - <span class="text-amber-400">Omega</span>
			</h1>
			<p class="max-w-2xl text-sm leading-7 text-surface-200 sm:text-base lg:text-lg">
				Organizovani zadaci, programska rešenja i brz pristup ispitnom sadržaju na jednom mestu.
			</p>
			<div class="flex flex-col gap-3 sm:flex-row">
				<a href={resolve('/code')} class="inline-flex items-center justify-center rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-400">
					Pregledaj kod
				</a>
				<a href={resolve('/addCode')} class="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-amber-100 backdrop-blur transition hover:bg-white/10">
					Dodaj sadržaj
				</a>
			</div>
		</div>

		<div class="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
			<div class="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
				<p class="text-xs uppercase tracking-[0.2em] text-amber-100/60">Pokrivenost</p>
				<p class="mt-2 text-2xl font-bold text-amber-100">Strukturisano</p>
				<p class="mt-1 text-sm text-surface-200">Fascikle, pitanja i rešenja ostaju pregledni i laki za pretraživanje.</p>
			</div>
			<div class="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
				<p class="text-xs uppercase tracking-[0.2em] text-amber-100/60">Tok rada</p>
				<p class="mt-2 text-2xl font-bold text-amber-100">Brzo</p>
				<p class="mt-1 text-sm text-surface-200">Prelazak od pregleda do koda bez dodatnog zastoja.</p>
			</div>
			<div class="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur sm:col-span-3 lg:col-span-1">
				<p class="text-xs uppercase tracking-[0.2em] text-amber-100/60">Fokus</p>
				<p class="mt-2 text-2xl font-bold text-amber-100">Profesionalno</p>
				<p class="mt-1 text-sm text-surface-200">Jasnija hijerarhija, jači kontrast i bolji razmak.</p>
			</div>
		</div>
	</section>

	<section class="relative z-10 rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/10 backdrop-blur sm:p-4 lg:p-6">
		<div class="mb-4 flex items-center justify-between gap-3">
			<div>
				<p class="text-xs uppercase tracking-[0.2em] text-amber-100/60">Istaknuto</p>
				<h2 class="mt-1 text-lg font-semibold text-amber-100 sm:text-xl">Skorašnji primeri</h2>
			</div>
			<span class="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-surface-200 sm:inline-flex">Automatska galerija</span>
		</div>
		<SlidingGallery />
	</section>

	<footer class="relative z-10 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center backdrop-blur sm:py-4">
		<p class="text-sm font-medium text-surface-200 sm:text-base">&copy; 2026 NC1010111</p>
	</footer>
</div>


