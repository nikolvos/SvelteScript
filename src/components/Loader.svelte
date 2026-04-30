<!--<script lang="ts">-->
<!--    let {id} = $props();-->
<!--    import { addQuestion } from '../stores/store.svelte';-->
<!--    interface loadedQ{-->
<!--        id: string;-->
<!--        question: string;-->
<!--        answerCode: string;-->
<!--        answerAlgorithm: any;-->
<!--    }-->

<!--    // import { questions } from '../constants/exams';-->
<!--    import { questions } from "../stores/store.svelte";-->
<!--    let loadedQuestion: loadedQ | undefined = $derived(findQuestionById(id));-->

<!--    function findQuestionById(questionId: string) {-->
<!--        for(let question of questions) {-->
<!--            if(question.id === questionId) {-->
<!--                return question;-->
<!--            }-->
<!--        }-->
<!--        return undefined;-->
<!--    }-->
<!--    // addQuestion({id:"123124",question:"Hello",answerCode:"12341", answerAlgorithm:""});-->

<!--</script>-->

<!--<div class="h-full w-full overflow-y-auto p-6 ">-->
<!--    {#if loadedQuestion}-->
<!--        <div class="space-y-6 ">-->


<!--            <div class="prose prose-lg max-w-none">-->
<!--                <h2 class="text-3xl font-semibold text-stone-800 flex items-center gap-2">-->
<!--                    Problem-->
<!--                </h2>-->
<!--                <p class="text-stone-700 leading-relaxed text-xl">-->
<!--                    {loadedQuestion.question}-->
<!--                </p>-->
<!--            </div>-->


<!--            <div class="space-y-2 ">-->
<!--                <h2 class="text-3xl font-semibold text-stone-800 flex items-center gap-2 mb-5">-->
<!--                    Solution-->
<!--                </h2>-->
<!--                <div class="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg">-->
<!--                &lt;!&ndash; Editor toolbar &ndash;&gt;-->
<!--                <div class="bg-[#2d2d2d] px-4 py-2 border-b border-[#3c3c3c] flex items-center gap-2">-->
<!--                    <div class="flex gap-2">-->
<!--                        <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>-->
<!--                        <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>-->
<!--                        <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>-->
<!--                    </div>-->
<!--                    <span class="text-xs text-gray-400 ml-2 font-mono">{loadedQuestion.id+".c"}</span>-->
<!--                </div>-->

<!--                &lt;!&ndash; Code content &ndash;&gt;-->
<!--                <pre class="p-6 overflow-x-auto"><code class="text-sm text-[#d4d4d4] font-mono leading-relaxed">{loadedQuestion.answerCode}</code></pre>-->
<!--            </div>-->

<!--            </div>-->

<!--            &lt;!&ndash; Algorithm Section (if exists) &ndash;&gt;-->
<!--            {#if loadedQuestion.answerAlgorithm}-->
<!--                <div class="space-y-2 ">-->
<!--                    <h2 class="text-3xl  font-semibold text-stone-800 flex items-center gap-2 mb-5">-->

<!--                        Algorithm-->
<!--                    </h2>-->

<!--                    <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">-->
<!--&lt;!&ndash;                        <pre class="text-sm text-gray-700 font-mono overflow-x-auto">&ndash;&gt;-->
<!--&lt;!&ndash;                            {JSON.stringify(loadedQuestion.answerAlgorithm, null, 2)}&ndash;&gt;-->
<!--&lt;!&ndash;                        </pre>&ndash;&gt;-->


<!--                    </div>-->
<!--                </div>-->
<!--            {/if}-->
<!--        </div>-->
<!--    {:else}-->
<!--        <div class="flex flex-col items-center justify-center h-full text-center space-y-4">-->
<!--            <div class="text-6xl">🔍</div>-->
<!--            <h2 class="text-2xl font-semibold text-gray-700">Question Not Found</h2>-->
<!--            <p class="text-gray-500">The question with ID "{id}" doesn't exist in our database.</p>-->
<!--        </div>-->
<!--    {/if}-->
<!--</div>-->

<script lang="ts">
    let { id } = $props();
    import { questionsStore } from '../stores/store.svelte';

    interface loadedQ {
        id: string;
        question: string;
        answerCode: string;
        answerAlgorithm: any;
    }

    // This will be reactive and update when new questions are added
    let loadedQuestion: loadedQ | undefined = $derived(findQuestionById(id));

    function findQuestionById(questionId: string) {
        // Use $questionsStore to get the current reactive value
        for(let question of $questionsStore) {
            if(question.id === questionId) {
                return question;
            }
        }
        return undefined;
    }
</script>

<div class="h-full w-full overflow-y-auto p-6 ">
    {#if loadedQuestion}
        <div class="space-y-6 ">
            <div class="prose prose-lg max-w-none">
                <h2 class="text-3xl font-semibold text-stone-800 flex items-center gap-2">
                    Problem
                </h2>
                <p class="text-stone-700 leading-relaxed text-xl">
                    {loadedQuestion.question}
                </p>
            </div>

            <div class="space-y-2 ">
                <h2 class="text-3xl font-semibold text-stone-800 flex items-center gap-2 mb-5">
                    Solution
                </h2>
                <div class="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg">
                    <div class="bg-[#2d2d2d] px-4 py-2 border-b border-[#3c3c3c] flex items-center gap-2">
                        <div class="flex gap-2">
                            <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                            <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                            <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                        </div>
                        <span class="text-xs text-gray-400 ml-2 font-mono">{loadedQuestion.id}.c</span>
                    </div>
                    <pre class="p-6 overflow-x-auto"><code class="text-sm text-[#d4d4d4] font-mono leading-relaxed">{loadedQuestion.answerCode}</code></pre>
                </div>
            </div>

            <!-- Algorithm Section (if exists) -->
            {#if loadedQuestion.answerAlgorithm && Object.keys(loadedQuestion.answerAlgorithm).length > 0}
                <div class="space-y-2 ">
                    <h2 class="text-3xl font-semibold text-stone-800 flex items-center gap-2 mb-5">
                        Algorithm
                    </h2>
                    <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <pre class="text-sm text-gray-700 font-mono overflow-x-auto">
                            {JSON.stringify(loadedQuestion.answerAlgorithm, null, 2)}
                        </pre>
                    </div>
                </div>
            {/if}
        </div>
    {:else}
        <div class="flex flex-col items-center justify-center h-full text-center space-y-4">
            <div class="text-6xl">🔍</div>
            <h2 class="text-2xl font-semibold text-gray-700">Question Not Found</h2>
            <p class="text-gray-500">The question with ID "{id}" doesn't exist in our database.</p>
        </div>
    {/if}
</div>

<style>

    .overflow-y-auto::-webkit-scrollbar {
        width: 8px;
    }

    .overflow-y-auto::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 4px;
    }

    .overflow-y-auto::-webkit-scrollbar-thumb {
        background: #c1c1c1;
        border-radius: 4px;
    }

    .overflow-y-auto::-webkit-scrollbar-thumb:hover {
        background: #a8a8a8;
    }

    /* Code block styling */
    pre, code {
        overflow-x: auto;
        white-space: pre-wrap;
        word-wrap: break-word;
    }

    /* Smooth transitions */
    .space-y-6 > * {
        transition: all 0.2s ease;
    }
</style>