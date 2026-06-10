<script lang="ts">
	import { FileIcon, FolderIcon } from '@lucide/svelte';
  import { folderStructure } from '../stores/store.svelte';
  import { TreeView, createTreeViewCollection } from '@skeletonlabs/skeleton-svelte';
  import Loader from './Loader.svelte';
import NotLoaded from './NotLoaded.svelte';
  interface Node {
		id: string;
		name: string;
		children?: Node[];
	}
	
    let selectedFileId = $state();

	// let selectedFileId: string | null = null;
	
	function selectFile(node: Node) {
		selectedFileId = node.id;
		console.log('Selected file:', node.name);
	}

	const collection = createTreeViewCollection<Node>({
    nodeToValue: (node) => node.id,
    nodeToString: (node) => node.name,
    rootNode: {
        id: 'root',
        name: '',
        children:folderStructure
        // children: [
        //     {
        //         id: 'OP_ISPITNI_ZADACI',
        //         name: 'OP_ISPITNI_ZADACI',
        //         children: [
        //
        //             {
        //                 id: 'OP_2024_01_K',
        //                 name: 'OP_2024_01_K',
        //                 children: [
        //                     {
        //                         id: 'OP_2024_01_K/1',
        //                         name: 'prviZadatak.c',
        //                     },
        //                     {
        //                         id: 'OP_2024_01_K/2',
        //                         name: 'drugiZadatak.c',
        //                     },
        //                     {
        //                         id: 'OP_2024_01_K/3',
        //                         name: 'treciZadatak.c'
        //                     },
        //                 ],
        //             },
        //             {
        //                 id: 'OP_2024_02_K',
        //                 name: 'OP_2024_02_K',
        //                 children: [
        //                     {
        //                         id: 'OP_2024_02_K/1',
        //                         name: 'prviZadatak.c',
        //                     },
        //                     {
        //                         id: 'OP_2024_02_K/2',
        //                         name: 'drugiZadatak.c',
        //                     },
        //                     {
        //                         id: 'OP_2024_02_K/3',
        //                         name: 'treciZadatak.c'
        //                     },
        //                 ],
        //             },
        //             {
        //                 id: 'OP_2024_06_ispit',
        //                 name: 'OP_2024_06_ispit',
        //                 children: [
        //                     {
        //                         id: 'OP_2024_06_ispit/1',
        //                         name: 'prviZadatak.c',
        //                     },
        //                     {
        //                         id: 'OP_2024_06_ispit/2',
        //                         name: 'drugiZadatak.c',
        //                     },
        //                     {
        //                         id: 'OP_2024_06_ispit/3',
        //                         name: 'treciZadatak.c'
        //                     },
        //                 ],
        //             },
        //             {
        //                 id: 'OP_2024_07_ispit',
        //                 name: 'OP_2024_07_ispit',
        //                 children: [
        //                     {
        //                         id: 'OP_2024_07_ispit/1',
        //                         name: 'prviZadatak.c',
        //                     },
        //                     {
        //                         id: 'OP_2024_07_ispit/2',
        //                         name: 'drugiZadatak.c',
        //                     },
        //                     {
        //                         id: 'OP_2024_07_ispit/3',
        //                         name: 'treciZadatak.c'
        //                     },
        //                 ],
        //             },
        //             {
        //                 id: 'OP_2024_09_ispit',
        //                 name: 'OP_2024_09_ispit',
        //                 children: [
        //                     {
        //                         id: 'OP_2024_09_ispit/1',
        //                         name: 'prviZadatak.c',
        //                     },
        //                     {
        //                         id: 'OP_2024_09_ispit/2',
        //                         name: 'drugiZadatak.c',
        //                     },
        //                     {
        //                         id: 'OP_2024_09_ispit/3',
        //                         name: 'treciZadatak.c'
        //                     },
        //                 ],
        //             },
        //             {
        //                 id: 'OP_2025_07_ispit',
        //                 name: 'OP_2025_07_ispit',
        //                 children: [
        //                     {
        //                         id: 'OP_2025_07_ispit/1',
        //                         name: 'prviZadatak.c',
        //                     },
        //                     {
        //                         id: 'OP_2025_07_ispit/2',
        //                         name: 'drugiZadatak.c',
        //                     },
        //                     {
        //                         id: 'OP_2025_07_ispit/3',
        //                         name: 'treciZadatak.c'
        //                     },
        //                 ],
        //             },
        //             {
        //                 id: 'OP_2025_08_ispit',
        //                 name: 'OP_2025_08_ispit',
        //                 children: [
        //                     {
        //                         id: 'OP_2025_08_ispit/1',
        //                         name: 'prviZadatak.c',
        //                     },
        //                     {
        //                         id: 'OP_2025_08_ispit/2',
        //                         name: 'drugiZadatak.c',
        //                     },
        //                     {
        //                         id: 'OP_2025_08_ispit/3',
        //                         name: 'treciZadatak.c'
        //                     },
        //                 ],
        //             },
        //             {
        //                 id: 'OP_2025_09_1_ispit',
        //                 name: 'OP_2025_09_1_ispit',
        //                 children: [
        //                     {
        //                         id: 'OP_2025_09_1_ispit/1',
        //                         name: 'prviZadatak.c',
        //                     },
        //                     {
        //                         id: 'OP_2025_09_1_ispit/2',
        //                         name: 'drugiZadatak.c',
        //                     },
        //                     {
        //                         id: 'OP_2025_09_1_ispit/3',
        //                         name: 'treciZadatak.c'
        //                     },
        //                 ],
        //             },
        //
        //         ],
        //
        //     },
        // ],
    },
    });
</script>

<div class="flex flex-col-reverse gap-4 p-3 sm:p-4 lg:flex-row-reverse">



  <div class="min-w-0 flex-1 rounded-xl p-3 sm:p-4 lg:max-w-88">
    <TreeView {collection}>

      <TreeView.Tree>
        {#each collection.rootNode.children || [] as node, index (node)}
          {@render treeNode(node, [index])}
        {/each}
      </TreeView.Tree>
    </TreeView>
    {#snippet treeNode(node: Node, indexPath: number[])}
      <TreeView.NodeProvider value={{ node, indexPath }}>
        {#if node.children}
          <div class="z-75">

            <TreeView.Branch>

              <TreeView.BranchControl>
                <TreeView.BranchIndicator />
                <TreeView.BranchText>
                  <FolderIcon class="size-4" />
                  {node.name}
                </TreeView.BranchText>
              </TreeView.BranchControl>
              <TreeView.BranchContent>
                <TreeView.BranchIndentGuide />
                {#each node.children as childNode, childIndex (childNode)}
                  {@render treeNode(childNode, [...indexPath, childIndex])}
                {/each}
              </TreeView.BranchContent>
            </TreeView.Branch></div>

        {:else}
          <TreeView.Item class="z-50"   onclick={() => selectFile(node)}>
            <FileIcon class="size-4" />
            <span class={selectedFileId === node.id ? 'text-blue-600 font-bold ' : ''}>
                        {node.name}
                    </span>
          </TreeView.Item>
        {/if}
      </TreeView.NodeProvider>

    {/snippet}
  </div >


  <div class="flex min-h-96 flex-1 items-center justify-center rounded-xl bg-purple-200 p-3 sm:p-4 lg:flex-2">
    {#if selectedFileId}
      <Loader id={selectedFileId}></Loader>
    {:else}
      <NotLoaded />
    {/if}
  </div>
</div>



