pkg.md {{ $params.pkg }}

<!-- @content -->

<script setup>
import { useData } from 'vitepress'

// params 是一个 Vue ref
const { params } = useData()

console.log(params.value)
</script>
