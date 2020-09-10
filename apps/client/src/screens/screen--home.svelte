<script>
  import {BlockEnter} from 'auth/ui'
  import {BlockPmNodeListView} from 'pm--node/ui'

  import SectionCenter from 'sections/section--center.svelte'
  import SectionAnimateCursorCircle from 'sections/animate/cursor-circle--popmotion.svelte'
</script>

<SectionAnimateCursorCircle />

<SectionCenter>
  <BlockEnter />
</SectionCenter>

<SectionCenter>
  <BlockPmNodeListView />
</SectionCenter>
