<script>
	import '../app.css';
import { Header } from '$lib';
import { page } from '$app/stores';
</script>

<Header currentPath={$page.url.pathname} />
<slot /> 